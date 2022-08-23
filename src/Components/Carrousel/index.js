import Carousel from "react-bootstrap/Carousel";
import CardOnlyText from "Components/Cards/CardOnlyText";

function Carrousel() {
  return (
    <Carousel fade variant="dark" controls={false}>
      <Carousel.Item>
        <CardOnlyText></CardOnlyText>
      </Carousel.Item>
      <Carousel.Item>
        <CardOnlyText></CardOnlyText>
      </Carousel.Item>
      <Carousel.Item>
        <CardOnlyText></CardOnlyText>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
