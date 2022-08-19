import Layout from "Components/Layout";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";

import "./landing.css";
const Landing = () => {
  return (
    <Layout>
      <Container>
        <div className="h1 text-center">El cuervo - Centro de estética</div>
        <Row className="justify-content-center">
          <Col className="allCentered">
            <Carousel variant="dark" className="fit-content-height">
              <Carousel.Item>
                <Container className="allCentered">
                  <Row className="justify-content-center">
                    <Card border="dark" bg="dark" style={{ width: "80%" }}>
                      <Card.Header>¿Quienes somos?</Card.Header>
                      <Card.Body>
                        <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container>
                  <Row className="justify-content-center ">
                    <Card border="dark" bg="primary" style={{ width: "80%" }}>
                      <Card.Header>¿Quienes somos?</Card.Header>
                      <Card.Body>
                        <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container>
                  <Row className="justify-content-center ">
                    <Card
                      border="dark"
                      bg="secondary"
                      style={{ width: "80%" }}
                    >
                      <Card.Header>¿Quienes somos?</Card.Header>
                      <Card.Body>
                        <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <p>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content. Some
              quick example text to build on the card title and make up the bulk
              of the card's content. Some quick example text to build on the
              card title and make up the bulk of the card's content. Some quick
              example text to build on the card title and make up the bulk of
              the card's content. Some quick example text to build on the card
              title and make up the bulk of the card's content.
            </p>
          </Col>
        </Row>
        <Row>
          {" "}
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </Layout>
  );
};
export default Landing;
