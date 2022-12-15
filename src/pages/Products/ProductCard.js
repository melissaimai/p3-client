import Card from 'react-bootstrap/Card';
import "./ProductCard.css"
import { Link } from "react-router-dom";
import { useContext, } from "react";
import { AuthContext } from "../../context/auth.context.jsx";
import HeartButton from './HeartButton';
import PayButton from './PayButton';


const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);

  return (
    <Card key={product._id} style={{ width: '18rem' }} className="m-5" >
      <Card.Body>

        {(product.sold && (
          <div className="sold-tag" style={{ backgroundColor: "#32CD32" }}>SOLD</div>
        ))}

        <Link to={{ pathname: `/product/detail/${product._id}` }} state={{ prevPath: window.location.pathname }} style={{ textDecoration: 'none', color: "black" }} >
          <Card.Img variant="top" src={product.img} className="card-product-image p-2" />
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">€ {product.price}</Card.Subtitle>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Link>

        {(!product.sold && (
          (product.createdBy._id !== user?._id && (
            <div>
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
            </div>
          ))
        ))}
      </Card.Body>
    </Card >
  )
}

export default ProductCard;