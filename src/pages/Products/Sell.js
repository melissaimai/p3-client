import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import service from "../../services/service";

import "./sell.css"

const Sell = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const storedToken = localStorage.getItem('authToken')
  const navigate = useNavigate();

  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new product in '/api/product' POST route
    uploadData.append("img", e.target.files[0]);
    service
      .uploadImage(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImg(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };




  const handleProductSubmit = (e) => {
    e.preventDefault();
    const body = { img, title, price, description };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/products`, body,
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

          <Form.Label htmlFor="img" className="register-label">Upload a picure</Form.Label>
          <Form.Control type="file" onChange={handleFileUpload} required />

          <div className="register-form-wrapper">
            <label htmlFor='title' className="register-label">Title</label>
            <input type="text" name='title' value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" required />
          </div>
          <div className="register-form-wrapper">
            <label className="register-label">Price</label>
            <input type="number" name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }} min="0" className="form-control" required />
          </div>
          <div className="register-form-wrapper">
            <label htmlFor='description' className="register-label">Describe your Item</label>
            <textarea type="textarea" name='description' value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" required />
          </div>

          <button className="register-btn" type="submit">Register Now</button>
        </form>
      </div>
    </div>
  )
}

export default Sell;