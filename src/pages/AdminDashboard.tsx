import { useEffect, useState } from "react";
import {
  Container,
  Table,
  Button,
  Badge,
  Spinner,
  Row,
  Col,
  Card,
} from "react-bootstrap";

// ⚡️ Your constants:
const SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreHptd2prZGdybnZzcmZraHN3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjQwMTYzNCwiZXhwIjoyMDYxOTc3NjM0fQ.rHBxIrlm5bDalSsozonbjzAECX6c3vaqGOfYsuISdD8";

const PROJECT_URL = "https://bkxzmwjkdgrnvsrfkhsw.functions.supabase.co";

type Appointment = {
  id: string;
  date: string;
  time: string;
  duration: number;
  name: string;
  email: string;
  phone?: string;
  status: string;
};

type User = {
  id: string;
  email: string;
  created_at: string;
};

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // ✅ Fetch appointments
      const apptRes = await fetch(`${PROJECT_URL}/list-appointments`, {
        headers: {
          Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        },
      });
      const apptData = await apptRes.json();
      setAppointments(apptData);

      // ✅ Fetch users
      const userRes = await fetch(`${PROJECT_URL}/list-users`, {
        headers: {
          Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        },
      });
      const userData = await userRes.json();
      // 👇 FIXED HERE: unpack .users array
      setUsers(userData.users || []);
    } catch {
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  const approveAppointment = async (id: string) => {
    await fetch(`${PROJECT_URL}/update-appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({ id, status: "confirmed" }),
    });
    fetchData();
  };

  const rejectAppointment = async (id: string) => {
    await fetch(`${PROJECT_URL}/update-appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({ id, status: "rejected" }),
    });
    fetchData();
  };

  const removeUser = async (id: string) => {
    await fetch(`${PROJECT_URL}/delete-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  // Stats
  const totalAppointments = appointments.length;
  const confirmed = appointments.filter((a) => a.status === "confirmed").length;
  const pending = appointments.filter((a) => a.status === "pending").length;

  return (
    <Container className="py-5">
      <h1 className="mb-4">Admin Dashboard</h1>

      {loading ? (
        <Spinner animation="border" variant="warning" />
      ) : (
        <>
          {/* Analytics */}
          <Row className="mb-4">
            <Col md={4}>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title>Total Appointments</Card.Title>
                  <h2>{totalAppointments}</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title>Confirmed</Card.Title>
                  <h2>{confirmed}</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title>Pending</Card.Title>
                  <h2>{pending}</h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Appointments */}
          <h3>Appointments</h3>
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>{appt.duration} mins</td>
                  <td>{appt.name}</td>
                  <td>{appt.email}</td>
                  <td>{appt.phone || "-"}</td>
                  <td>
                    <Badge
                      bg={
                        appt.status === "confirmed"
                          ? "success"
                          : appt.status === "pending"
                          ? "warning"
                          : "secondary"
                      }
                    >
                      {appt.status}
                    </Badge>
                  </td>
                  <td>
                    {appt.status === "pending" ? (
                      <>
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => approveAppointment(appt.id)}
                          className="me-2"
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => rejectAppointment(appt.id)}
                        >
                          Reject
                        </Button>
                      </>
                    ) : (
                      <span style={{ color: "#aaa" }}>No actions</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Users */}
          <h3 className="mt-5 mb-3">Users</h3>
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Email</th>
                <th>Registered On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.email}</td>
                  <td>{new Date(u.created_at).toLocaleDateString()}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => removeUser(u.id)}
                    >
                      Remove User
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default AdminDashboard;
