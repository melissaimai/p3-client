import Footer from "./Footer";
import CarouselComponent from "./CarouselComponent";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Products/ProductCard"

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false)
      });
  }, []);

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
          {!isLoading ? products.slice(0, 6).map((product) => {
            return <ProductCard key={product._id} product={product} />;
          }) : <h1>Loading</h1>}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage;