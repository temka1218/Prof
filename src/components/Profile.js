import React, { useState } from "react";
import { Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";
import { Button } from './pages/Button';
import { Container } from "react-bootstrap";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "60vh" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4 col01 d-flex justify-content-center">
                Хэрэглэгчийн бүртгэл
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <Link to="/update-profile" className="btn btn-primary btn-nemelt w-100 mtt-3">
                Бүртгэл шинэчлэх
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" buttonSize="wide" onClick={handleLogout}>
              Гарах
            </Button>
          </div>
        </>
      </div>
    </Container>
  );
}
