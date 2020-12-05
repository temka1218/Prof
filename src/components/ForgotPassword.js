import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./Auth.css";
import { Container } from "react-bootstrap";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Таны нууц үг сэргээх зааврыг И-Мэйлээр явууллаа.");
    } catch {
      setError("Бүртгэлгүй байна.");
    }

    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center lmao"
      style={{ minHeight: "82vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Нууц үгээ мартсан</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>И-Мэйл</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Нууц үг сэргээх
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login">Нэвтрэх</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Бүртгэл байхгүй юу? <Link to="/signup">Бүртгүүлэх</Link>
          </div>
        </>
      </div>
    </Container>
  );
}
