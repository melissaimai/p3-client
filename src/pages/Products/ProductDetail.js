import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context.jsx";
import { faHeart, faCartPlus, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from "../ProfilePage/UserCard";
import Loading from "../../components/Loading/Loading.jsx"

const ProductDetail = () => {

  const { productId } = useParams()
  const location = useLocation()
  const [product, setProduct] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`http://localhost:5005/api/product/detail/${productId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setProduct(response.data)
      });
  }, [productId]);

  function handleEdit(e) {
    e.preventDefault();
    navigate(`/product/${productId}/edit`);
  }

  function handleDelete(e) {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_URL}/api/products/${productId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        navigate(-1);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-3 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-light rounded mb-4">
        <ol className="breadcrumb p-3">


          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to={location?.state?.prevPath}>
              Back
            </Link>
          </li>



          <li className="breadcrumb-item">
            {product.title}
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        <div className="d-none d-lg-block col-lg-1">
          <div className="image-vertical-scroller">
            <div className="d-flex flex-column">
              {Array.from({ length: 1 }, (_, i) => {
                let selected = i !== 1 ? "opacity-6" : "";
                return (
                  <div key={i}>
                    <img
                      className={"rounded mb-2 ratio " + selected}
                      alt=""
                      src={product.img}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={product.img}
              />
            </div>
          </div>

          {/* <div className="row mt-2">
            <div className="col-12">
              <div
                className="d-flex flex-nowrap"
                style={{ overflowX: "scroll" }}
              >
                {Array.from({ length: 8 }, (_, i) => {
                  return (
                    <a key={i} href="!#">
                      <img
                        className="cover rounded mb-2 me-2"
                        width="70"
                        height="70"
                        alt=""
                        src={Image}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div> */}
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">{product.title}</h2>
            <h4 className="text-muted mb-4">${product.price}</h4>
            <h4 className="mb-0">Description</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
                {product.description}
              </small>
            </p>

            {!isLoading ? product.createdBy?._id !== user._id && (
              <>
                <div className="row g-3 mb-5">
                  <div className="col">
                    <button className="btn btn-outline-dark py-2 w-100">
                      <FontAwesomeIcon icon={faHeart} className="pr-2" />Add to favorites
                    </button>
                  </div>
                  <div className="col">
                    <button className="btn btn-dark py-2 w-100">
                      <FontAwesomeIcon icon={faCartPlus} className="pr-2" />Buy now</button>
                  </div>

                </div>
                <UserCard user={product.createdBy} />
              </>
            ) : <Loading />}


            {!isLoading ? product.createdBy?._id === user._id && (
              <div className="row g-3 mb-4">
                <div className="col">
                  <button className="btn btn-outline-dark py-2 w-100" onClick={handleEdit}>
                    <FontAwesomeIcon icon={faPenToSquare} className="pr-2" />Edit product
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-dark py-2 w-100" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} className="pr-2" />Delete product</button>
                </div>
              </div>
            ) : <Loading />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
