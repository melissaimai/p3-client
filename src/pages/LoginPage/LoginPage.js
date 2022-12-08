import "./LoginPage.css";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import login from "./login.png"
import { func } from '../../helpers/main'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  useEffect(() => {
    func()
  }, [])

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login-inner">
        <div className="image-holder">
          <img src={login} alt="login" />
        </div>
        <div className="login-form">
          <form onSubmit={handleLoginSubmit}>
            <h3 className="login-a-h3">Login</h3>
            <div className="form-holder active">
              <input type="email" name="email" placeholder="e-mail" className="login-form-control" value={email} onChange={handleEmail} />
            </div>

            <div className="form-holder">
              <input type="password" name="password" placeholder="Password" className="login-form-control" style={{ fontSize: "15px" }} value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="form-login">
              <button type="submit" className="login-btn">Login</button>
              <p className="login-p">Don't have an account yet?<Link className="login-a" to={"/signup"}> Sign Up</Link></p>
            </div>


          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>



  );
}

export default LoginPage;
