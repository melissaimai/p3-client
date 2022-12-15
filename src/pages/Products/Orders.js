import React from "react";
import Search from "./Search";
import { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import ProductCard from "./ProductCard"
import Loading from "../../components/Loading/Loading.jsx"
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import OrderCard from "./OrderCard";
import "./Orders.css"

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);


  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/find/${user?._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setOrder(response.data);
      });
  }, []);

  // sold={item.product[0]?.sold}
  // console.log(order) array de objetos

  return (
    <div className="order-details">
      <div className="ml-5 mr-5">
        <div className="card h-100">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mb-5 mt-4" style={{ fontWeight: "bold", color: "#d74f23", fontSize: 25 }}>My Orders</h6>
              </div>
              <div className="product-profile row">

                {order.map((item) => {
                  return <OrderCard key={item._id} item={item} />
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Orders;