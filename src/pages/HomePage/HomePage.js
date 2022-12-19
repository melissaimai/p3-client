
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductCard from "../Products/ProductCard"
import Loading from "../../components/Loading/Loading.jsx"
import { AuthContext } from "../../context/auth.context";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
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
          {!isLoading ? products.slice(products.length - 6).reverse().map((product) => {
            return <ProductCard key={product._id} product={product} />;
          }) : <Loading />}
        </div>
      </div>

    </div>
  )
}

export default HomePage;