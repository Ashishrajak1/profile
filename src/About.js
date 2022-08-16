import "./About.css";
import aboutphoto from "./Photos/C.jpg";
import { Bounce, Zoom } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="hedding-main">
        <Bounce top cascade>
          About Me
        </Bounce>
      </div>
      <div className="about-main container">
        <div className="row aboutRow">
          <div className="about-left col-6">
            <div className="about_card">
              <div className="blob"></div>
              <span className="img"></span>
              <h2 className="card__name_">
                Ashish <br />
                <span>Rajak</span>
              </h2>
              <p className="about_p">
                <Link className="card_icons" to="https://github.com/Ashishrajak1">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link className="card_icons" to="https://www.linkedin.com/in/ashish-kumar-rajak-099340220">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link className="card_icons" to="https://twitter.com/ashishk79236712">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </p>
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
