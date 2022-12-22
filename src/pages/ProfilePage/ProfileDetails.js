import "./ProfileDetails.css"
// import FollowBtn from "../FollowBtn/FollowBtn";
// import FollowersList from "../FollowersList/FollowersList";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
// import ActivitiesList from "../ActivitiesList/ActivitiesList";
import Loading from "../../components/Loading/Loading.jsx";
import ProductCard from "../Products/ProductCard";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import defaultImage from "./pngegg.png"

const ProfileDetails = (props) => {
  const { userInfo, user } = props;

  const { user: loggedUser } = useContext(AuthContext)
  // const [showList, setShowList] = useState(false)
  const { isLoading } = useContext(AuthContext);
  // const toggleShowList = () => {
  //   setShowList(!showList);
  // };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  // const [showListFollowing, setShowListFollowing] = useState(false)
  // const toggleShowListFollowing = () => {
  //   setShowListFollowing(!showListFollowing);
  // };

  // if (userInfo === null) {
  //   return (
  //     <span><Loading /></span>
  //   )
  // }

  return (
    <div className="profile-details">
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      {userInfo.img == null ? (
                        <img className="profile-image"
                          src={defaultImage}
                          alt="profile" />
                      ) :
                        <img className="profile-image"
                          src={userInfo.img}
                          alt="profile" />
                      }
                    </div>
                    <h5 className="user-name" style={{ fontWeight: "bold", color: "#d74f23" }}>{userInfo.name}</h5>
                    {/* <h6 className="user-email mb-4">{userInfo.email}</h6> */}
                    {loggedUser._id !== userInfo._id && (
                      <div>
                        <a href="/follow" ><button className="btn btn-dark">Follow</button></a>
                        <a href="/messages" ><button className="btn btn-outline-dark">Message</button></a>
                      </div>
                    )}

                  </div>
                  <div className="about">
                    <h5>About</h5>
                    <p>{userInfo.description}</p>
                  </div>
                  {loggedUser._id === userInfo._id &&
                    <Link className="btn btn-outline-dark" style={{ textDecoration: 'none' }}
                      to={`/profile/${user._id}/edit`}>Edit profile
                    </Link>}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 mt-4" style={{ fontWeight: "bold", color: "#d74f23", fontSize: 25 }}>User Product List</h6>
                  </div>
                  <div className="product-profile row">
                    {!isLoading ? products.reverse().map((product) => {
                      if (product.createdBy._id === userInfo._id) {
                        return <ProductCard key={product._id} product={product} />;
                      }
                      return null;
                    }) : <Loading />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {userInfo.followers.length > 0 && (
          <>
            <div onMouseEnter={toggleShowList} onMouseLeave={toggleShowList}>
              <p>Followed by: {userInfo.followers.length}</p>
            </div>
            {showList && <FollowersList followers={userInfo.followers} />}
          </>
        )}
        {userInfo.follows.length > 0 && (
          <>
            <Link to={`/profile/${userInfo._id}/following`}>
              <div className="follow-div"
                onMouseEnter={toggleShowListFollowing}
                onMouseLeave={toggleShowListFollowing}
              >

                {" "}
                Follows: {userInfo.follows.length}

              </div>
              {showListFollowing && (
                <FollowersList followers={userInfo.follows} />
              )}
            </Link>
          </>
        )}
        {userInfo._id !== user._id && (
          <FollowBtn
            userInfo={userInfo}
            user={user}
            setUserInfo={setUserInfo}
          />
        )} */}



        {/* <h4>Sports: </h4>
        <div className="sports-holder">
          {userInfo.sports.map((sport) => {
            return <SportCard key={sport._id} sport={sport} />;
          })}*/}
      </div>
    </div >

  )
}

export default ProfileDetails;