
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading.jsx";
import service from "../../services/service";

const ProfileEditForm = (props) => {
  const { userInfo } = props;
  const [user] = useState(userInfo);
  const [name, setName] = useState(user.name);
  const [image, setImage] = useState(user.image);
  const [description, setDescription] = useState(user.description);
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { name, image, description };
    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}api/profile/${userInfo._id}`,
        payload,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        navigate(`/profile/${userInfo._id}`);
      })
      .catch((err) => console.log(err));
  }

  // const uploadImage = (file) => {
  //   return axios
  //     .post(`${process.env.REACT_APP_SERVER_URL}/profile/upload`, file)
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err));
  // };

  function handleFileUpload(e) {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    service
      .uploadImage(uploadData)
      .then((response) => {
        setImage(response.fileUrl);
      })
      .catch((err) => console.log(err));
  }


  if (!user) {
    return <p><Loading /></p>;
  }

  return (

    <>EDIT</>

  )
}

export default ProfileEditForm;