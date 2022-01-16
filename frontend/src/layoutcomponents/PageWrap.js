import React from "react";
import { Container } from "react-bootstrap";

const PageWrap = ({ children }) => {
  return (
    <div>
      <div className="App h-100" style={{ backgroundColor: "steelBlue" }}>
        <Container className="p-5">
          <div className="bg-light p-5 rounded-lg m-3">{children}</div>
        </Container>
      </div>
    </div>
  );
};

export default PageWrap;
