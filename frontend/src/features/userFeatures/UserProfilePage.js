import React from "react";
import { Col, Container, Row, Card, ListGroup, Button } from "react-bootstrap";
import PageWrap from "../../layoutcomponents/PageWrap";
import MainTitles from "../../layoutcomponents/MainTitles";

const UserProfilePage = () => {
  return (
    <PageWrap>
      <MainTitles title="My Profile" />
      <Row>
        <Col lg="4">
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src="https://img.nickpic.host/5cO6ac.png" />
            <Card.Body>
              <Card.Title className="text-info">User Position</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ListGroup>
                <ListGroup.Item>
                  <b>X</b> Characters
                </ListGroup.Item>
                <ListGroup.Item>
                  Member for <b>X</b> Time
                </ListGroup.Item>
                <ListGroup.Item>Timezone</ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="mt-2 w-100">
                View User's Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Row>
            <Card className="p-3">
              <h2 className="text-info">User's Profile</h2>
              <Card.Subtitle className="mb-2 text-muted">
                User Alias / Pronouns / Country
              </Card.Subtitle>
              <hr />
              <Container className="mb-5">
                This is where the user's information will be!
              </Container>
              <Container className="mb-5">
                <h4>About Me</h4>
                <hr />
                Text and stuff
              </Container>
              <Container className="mb-5">
                <h4>My Characters</h4>
                <hr />
                Character List
              </Container>

              <Container className="mb-5">
                <h4>Character Events</h4>
                <hr />
                All My Character Events
              </Container>
            </Card>
          </Row>
        </Col>
      </Row>
    </PageWrap>
  );
};

export default UserProfilePage;
