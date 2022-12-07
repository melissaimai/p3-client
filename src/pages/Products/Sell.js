import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import "./sell.css"

const Sell = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const storedToken = localStorage.getItem('authToken')
  const navigate = useNavigate();

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const body = { img, title, price, description };

    axios
      .post("http://localhost:5005/api/products", body,
        { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        // const productId = response.data._id
        navigate("/products");
      })
  }

  return (
    <div className="register-wrapper">
      <div className="register-inner">
        <form className="register-form" onSubmit={handleProductSubmit}>
          <h3>Register a new product</h3>
          {/* controlId="formFileMultiple" */}

          <Form.Label htmlFor="img" className="register-label">Upload picures</Form.Label>
          <Form.Control type="file" name="img" value={img} onChange={(e) => { setImg(e.target.value) }} multiple />

          <div className="register-form-wrapper">
            <label htmlFor='title' className="register-label">Title</label>
            <input type="text" name='title' value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" />
          </div>
          <div className="register-form-wrapper">
            <label className="register-label">Price</label>
            <input type="number" name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }} min="0" className="form-control" />
          </div>
          <div className="register-form-wrapper">
            <label htmlFor='description' className="register-label">Describe your Item</label>
            <textarea type="textarea" name='description' value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" />
          </div>

          <button className="register-btn" type="submit">Register Now</button>
        </form>
      </div>
    </div>
  )
}

export default Sell;