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

    // <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src={back2} className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={back2} className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={back2} className="d-block w-100" alt="..." />
    //     </div>
    //   </div>
    //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>


  )
}

export default CarouselComponent;
