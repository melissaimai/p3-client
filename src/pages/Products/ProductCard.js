import Card from 'react-bootstrap/Card';
import "./ProductCard.css"
import { Link } from "react-router-dom";
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ProductDetail from "./ProductDetail";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context.jsx";


const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);

  return (
    <Card key={product._id} style={{ width: '18rem' }} className="m-5" >
      <Card.Body>
        <Link to={`/product/detail/${product._id}`} style={{ textDecoration: 'none', color: "black" }}  >
          <Card.Img variant="top" src={product.img} className="p-2" />
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">$ {product.price}</Card.Subtitle>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Link>


        {product.createdBy !== user._id && (
          <>
            <Link href="/favorites">
              <FontAwesomeIcon className='nav-icon' icon={faHeart} size="lg" />
            </Link>
            <div className="d-grid d-block">
              <button className="btn btn-outline-dark mt-3">
                <FontAwesomeIcon icon={faCartPlus} /> Buy
              </button>
            </div>
          </>
        )}

      </Card.Body>
    </Card >
  )
}

export default ProductCard;