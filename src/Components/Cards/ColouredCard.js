import Card from "react-bootstrap/Card";
import * as React from "react";
function BgColorExample() {
  return (
    <Card bg="dark" text="white" className="mb-2">
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BgColorExample;
