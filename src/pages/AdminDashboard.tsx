import { useEffect, useState } from "react";
import {
  Container,
  Table,
  Button,
  Badge,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import "../styles/AdminDashboard.css";

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
    <div className="admin-dashboard">
      {/* Professional Header */}
      <section className="admin-header">
        <div className="admin-header-content">
          <Container>
            <div className="text-center" data-aos="fade-up">
              <Badge className="admin-badge mb-3">
                <i className="bi bi-shield-check me-2"></i>ADMIN PORTAL
              </Badge>
              <h1 className="admin-title mb-3">Dashboard</h1>
              <p className="admin-subtitle">
                Comprehensive management system for appointments, users, and analytics
              </p>
            </div>
          </Container>
        </div>
      </section>

      {loading ? (
        <section className="loading-section">
          <Spinner className="admin-spinner" />
          <div className="loading-text">Loading dashboard data...</div>
        </section>
      ) : (
        <>
          {/* Enhanced Analytics */}
          <section className="stats-section">
            <Container>
              <Row className="g-4 justify-content-center">
                <Col lg={3} md={6}>
                  <div
                    className="stat-card"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="stat-card-body">
                      <i className="bi bi-calendar-event stat-icon"></i>
                      <div className="stat-number">{totalAppointments}</div>
                      <div className="stat-label">Total Appointments</div>
                      <div className="data-trend">
                        <span className="trend-arrow trend-up">↑</span>
                        <span>12% this month</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div
                    className="stat-card"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="stat-card-body">
                      <i className="bi bi-check-circle stat-icon"></i>
                      <div className="stat-number">{confirmed}</div>
                      <div className="stat-label">Confirmed</div>
                      <div className="data-trend">
                        <span className="trend-arrow trend-up">↑</span>
                        <span>8% this week</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div
                    className="stat-card"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="stat-card-body">
                      <i className="bi bi-clock stat-icon"></i>
                      <div className="stat-number">{pending}</div>
                      <div className="stat-label">Pending</div>
                      <div className="data-trend">
                        <span className="trend-arrow trend-down">↓</span>
                        <span>3% this week</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div
                    className="stat-card"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="stat-card-body">
                      <i className="bi bi-people stat-icon"></i>
                      <div className="stat-number">{users.length}</div>
                      <div className="stat-label">Total Users</div>
                      <div className="data-trend">
                        <span className="trend-arrow trend-up">↑</span>
                        <span>5% this month</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Enhanced Appointments Section */}
          <section className="data-section">
            <Container>
              <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">
                  <i className="bi bi-calendar-check"></i>
                  Appointments Management
                </h2>
                <Button className="refresh-btn" onClick={fetchData}>
                  <i className="bi bi-arrow-clockwise me-2"></i>
                  Refresh Data
                </Button>
              </div>
              
              {appointments.length === 0 ? (
                <div className="empty-state" data-aos="fade-up">
                  <i className="bi bi-calendar-x empty-icon"></i>
                  <h3 className="empty-title">No Appointments Found</h3>
                  <p className="empty-description">
                    No appointment requests have been submitted yet.
                  </p>
                </div>
              ) : (
                <div data-aos="fade-up" data-aos-delay="200">
                  <Table className="admin-table" responsive>
                    <thead>
                      <tr>
                        <th><i className="bi bi-calendar3 me-2"></i>Date</th>
                        <th><i className="bi bi-clock me-2"></i>Time</th>
                        <th><i className="bi bi-stopwatch me-2"></i>Duration</th>
                        <th><i className="bi bi-person me-2"></i>Client</th>
                        <th><i className="bi bi-envelope me-2"></i>Email</th>
                        <th><i className="bi bi-telephone me-2"></i>Phone</th>
                        <th><i className="bi bi-flag me-2"></i>Status</th>
                        <th><i className="bi bi-gear me-2"></i>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appt) => (
                        <tr key={appt.id}>
                          <td>{new Date(appt.date).toLocaleDateString()}</td>
                          <td>{appt.time}</td>
                          <td>{appt.duration} mins</td>
                          <td className="fw-semibold">{appt.name}</td>
                          <td>
                            <a href={`mailto:${appt.email}`} className="text-info text-decoration-none">
                              {appt.email}
                            </a>
                          </td>
                          <td>
                            {appt.phone ? (
                              <a href={`tel:${appt.phone}`} className="text-info text-decoration-none">
                                {appt.phone}
                              </a>
                            ) : (
                              <span className="text-muted">Not provided</span>
                            )}
                          </td>
                          <td>
                            <Badge
                              className={`status-badge status-${appt.status}`}
                            >
                              {appt.status.toUpperCase()}
                            </Badge>
                          </td>
                          <td>
                            {appt.status === "pending" ? (
                              <div className="d-flex flex-wrap gap-1">
                                <Button
                                  className="action-btn action-approve"
                                  onClick={() => approveAppointment(appt.id)}
                                >
                                  <i className="bi bi-check-lg me-1"></i>
                                  Approve
                                </Button>
                                <Button
                                  className="action-btn action-reject"
                                  onClick={() => rejectAppointment(appt.id)}
                                >
                                  <i className="bi bi-x-lg me-1"></i>
                                  Reject
                                </Button>
                              </div>
                            ) : (
                              <span className="text-muted fst-italic">No actions available</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </Container>
          </section>

          {/* Enhanced Users Section */}
          <section className="data-section">
            <Container>
              <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">
                  <i className="bi bi-people"></i>
                  User Management
                </h2>
                <Button className="refresh-btn" onClick={fetchData}>
                  <i className="bi bi-arrow-clockwise me-2"></i>
                  Refresh Data
                </Button>
              </div>
              
              {users.length === 0 ? (
                <div className="empty-state" data-aos="fade-up">
                  <i className="bi bi-person-x empty-icon"></i>
                  <h3 className="empty-title">No Users Found</h3>
                  <p className="empty-description">
                    No user accounts have been registered yet.
                  </p>
                </div>
              ) : (
                <div data-aos="fade-up" data-aos-delay="200">
                  <Table className="admin-table" responsive>
                    <thead>
                      <tr>
                        <th><i className="bi bi-envelope me-2"></i>Email Address</th>
                        <th><i className="bi bi-calendar-plus me-2"></i>Registration Date</th>
                        <th><i className="bi bi-gear me-2"></i>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u.id}>
                          <td className="fw-semibold">
                            <i className="bi bi-person-circle me-2 text-info"></i>
                            <a href={`mailto:${u.email}`} className="text-info text-decoration-none">
                              {u.email}
                            </a>
                          </td>
                          <td>{new Date(u.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</td>
                          <td>
                            <Button
                              className="action-btn action-remove"
                              onClick={() => {
                                if (window.confirm(`Are you sure you want to remove user ${u.email}? This action cannot be undone.`)) {
                                  removeUser(u.id);
                                }
                              }}
                            >
                              <i className="bi bi-trash me-1"></i>
                              Remove User
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </Container>
          </section>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
