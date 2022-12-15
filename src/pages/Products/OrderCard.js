import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from '../ProfilePage/UserCard';
import "./Orders.css"

const OrderCard = ({ item }) => {
  const productId = (item.product[0]?._id)
  const address = (item.shipping.address)

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/product/detail/${productId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setProduct(response.data)
      });
  }, [productId]);

  const [expandedItem, setExpandedItem] = useState("0")
  return (
    <div className="order-card mb-3 ml-4">
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey={expandedItem}
          onSelect={(e) => {
            if (e !== null) {
              setExpandedItem(e);
              localStorage.setItem('expandedItem', e);
            }
          }}>
          <Accordion.Header className="d-flex flex-column">
            <div>
              <img
                className="border rounded ratio ratio-1x1 mr-3 "
                style={{ width: "100px" }}
                alt=""
                src={product?.img}
              />
            </div>
            <div>
              <div className='pb-1'>{product?.title}</div>
              <div>€ {item?.total}</div>
            </div>
          </Accordion.Header>
          <Accordion.Body className='pl-5'>
            <div className='mb-5'>
              <h3 className='mb-5'>Shopping Bill</h3>
              <table>
                <tbody>
                  <tr className='ordercard-ordernumber' >
                    <td className='ordercard-tr' align="left"> Order Number #</td>
                    <td className='ordercard-tr' align="right">{item?._id}</td>
                  </tr>
                  <tr>
                    <td align="left">Product Price</td>
                    <td align="right">€ {item?.subtotal}</td>
                  </tr>

                  <tr>
                    <td align="left"> Shipping fee</td>
                    <td align="right">€ {(item?.total - item?.subtotal).toFixed(2)}</td>
                  </tr>

                </tbody>
                <tfoot className='ordercard-tfoot'>
                  <tr>
                    <td align="left">Total</td>
                    <td align="right">€ {item?.total}</td>
                  </tr>
                </tfoot>
              </table>

              <div className='ordercard-address'>
                <h4>Address</h4>

                <div className="ordercard-card">
                  <address>
                    {item.shipping.name}<br />
                    {address.line1} <br /> {address.line2}
                    {address.city}, {address.postal_code}<br />
                    {address.country}
                  </address>
                </div>
              </div>

            </div>
            <div>Payment Status:</div><p className="text-muted">{item?.payment_status}</p>
            <div>Delivery Status:</div><p className="text-muted">{item?.delivery_status}</p>
            <div className="usercard-order" >
              <div>Sold By:</div>
              <div className="card-center"><UserCard user={product.createdBy} /></div>
            </div>


          </Accordion.Body>
        </Accordion.Item>
      </Accordion >
    </div >
  )
}

export default OrderCard;