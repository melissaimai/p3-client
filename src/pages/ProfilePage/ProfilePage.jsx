import "./ProfilePage.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import ProfileDetails from '../ProfilePage/ProfileDetails'
import axios from "axios";
import Loading from "../../components/Loading/Loading.jsx"


function ProfilePage() {
  const { user } = useContext(AuthContext);
  const { userId } = useParams();
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // get the token from localStorage
    const storedToken = localStorage.getItem("authToken");
    // and send it as part of the request to see the profile page
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/profile/${userId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const user = response.data.user
        setUserInfo(user);
      })
      .catch((err) => {
        console.log(err)
        navigate('/login')
      });
    // eslint-disable-next-line
  }, [userId]);

  if (userInfo === null) {
    return <span><Loading /></span>;
  }

  return (
    <div>
      <ProfileDetails userInfo={userInfo} user={user} setUserInfo={setUserInfo} />
    </div>

  );
}

export default ProfilePage;
