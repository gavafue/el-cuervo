import React from "react";
import Card from "react-bootstrap/Card";
import "./forgotPassword.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ForgotPassword = () => {
  return (
    <div className="login-body">
      <Card className="login-block">
        <Card.Header className="card-header">
          <div className="text-center h2">
            <b>El Cuervo</b>
          </div>
        </Card.Header>
        <Card.Body>
          <p className="message">
            Ingresa tu correo electrónico. Un email será enviado para recuperar
            la contraseña.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email." />
              <Form.Text className="text-muted">
                Nunca compartiremos tus datos con alguien más.
              </Form.Text>
            </Form.Group>
            <div className="centered-button">
              <Button variant="primary" type="submit">
                Recuperar contraseña
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPassword;
