
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading.jsx";
import service from "../../services/service";
import Form from 'react-bootstrap/Form';
import defaultImage from "./pngegg.png"

const ProfileEditForm = ({ userInfo }) => {

  // const [user] = useState(userInfo);
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [img, setImg] = useState(userInfo.img);
  const [description, setDescription] = useState(userInfo.description);
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("img", e.target.files[0]);
    service
      .uploadImage(uploadData)
      .then((response) => {
        setImg(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { name, img, email, description };
    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/api/profile/${userInfo._id}`,
        payload,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        navigate(`/profile/${userInfo._id}`);
      })
      .catch((err) => console.log(err));
  }


  if (!userInfo) {
    return <p><Loading /></p>;
  }

  return (

    <div className="profile-details">
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <form onSubmit={handleSubmit} >
                    <div className="user-profile">
                      <div className="user-avatar">
                        {img == null ? (
                          <img className="profile-image"
                            src={defaultImage}
                            alt="profile" />
                        ) :
                          <img className="profile-image"
                            src={img}
                            alt="profile" />
                        }
                      </div>
                      <Form.Label htmlFor="img" className="register-label mt-3">Change the picure</Form.Label>
                      <Form.Control type="file"
                        name="img"
                        id="img"
                        onChange={(e) => handleFileUpload(e)} />

                      <div className="register-form-wrapper  pt-2">
                        <label htmlFor='name' className="register-label">Name</label>
                        <input type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" />
                      </div>

                      <div className="register-form-wrapper  pt-2">
                        <label htmlFor='email' className="register-label">E-mail</label>
                        <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" />
                      </div>

                      <div className="register-form-wrapper  pt-2">
                        <label htmlFor='description' className="register-label">About</label>
                        <textarea type="textarea" name='description' value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" />
                      </div>


                    </div>

                    <div className='colunm'>
                      <div className='d-flex justify-content-center'>
                        <button className="btn btn-dark" type="submit">Save changes</button>
                      </div>
                    </div>
                  </form>
                  <div className="user-profile mt-3">
                    <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default ProfileEditForm;