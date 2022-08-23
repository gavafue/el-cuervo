import Card from "react-bootstrap/Card";

function ImgOverlay({ image, title, children, footer, height }) {
  return (
    <Card className="bg-dark text-white">
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
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
        <Card.Text>{footer}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;
