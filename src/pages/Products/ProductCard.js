import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from 'react-bootstrap/Card';
import "./ProductCard.css"
import { Link } from "react-router-dom";
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({ product }) => {

  return (
    <Card key={product._id} style={{ width: '18rem' }} className="m-5" >
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Link to="/item-details" style={{ textDecoration: 'none', color: "black" }}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">$ {product.price}</Card.Subtitle>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Link>
        <Link to="/favorites">
          <FontAwesomeIcon className='nav-icon' icon={faHeart} size="lg" />
        </Link>
        <div className="d-grid d-block">
          <button className="btn btn-outline-dark mt-3">
            <FontAwesomeIcon icon={faCartPlus} /> Buy
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;