import Layout from "Components/Layout";
import "./landing.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBasic from "Components/Cards/CardOnlyText";
import Carrousel from "Components/Carrousel";
import ImageCard from "Components/Cards/ImageCard";


const Landing = () => {
  return (
    <Layout>
      <div className="h1 text-center">El cuervo - Centro de estética</div>
      <Container>
        <Row>
          <Col className="col-layout" xs={12} sm={6}>
            <CardBasic></CardBasic>
          </Col>
          <Col className="col-layout" xs={12} sm={6}>
            <Carrousel></Carrousel>
          </Col>
        </Row>
        <Row>
          <Col className="col-layout" xs={12} sm={4}>
            <ImageCard image="/assets/landing1.png" />
          </Col>
          <Col className="col-layout" xs={12} sm={4}>
            <ImageCard image="/assets/landing2.jpg" />
          </Col>
          <Col className="col-layout" xs={12} sm={4}>
            <ImageCard image="/assets/landing3.jpg" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Landing;
