import "./About.css";
import aboutphoto from "./Photos/C.jpg";
import { Bounce, Zoom } from "react-reveal";
const About = () => {
  return (
    <>
      <div className="hedding-main">
        <Bounce top cascade>
          About Me
        </Bounce>
      </div>
      <div className="about-main container">
        <div className="row">
          <div className="about-left col-6">
            <div className="about_card">
              <div className="blob"></div>
              <span className="img"></span>
              <h2 className="card__name_">
                Ashish <br/>
                <span>Rajak</span>
              </h2>
              <p>{/* icons github linkden  twiter*/}</p>
            </div>
          </div>
          <Bounce>
            <div className="about-right col-6">
              <div>
                <p className="about-hedding">
                  Creative Independent Web Developer based in INDIA
                </p>

                <p className="hedding-sub">
                  <span className="hedding-details">I'm web designer, </span>
                  and I'm very passionate and dedicated to my work. With 3 years
                  experience as a professional web developer, I have acquired
                  the skills and knowledge necessary to make your project a
                  success. I enjoy every step of the design process, from
                  discussion and collaboration.
                </p>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </>
  );
};

export default About;
