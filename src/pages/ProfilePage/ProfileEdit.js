
import { AuthContext } from "../../context/auth.context";
import Loading from "../../components/Loading/Loading.jsx";
import ProfileEditForm from "../ProfilePage/ProfileEditForm";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const ProfileEdit = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  // const { user } = useContext(AuthContext)
  const { userId } = useParams();
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/profile/${userId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUserInfo(response.data.user);
      });
  }, []);

  if (!userInfo) {
    return (
      <span><Loading /></span>
    )
  }

  return (
    <ProfileEditForm userInfo={userInfo} />
  )
}

export default ProfileEdit;