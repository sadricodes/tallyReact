import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const UserDirectoryCard = () => {
  return (
    <div style={{ flexBasis: "31%", flexGrow: "1" }}>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src="https://img.nickpic.host/5cO6ac.png" />
        <Card.Body>
          <Card.Title className="text-info">User Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            User Alias / Pronouns / Country
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>{" "}
          <ListGroup>
            <ListGroup.Item>
              <b>X</b> Characters
            </ListGroup.Item>
            <ListGroup.Item>
              Member for <b>X</b> Time
            </ListGroup.Item>
            <ListGroup.Item>Member Position</ListGroup.Item>
          </ListGroup>
          <Button variant="primary" className="mt-2 w-100">
            View User's Profile
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDirectoryCard;
