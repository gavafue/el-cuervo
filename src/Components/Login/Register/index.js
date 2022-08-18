import Card from "react-bootstrap/Card";
import "./register.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Formik } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faCircleUser,
  faIdCard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const schema = yup.object().shape({
    completeName: yup
      .string()
      .min(7, "Ingrese minimo 7 caracteres")
      .matches(/[a-zA-Z]+ [a-zA-Z]+/i, "Solo letras y al menos un espacio")
      .required("Nombre es un campo requerido"),
    username: yup.string().required("Usuario es un campo requerido"),
    email: yup
      .string()
      .email("Debe ingresar un e-mail válido")
      .required("Email es un campo requerido"),
    password: yup
      .string()
      .min(8, "Minimo 8 caracteres")
      .matches(/[a-z]+/i, "Mínimo una letra")
      .matches(/[0-9]+/i, "Mínimo un número")
      .required("Contraseña es un campo requerido"),
    rptPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Contraseña debe ser la misma")
      .required("Ingrese contraseña nuevamente"),
    terms: yup
      .bool()
      .required()
      .oneOf([true], "Aceptar términos y condiciones"),
  });

  return (
    <div className="login-body">
      <Card className="login-block">
        <Card.Header className="card-header">
          <div className="text-center h2">
            <b>El Cuervo</b>
          </div>
          <p className="text-center">Registrar nuevo usuario</p>
        </Card.Header>

        <Card.Body>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              completeName: "",
              username: "",
              email: "",
              password: "",
              rptPassword: "",
              terms: false,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              isValid,
              errors,
              dirty,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="validationFormik01">
                  <Form.Label>Nombre Completo</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Nombre completo"
                      name="completeName"
                      value={values.completeName}
                      onChange={handleChange}
                      isValid={!errors.completeName && values.completeName}
                      isInvalid={values.completeName && errors.completeName}
                    />
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faCircleUser} />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.completeName}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationFormikUsername">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isValid={values.username && !errors.username}
                      isInvalid={values.username && errors.username}
                    />
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faIdCard} />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationFormik03">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={values.email && !errors.email}
                      isInvalid={values.email && errors.email}
                    />
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faAt} />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationFormik04">
                  <Form.Label>Contraseña</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isValid={values.password && !errors.password}
                      isInvalid={values.password && errors.password}
                    />
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="validationFormik05">
                  <Form.Label>Repite contraseña</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      placeholder="Repita contraseña"
                      name="rptPassword"
                      value={values.rptPassword}
                      onChange={handleChange}
                      isValid={values.rptPassword && !errors.rptPassword}
                      isInvalid={values.rptPassword && errors.rptPassword}
                    />
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.rptPassword}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group>
                  <Form.Check
                    required
                    name="terms"
                    label="Aceptar términos y condiciones"
                    onChange={handleChange}
                    isValid={values.terms && !errors.terms}
                    isInvalid={values.terms && errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik0"
                  />
                </Form.Group>

                <div className="centered-button">
                  <Button type="submit" disabled={!isValid || !dirty}>
                    Registrarse
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
