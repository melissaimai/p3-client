import Card from 'react-bootstrap/Card';
import "./ProductCard.css"
import { Link } from "react-router-dom";
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ProductDetail from "./ProductDetail";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context.jsx";
import HeartButton from './HeartButton';
import PayButton from './PayButton';

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);


  return (
    <Card key={product._id} style={{ width: '18rem' }} className="m-5" >
      <Card.Body>
        <Link to={{ pathname: `/product/detail/${product._id}` }} state={{ prevPath: window.location.pathname }} style={{ textDecoration: 'none', color: "black" }} >
          <Card.Img variant="top" src={product.img} className="p-2" />
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">€ {product.price}</Card.Subtitle>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Link>

        {(product.createdBy._id !== user?._id && (
          <>
            {/* <Link href="/favorites"> */}
            {/* <FontAwesomeIcon className='nav-icon-heart' icon={faHeart} size="lg" /> */}
            <HeartButton
              user={user}
              product={product}
            />
            {/* </Link> */}
            <div className="d-grid d-block">

              <PayButton product={product} />

            </div>
          </>
        ))}
      </Card.Body>
    </Card >
  )
}

export default ProductCard;