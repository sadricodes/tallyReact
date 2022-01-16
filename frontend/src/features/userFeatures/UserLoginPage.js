import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import MainTitles from "../../layoutcomponents/MainTitles";
import FloatingFormWrap from "../../layoutcomponents/FloatingFormWrap";

const UserLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill out everything");
    }
    // API CALL TO SUBMIT FORM
    console.log("submitted!", email, password);
  };

  return (
    <FloatingFormWrap>
      <Form className="p-4 w-100" onSubmit={handleSubmit}>
        <MainTitles title="Log In" />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Row>
          <a href="">Forgot password?</a>
        </Row>
      </Form>
    </FloatingFormWrap>
  );
};

export default UserLoginPage;
