import React from "react";
import Layout from "Components/Layout";
import "./landing.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBasic from "Components/Cards/CardOnlyText";
import Carrousel from "Components/Carrousel/CarrouselLanding";
import ImageCard from "Components/Cards/ImageCard";
import ImgOverlay from "Components/Cards/ImgOverlay";

const Landing = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <ImgOverlay height="100px" image="/assets/landing1.png">
              <div className="h1 text-center">
                El cuervo - Centro de estética
              </div>
            </ImgOverlay>
          </Col>
        </Row>
      </Container>
      <Container className="grid-landing">
        <Row>
          <Col className="col-layout" xs={12} sm={6}>
            <CardBasic title="Title 1">
              <div
                style={{ overflowY: "auto", height: "120px", margin: "15px" }}
              >
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500,
              </div>
            </CardBasic>
          </Col>
          <Col className="col-layout" xs={12} sm={6}>
            <Carrousel interval={1500}></Carrousel>
          </Col>
        </Row>
        <Row>
          <Col className="col-layout" xs={12} sm={4}>
            <ImageCard
              height="200px"
              title="Pasión"
              image="/assets/landing1.png"
            >
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500,
            </ImageCard>
          </Col>
          <Col className="col-layout" xs={12} sm={4}>
            <ImageCard
              height="200px"
              title="Excelencia"
              image="/assets/landing2.jpg"
            >
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500,
            </ImageCard>
          </Col>
          <Col className="col-layout" xs={12} sm={4}>
            <ImageCard
              height="200px"
              title="Vocación"
              image="/assets/landing3.jpg"
            >
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500,
            </ImageCard>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <ImageCard
              height="200px"
              title="Profesionalismo"
              image="/assets/landing3.jpg"
            >
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500,
            </ImageCard>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Landing;
