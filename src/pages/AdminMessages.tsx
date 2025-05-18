import { useEffect, useState } from "react";
import { Container, Table, Spinner, Alert } from "react-bootstrap";
import { supabase } from "../supabase";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

const AdminMessages = () => {
  const { user, loadingUser } = useUser();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadingUser) return;
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      console.log("Data:", data); // ✅ Add this
      console.log("Error:", error); // ✅ Add this

      if (error) {
        console.error("Fetch error:", error);
      } else {
        setMessages(data as Message[]);
      }

      setLoading(false);
    };

    fetchMessages();
  }, [user, loadingUser, navigate]);

  if (loadingUser || loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="light" />
      </Container>
    );
  }

  return (
    <Container className="py-5 text-white">
      <h1 style={{ fontFamily: "Cormorant Garamond" }}>Messages Dashboard</h1>
      {messages.length === 0 ? (
        <Alert variant="secondary" className="mt-4">
          No messages yet.
        </Alert>
      ) : (
        <Table striped bordered hover className="mt-4 bg-white text-dark">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{new Date(msg.created_at).toLocaleString()}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={async () => {
                      const confirm = window.confirm("Delete this message?");
                      if (!confirm) return;

                      const { error } = await supabase
                        .from("messages")
                        .delete()
                        .eq("id", msg.id);

                      if (error) {
                        alert("Delete failed.");
                        console.error(error);
                      } else {
                        setMessages(messages.filter((m) => m.id !== msg.id));
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AdminMessages;
