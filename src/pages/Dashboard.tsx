import { Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="mt-5">
      <h2>Welcome to your dashboard</h2>
      <p>This area is protected and only visible if you're logged in.</p>
    </Container>
  );
};

export default Dashboard;
