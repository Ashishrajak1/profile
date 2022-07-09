import "./About.css";
import aboutphoto from "./Photos/C.jpg";
import { Bounce, Zoom } from "react-reveal";
const About = () => {
  return (
    <div className="about-main">
      <div className="about-left">
        <div className="about-card-bg"></div>
        <Zoom bottom>
          <div className="about-card">
            <img src={aboutphoto} alt="profile photo" className="about-photo" />
          </div>
        </Zoom>
      </div>
      <Bounce>
      <div className="about-right">
        
      <h1 className="hedding-main"><Bounce top cascade>About Me</Bounce></h1>
        
        <p className="about-hedding">
         
           Creative Independent Web Developer based in INDIA
         
        </p>
      
        <p className="hedding-sub">
          <span className="hedding-details">
            I'm web designer, <br />
          </span>
          and I'm very passionate and dedicated to my work. With 3 years
          experience as a professional web developer, I have acquired the skills
          and knowledge necessary to make your project a success. I enjoy every
          step of the design process, from discussion and collaboration.
        </p>
      </div>
      </Bounce>
    </div>
  );
};

export default About;
