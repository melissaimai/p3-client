import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from "./images/logo.png"
import "./Navigation.css"

const Navigation = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const UserMenu = (
    <Image
      src={'https://github.com/mshaaban0.png'}
      alt="UserName profile image"
      roundedCircle
      style={{ width: '40px' }}
    />)

  return (
    <div className='Navigation'>
      <Navbar expand="lg" className="color-nav">
        <Container>
          <Navbar.Brand style={{ fontWeight: 'bold', color: "#d74f23" }} href="/">
            <img className="pr-1" style={{ width: "40px" }} src={logo} alt="logo" />MyStore</Navbar.Brand>
          <Navbar.Brand className="btn btn-outline-light" style={{ fontWeight: 'bold', fontSize: '19px' }} href="/products">Browse</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {isLoggedIn && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                <Nav.Link href="/product/new">
                  <button className="sell-btn">Sell Now</button>
                </Nav.Link>
                <Nav.Link href="/messages">
                  <FontAwesomeIcon className='nav-icon' icon={faEnvelope} size="lg" />
                </Nav.Link>
                <Nav.Link href="/favorites">
                  <FontAwesomeIcon className='nav-icon' icon={faHeart} size="lg" />
                </Nav.Link>
              </Nav>
              <NavDropdown title={UserMenu}>
                <NavDropdown.Item href={`/profile/${user?._id}`}>My profile</NavDropdown.Item>
                <NavDropdown.Item href="/mylist">My items</NavDropdown.Item>
                <NavDropdown.Item href="/product/new">Sell Now</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOutUser} href="/"> <FontAwesomeIcon icon={faRightFromBracket} /> Logout</NavDropdown.Item>
              </NavDropdown>
              <span className='pr-2' style={{ fontWeight: 'bold' }}>{"What's Up"}</span>
              <span style={{ fontWeight: 'bold', color: "#d74f23" }}>{user && user.name}</span>
              <span style={{ fontWeight: 'bold' }}>{"?"}</span>
            </Navbar.Collapse>
          )}
          {!isLoggedIn && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar >
    </div >
  );
}
export default Navigation;