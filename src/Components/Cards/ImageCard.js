import React from "react";
import Card from "react-bootstrap/Card";

function ImageCard({ image, title, children, height }) {
  return (
    <Card>
      <div
        className="cardImageStyle"
        style={{
          backgroundImage: `url(${image})`,
          height: `${height}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
