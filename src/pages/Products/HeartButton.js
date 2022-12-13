import axios from 'axios'
import { useParams } from 'react-router-dom'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartBorder } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HeartButton(props) {
  const { user, product } = props
  const { productId } = useParams()
  const [userInfo, setUserInfo] = useState(null);
  const storedToken = localStorage.getItem("authToken");


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/profile/${user?._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUserInfo(response.data.user);
      });
  }, [user?._id]);


  const likeProduct = () => {
    axios.put(
      `${process.env.REACT_APP_SERVER_URL}/api/product/${product?._id}/like`,
      {},
      { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        setUserInfo(response.data)
      })
      .catch(err => console.log(err))
  }

  // function handleLikeClick(e) {
  //   e.preventDefault();
  //   const targetId = e.currentTarget.id;

  //   if (userSports.includes(targetId)) {
  //     const userSportsCopy = [...userSports];
  //     setUserSports(userSportsCopy.filter((sport) => sport !== targetId));
  //   } else {
  //     const userSportsCopy = [...userSports];
  //     setUserSports([...userSportsCopy, targetId]);
  //   }
  // }

  const unlikeProduct = () => {

    axios.put(
      `${process.env.REACT_APP_SERVER_URL}/api/product/${product?._id}/unlike`,
      {},
      { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        console.log(response.data)
        setUserInfo(response.data)
      })
      .catch(err => console.log(err))
  }

  // if (userInfo?.likedProducts?.filter(prod => prod._id === user._id).length !== 0) {
  if (userInfo?.likedProducts?.filter(product => (product._id.includes(productId)))) {
    return (
      <button className="btn-unlike mb-2" onClick={unlikeProduct}>
        <FontAwesomeIcon className='nav-icon-heart' icon={faHeartBorder} size="lg" />
      </button>
    )
  }
  return (
    <Link className="" onClick={likeProduct}>
      <FontAwesomeIcon className='nav-icon-heart mb-2' icon={faHeart} size="lg" />
    </Link>
  )
}

export default HeartButton; 