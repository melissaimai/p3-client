import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import "./ProductEdit.css"
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/auth.context'
import axios from 'axios'
import service from "../../services/service";

const ProductEdit = ({ product }) => {
  const [img, setImg] = useState(product.img);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const navigate = useNavigate();
  const storedToken = localStorage.getItem('authToken')
  // const { user } = useContext(AuthContext)

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

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      img,
      title,
      price,
      description
    }
    axios.put(
      `${process.env.REACT_APP_SERVER_URL}/api/product/${product._id}`,
      payload,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then(response => {
        navigate(`/product/detail/${product._id}`)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="signup-wrapper">
      <div className="p-edit-inner ">
        <form className="register-form" onSubmit={handleSubmit} >

          <h3>Sell an item - edit</h3>
          <img className="edit-img" src={img} alt="" style={{ maxHeight: 250 }} />
          <Form.Label htmlFor="img" className="register-label mt-3">Change the picure</Form.Label>
          <Form.Control type="file" onChange={handleFileUpload} />

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
          <div className='colunm'>
            <button className="register-btn" onClick={() => navigate(-1)}>Cancel</button>
            <button className="register-btn" type="submit">Save changes</button>
          </div>

        </form>
      </div>
    </div >
  )
}

export default ProductEdit;