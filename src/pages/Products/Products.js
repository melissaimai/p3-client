import React from "react";
import Search from "./Search";
import { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
// import { faMagnifyingGlass, faList, faGripVertical } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "./ProductCard"
import Loading from "../../components/Loading/Loading.jsx"
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchedList, setSearchedList] = useState([])
  const [input, setInput] = useState("")
  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
        setSearchedList(response.data)
      });
  }, []);

  const productList = input.length === 0 ? products : searchedList

  const handleSearch = (event) => {
    setInput(event.target.value)
    const filteredList = productList.filter(product => {
      return product.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setSearchedList(filteredList)
  }

  return (
    <div className="container mt-0 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="rounded" style={{ backgroundColor: "#e7e7e7" }}>
        <ol className="breadcrumb p-2 pt-3 mb-0">
          <li className="">
            <div className="input-group ml-2">
              <Search handleSearch={handleSearch} input={input} />
            </div>
          </li>
          <li className="breadcrumb-item">
            <div className="input-group ml-3 mt-1" style={{ fontWeight: 'bold', fontSize: '19px' }} >
              Product list
            </div>
          </li>
        </ol>
      </nav>

      <div className="row m-4 mt-lg-3">
        {!isLoading ? productList.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        }) : <Loading />}
      </div>

    </div >
  )
}

export default Products;