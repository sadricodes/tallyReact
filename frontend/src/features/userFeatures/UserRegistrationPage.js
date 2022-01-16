import React from "react";
import { Button, Form } from "react-bootstrap";
import FloatingFormWrap from "../../layoutcomponents/FloatingFormWrap";
import MainTitles from "../../layoutcomponents/MainTitles";

const UserRegistrationPage = () => {
  return (
    <FloatingFormWrap>
      <Form className="p-4 w-100">
        <MainTitles title="Register" />
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Select your username"
            name="username"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmailSet">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordSet">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </FloatingFormWrap>
  );
};

export default UserRegistrationPage;
