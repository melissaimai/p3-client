import back1 from '../../assets/2.png'
import back2 from '../../assets/3.png'
import back3 from '../../assets/10.png'
import './CarouselComponent.css'
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {

  return (

    <Carousel>
      <Carousel.Item id="carousel-item" interval={5000}>
        <img
          className="d-block w-90"
          src={back1}
          alt="First slide"
        />
        <Carousel.Caption >

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="carousel-item" interval={5000}>
        <img
          className="d-block w-100"
          src={back2}
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="carousel-item" interval={5000}>
        <img
          className="d-block w-100"
          src={back3}
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default CarouselComponent;
