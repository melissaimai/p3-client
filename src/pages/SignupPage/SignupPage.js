import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import water from "../../assets/registration.jpg"

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-inner">
        <div className="image-holder">
          <img src={water} alt="signup" />
        </div>
        <div className="signup-form">
          <form onSubmit={handleSignupSubmit}>
            <h3 className="signup-a-h3">Sign Up</h3>
            <div className="form-holder active">
              <input type="text" name="name" placeholder="name" className="signup-form-control" value={name} onChange={handleName} />
            </div>
            <div className="form-holder">
              <input type="e-mail" name="e-mail " placeholder="e-mail" value={email} onChange={handleEmail} className="signup-form-control" />
            </div>
            <div className="form-holder">
              <input type="password" name="password" placeholder="Password" className="signup-form-control" style={{ fontSize: "15px" }} value={password} onChange={handlePassword} />
            </div>
            <div className="form-login">
              <button type="submit" className="signup-btn">Sign up</button>
              <p className="signup-p">Already Have an account? <Link className="signup-a" to={"/login"}> Login</Link></p>
            </div>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>

  );
}

export default SignupPage;
