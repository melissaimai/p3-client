import './Footer.css'

const Footer = () => {

  return (
    <div className="footer-dark" style={{
      textAlign: "center"
    }}>

      < footer >
        <div className="container">
          <div className="row">
            {/* <div className="col-sm-6 col-md-3 item">
              <h3 style={{ fontSize: "22px" }}>Services</h3>
              <ul>
                <li><a style={{ fontSize: "15px" }} href="/">Web design</a></li>
                <li><a style={{ fontSize: "15px" }} href="/">Development</a></li>
              </ul>
            </div> */}
            <div className="col-sm-6 col-md-3 item" >
              <h3 style={{ fontSize: "22px" }}>About</h3>
              <ul>
                <li><a style={{ fontSize: "15px" }} href="/aboutme">About me</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3 style={{ fontSize: "22px" }}>Melissa Commerce</h3>
              <p style={{ fontSize: "15px" }}>All Rights Reserved.</p>
            </div>

            <div className="col item social">
              <a href="https://www.linkedin.com/in/melissaimai/" target="_blank" rel="noopener noreferrer" ><i className="icon ion-social-linkedin"></i></a>
              <a href="https://github.com/melissaimai"><i className="icon ion-social-github" target="_blank" rel="noopener noreferrer" ></i></a>
              <p style={{ fontSize: "15px" }} className="copyright">Melissa Imai © 2022</p>
            </div>
          </div>


        </div>
      </footer >

    </div >
  )

}

export default Footer;