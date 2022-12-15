
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";


const CheckoutSucess = () => {

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

  console.log(order)
  return (


    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card-checkout">
            <div className="text-left logo-checkout p-2 px-5"> <img src="https://i.imgur.com/2zDU056.png" width="50" alt="lgo" /> </div>
            <div className="invoice p-5">
              <h5>Your order Confirmed!</h5> <span className="font-weight-bold d-block mt-4">Hello, Chris</span> <span>You order has been confirmed and will be shipped in next two days!</span>
              <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div className="py-2"> <span className="d-block text-muted">Order Date</span> <span>12 Jan,2018</span> </div>
                      </td>
                      <td>
                        <div className="py-2"> <span className="d-block text-muted">Order No</span> <span>MT12332345</span> </div>
                      </td>
                      <td>
                        <div className="py-2"> <span className="d-block text-muted">Payment</span> <span><img src="https://img.icons8.com/color/48/000000/mastercard.png" width="20" /></span> </div>
                      </td>
                      <td>
                        <div className="py-2"> <span className="d-block text-muted">Shiping Address</span> <span>414 Advert Avenue, NY,USA</span> </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="product border-bottom table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td width="20%"> <img src="https://i.imgur.com/u11K1qd.jpg" width="90" /> </td>
                      <td width="60%"> <span className="font-weight-bold">Men's Sports cap</span>
                        <div className="product-qty"> <span className="d-block">Quantity:1</span> <span>Color:Dark</span> </div>
                      </td>
                      <td width="20%">
                        <div className="text-right"> <span className="font-weight-bold">$67.50</span> </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row d-flex justify-content-end">
                <div className="col-md-5">
                  <table className="table table-borderless">
                    <tbody className="totals">
                      <tr>
                        <td>
                          <div className="text-left"> <span className="text-muted">Subtotal</span> </div>
                        </td>
                        <td>
                          <div className="text-right"> <span>$168.50</span> </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="text-left"> <span className="text-muted">Shipping Fee</span> </div>
                        </td>
                        <td>
                          <div className="text-right"> <span>$22</span> </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="text-left"> <span className="text-muted">Tax Fee</span> </div>
                        </td>
                        <td>
                          <div className="text-right"> <span>$7.65</span> </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="text-left"> <span className="text-muted">Discount</span> </div>
                        </td>
                        <td>
                          <div className="text-right"> <span className="text-success">$168.50</span> </div>
                        </td>
                      </tr>
                      <tr className="border-top border-bottom">
                        <td>
                          <div className="text-left"> <span className="font-weight-bold">Subtotal</span> </div>
                        </td>
                        <td>
                          <div className="text-right"> <span className="font-weight-bold">$238.50</span> </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
              <p className="font-weight-bold mb-0">Thanks for shopping with us!</p> <span>MyStore Team</span>
            </div>
            <div className="d-flex justify-content-between footer-checkout p-3"> <span>Back to <a href="/">home page </a></span>
              <span>12 June, 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CheckoutSucess;