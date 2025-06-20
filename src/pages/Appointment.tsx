import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/CustomDatepicker.css";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bkxzmwjkdgrnvsrfkhsw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
);

type Appointment = {
  id: string;
  date: string;
  time: string;
  duration: number;
};

const Appointment = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [duration, setDuration] = useState(30);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      const { data } = await supabase.from("appointments").select("*");
      if (data) setAppointments(data as Appointment[]);
    };
    fetchAppointments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDateTime) return;

    const selectedDate = selectedDateTime.toISOString().split("T")[0];
    const selectedTime = selectedDateTime
      .toTimeString()
      .split(":")
      .slice(0, 2)
      .join(":");

    const overlapping = appointments.find(
      (appt) => appt.date === selectedDate && appt.time === selectedTime
    );
    if (overlapping) {
      alert("Sorry, this slot is already booked.");
      return;
    }

    const { error } = await supabase.from("appointments").insert({
      date: selectedDate,
      time: selectedTime,
      duration,
      name,
      email,
      phone,
    });

    if (error) {
      alert(`Failed to submit: ${error.message}`);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div
      style={{ backgroundColor: "#0a0f2c", color: "white", minHeight: "100vh" }}
    >
      <Container className="py-5">
        <h1
          className="text-center mb-4"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Book an Appointment
        </h1>
        <p className="text-center mb-5">
          Pick a date & time — same-day bookings are disabled.
        </p>
        <Row>
          <Col md={6} className="mb-4">
            <h5>Select Date & Time</h5>
            <div style={{ width: "100%" }}>
              <DatePicker
                selected={selectedDateTime}
                onChange={(date) => setSelectedDateTime(date)}
                showTimeSelect
                minDate={new Date(Date.now() + 24 * 60 * 60 * 1000)}
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Click to select date & time"
                className="custom-datepicker-input"
                calendarClassName="custom-datepicker"
                inline
              />
            </div>
          </Col>
          <Col md={6}>
            <h5>Appointment Details</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Selected Date & Time</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedDateTime ? selectedDateTime.toString() : ""}
                  readOnly
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Duration</Form.Label>
                <Form.Select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="custom-input"
                >
                  <option value={30}>30 Minutes</option>
                  <option value={60}>1 Hour</option>
                  <option value={120}>2 Hours</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone (Optional)</Form.Label>
                <Form.Control
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="custom-input"
                />
              </Form.Group>
              <Button
                variant="warning"
                type="submit"
                disabled={!selectedDateTime}
              >
                Send Request
              </Button>
            </Form>
            {submitted && (
              <Alert variant="success" className="mt-4">
                Appointment request sent! You’ll get a confirmation soon.
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appointment;
