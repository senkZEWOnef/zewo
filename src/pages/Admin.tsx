import { useEffect, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { supabase } from "../supabase";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

type BuildRequest = {
  id: string;
  name: string;
  email: string;
  request: string;
  created_at: string;
};

const Admin = () => {
  const userContext = useUser();
  const user = userContext?.user;
  const loadingUser = userContext?.loadingUser;
  const navigate = useNavigate();

  const [requests, setRequests] = useState<BuildRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadingUser) return;

    if (!user) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabase
        .from("build_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase fetch error:", error);
      } else {
        console.log("Fetched data:", data);
        setRequests(data as BuildRequest[]);
      }

      setLoading(false);
    };

    fetchData();
  }, [user, loadingUser, navigate]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from("build_requests")
      .delete()
      .eq("id", id);
    if (error) {
      console.error("Delete error:", error);
      alert("Could not delete request.");
    } else {
      setRequests((prev) => prev.filter((req) => req.id !== id));
    }
  };

  if (loadingUser || loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="dark" />
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 style={{ fontFamily: "Cormorant Garamond" }}>Admin Dashboard</h1>
      {requests.length === 0 ? (
        <Alert variant="secondary" className="mt-4">
          No job requests yet.
        </Alert>
      ) : (
        <div className="mt-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="border rounded shadow-sm p-4 mb-4"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5>{req.name}</h5>
                  <p className="mb-1 text-muted">{req.email}</p>
                  <p className="mb-1">
                    <strong>Request:</strong> {req.request}
                  </p>
                  <small className="text-muted">
                    Submitted: {new Date(req.created_at).toLocaleString()}
                  </small>
                </div>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(req.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Admin;
