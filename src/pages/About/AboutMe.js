import "./AboutMe.css"
import Melissa from "./images/melissa.JPG"

const AboutMe = () => {
  return (
    <section id="about-section" className="pt-5 pb-5">
      <div className="container wrapabout">
        <div className="red"></div>
        <div className="row">
          <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
            <div className="blockabout">
              <div className="blockabout-inner text-center text-sm-start">
                <div className="title-big pb-3 mb-3">
                  <h3>ABOUT ME</h3>
                </div>
                <p className="description-p text-muted pe-0 pe-lg-0">
                  Hello, my name is Melissa! I come from Brazil and I am a Web Developer student. This is my final project from Ironhack.
                </p>
                <p className="description-p text-muted pe-0 pe-lg-0">I live in Berlin, fell free to contact me in my social medias below.</p>
                <div className="sosmed-horizontal pt-3 pb-3">
                  <a href="https://www.linkedin.com/in/melissaimai/" target="_blank" rel="noopener noreferrer" ><i className="icon ion-social-linkedin"></i></a>
                  <a href="https://github.com/melissaimai"><i className="icon ion-social-github" target="_blank" rel="noopener noreferrer" ></i></a>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <figure className="potoaboutwrap">
              <img className="imagepotoaboutwrap" src={Melissa} alt="potoabout" />
            </figure>
          </div>
        </div>
      </div>
    </section>



  )


}

export default AboutMe;