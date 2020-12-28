import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import { Container } from "react-bootstrap"

const Contact = () => {
    return (
        <Container
            className="d-flex align-items-center justify-content-center lmao"
            style={{ minHeight: "82vh" }}
        >
            <div className="w-100" style={{ maxWidth: "500px" }}>
                <>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Хүсэлт</h2>
                            <Form>
                                <Form.Group id="name">
                                    <Form.Label>Нэр</Form.Label>
                                    <Form.Control type="text" required placeholder="Байгууллага, хувь хүний нэр" />
                                </Form.Group>
                                <Form.Group id="email">
                                    <Form.Label>Нууц үг</Form.Label>
                                    <Form.Control type="email"required placeholder="Холбоо барих цахим хаяг аа оруулна уу" />
                                </Form.Group>
                                <Form.Group id="text">
                                    <Form.Label>Санал</Form.Label>
                                    <Form.Control type="text" required placeholder="Хамтран ажиллах санал хүсэлтээ оруулна уу" />
                                </Form.Group>
                                <Button className="w-100" type="submit">
                                    Хүсэлт явуулах
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </>
            </div>
        </Container>
    )
}

export default Contact
