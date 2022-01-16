import React from "react";
import { Card, Container, Form } from "react-bootstrap";

const FloatingFormWrap = (props) => {
  return (
    <div className="App h-100" style={{ backgroundColor: "steelBlue" }}>
      <Container className="p-5 centerlogin">
        <Card className="w-50">{props.children}</Card>
      </Container>
    </div>
  );
};

export default FloatingFormWrap;
