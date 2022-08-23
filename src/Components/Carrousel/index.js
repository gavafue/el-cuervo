import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardOnlyText from "Components/Cards/CardOnlyText";

function Carrousel() {
  return (
    <Carousel fade variant="dark" controls={false}>
      <Carousel.Item>
        <CardOnlyText title="title 2">
          
          <div style={{ overflowY: "auto", height: "120px", margin: "15px" }}>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500,
          </div>
        </CardOnlyText>
      </Carousel.Item>
      <Carousel.Item>
        <CardOnlyText title="title 3">
          
          <div style={{ overflowY: "auto", height: "120px", margin: "15px" }}>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, Lorem Ipsum es simplemente el
            texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
            ha sido el texto de relleno estándar de las industrias desde el año
            1500,
          </div>
        </CardOnlyText>
      </Carousel.Item>
      <Carousel.Item>
        <CardOnlyText title="title 4">
          
          <div style={{ overflowY: "auto", height: "120px", margin: "15px" }}>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, Lorem Ipsum es simplemente el
            texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
            ha sido el texto de relleno estándar de las industrias desde el año
            1500, Lorem Ipsum es simplemente el texto de relleno de las
            imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
            relleno estándar de las industrias desde el año 1500,
          </div>
        </CardOnlyText>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
