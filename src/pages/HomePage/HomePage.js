import Footer from "./Footer";
import CarouselComponent from "./CarouselComponent";

const HomePage = () => {

  return (
    <div className="HomePage">

      <CarouselComponent />

      <section className="py-5">
        <div className="container">
          <h1 className="fw-light">Half Page Image Slider</h1>
          <p className="lead">The background images for the slider are set directly in the HTML using inline CSS. The images
            in this snippet are from <a href="https://unsplash.com">Unsplash</a>!</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage;