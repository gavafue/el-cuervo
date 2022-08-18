import Card from "react-bootstrap/Card";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  remember: yup.bool()
});

const Login = () => {
  return (
    <div className="login-body">
      <Card className="login-block">
        <Card.Header class="card-header">
          <div class="text-center h1">
            <b>El Cuervo</b>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text class="text-center">
            Inicia sesión para continuar
          </Card.Text>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
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
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="validationFormikUsername">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={errors.username}
                      isValid={values.username && !errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationFormikUsername">
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Password"
                      aria-describedby="inputGroupPrepend"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={errors.password}
                      isValid={values.password && !errors.password}
                    />{" "}
                    <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    name="remember"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    feedbackType="invalid"
                    id="validationFormik0"
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
