import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import "./ProductEdit.css"

const ProductEdit = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  return (
    <div className="signup-wrapper">
      <div className="p-edit-inner ">
        <form className="register-form" onSubmit={"handleProductSubmit"}>
          <h3>Sell an item - edit</h3>
          <Form.Label htmlFor="img" className="register-label mt-3">Change the picure</Form.Label>
          <Form.Control type="text" value={img} onChange={(e) => { setImg(e.target.value) }} required />

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
          <div className='colunm'>
            <button className="register-btn" type="submit">Cancel</button>
            <button className="register-btn" type="submit">Save changes</button>
          </div>

        </form>
      </div>
    </div >
  )
}

export default ProductEdit;