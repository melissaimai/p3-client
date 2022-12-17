import axios from "axios";
import { url } from "../../slices/api";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context.jsx";

const PayButton = ({ product }) => {
  const { user, isLoggedIn } = useContext(AuthContext);

  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        product: product,
        userId: user._id,

      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>

      <button onClick={() => (isLoggedIn ? handleCheckout() : window.location.href = "/login")} className="btn btn-outline-dark py-2 w-100">
        <FontAwesomeIcon icon={faCartPlus} /> Buy Now
      </button>
    </>
  );
};

export default PayButton;