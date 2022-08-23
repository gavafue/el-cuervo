import Card from "react-bootstrap/Card";

function CardOnlyText({ title, subtitle, children, footer }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{children}</Card.Text>
        {footer}
      </Card.Body>
    </Card>
  );
}

export default CardOnlyText;
