import React from "react";
import Card from "react-bootstrap/Card";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as yup from "yup";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  username: yup
    .string("Solo caracteres alfanuméricos")
    .required("Este campo es requerido"),
  password: yup
    .string("Solo caracteres alfanuméricos")
    .required("Este campo es requerido"),
  remember: yup.bool(),
});
const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    console.log(e);
    navigate("/home");
  };

  return (
    <div className="login-body">
      <Card className="login-block">
        <Card.Header className="card-header">
          <div className="text-center h1">
            <b>El Cuervo</b>
          </div>
          <Card.Text className="text-center">
            Inicia sesión para continuar
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
              username: "",
              password: "",
              remember: false,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              dirty,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="validationFormikUsername">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faAt} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Usuario"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={values.username && errors.username}
                      isValid={values.username && !errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationFormikUsername">
                  <Form.Label>Contraseña</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Contraseña"
                      aria-describedby="inputGroupPrepend"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={values.password && errors.password}
                      isValid={values.password && !errors.password}
                    />
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faKey} />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <div className="loginRow">
                  <Form.Group className="rememberCheckbox">
                    <Form.Check
                      name="remember"
                      label="Recordar"
                      onChange={handleChange}
                      feedbackType="invalid"
                      id="validationFormik0"
                    />
                  </Form.Group>
                  <Button
                    className="loginButton"
                    disabled={!isValid || !dirty}
                    type="submit"
                  >
                    Conectarse
                  </Button>
                </div>
              </Form>
            )}
          </Formik>

          <p>
            <Link to="/forgotPassword">Olvidé mi contraseña</Link>
          </p>
          <p>
            <Link to="/register">Registrarse</Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
