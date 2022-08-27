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
  email: yup
    .string()
    .email("Debe de ser un formato de mail valido")
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
              email: "",
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
                <Form.Group controlId="validationFormikemail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faAt} />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={values.email && errors.email}
                      isValid={values.email && !errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationFormikpassword">
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
