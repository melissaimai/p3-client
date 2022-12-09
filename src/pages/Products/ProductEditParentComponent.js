import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductEdit from './ProductEdit'
import Loading from '../../components/Loading/Loading'

const ProductEditParentComponent = (props) => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null);
  const storedToken = localStorage.getItem('authToken')

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/product/${productId}/edit`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then(response => setProduct(response.data))
      .catch(err => console.log(err))
  }, [])
  if (product === null) {
    return <span><Loading /></span>
  }
  return (
    <ProductEdit product={product} />
  )
}

export default ProductEditParentComponent;