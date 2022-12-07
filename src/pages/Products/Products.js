import React from "react";
import Search from "./Search";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [listResearchList, setResearchList] = useState(products);
  const [input, setInput] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const handleSearch = (event) => {
    setInput(event.target.value)
    const filteredList = products.filter(product => {
      return product.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setProducts(filteredList)
  }

  return (
    <div>
      <h1>Product List</h1>

      <Search handleSearch={handleSearch} input={input} />
      {products.length !== 0 ? products.map((product) => {
        return (
          <div key={product._id}>
            <img src={product.img} alt="" />
            <h3>{product.title}</h3>
            <h3>EUR {product.price}</h3>
            <h3>{product.description}</h3>

          </div>
        );
      }) : <h4>No item</h4>}
    </div>
  )


}

export default Products;