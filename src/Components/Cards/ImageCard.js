import React from "react";
import Card from "react-bootstrap/Card";

function BasicExample({ image, title, children }) {
  return (
    <Card>
      <div
        className="cardImageStyle"
        style={{
          backgroundImage: `url(${image})`,
          height: "200px",
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

export default BasicExample;
