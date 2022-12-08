import Footer from "./Footer";
import CarouselComponent from "./CarouselComponent";
import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <div className="HomePage">

      <CarouselComponent />

      <div className="d-flex flex-column bg-white py-4">
        <p className="text-muted text-center px-5">
          Your online marketplace for buying and selling new or secondhand items, mainly clothing and accessories.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-dark mt-3" replace>
            Browse products
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {/* {Array.from({ length: 6 }, (_, i) => {
            return <FeatureProduct key={i} />;
          })} */}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage;