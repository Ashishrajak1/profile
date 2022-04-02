import css from "./About.css";
import aboutphoto from "./Photos/C.jpg";
const About = () => {
  return (
    <div className="about-main">
      <div className="about-left">
        <div className="about-card-bg">
          
        </div>
        <div className="about-card">
        <img src={aboutphoto} alt="profile photo" className="about-photo" />
        </div>
      </div>

      <div className="about-right">
        <h1 className="hedding-main">About Me</h1>

        <p className="about-hedding">Creative Independent Web Developer based in INDIA</p>

        <p className="hedding-sub">
          <span className="hedding-details"> I'm web designer, <br></br></span>
          and I'm very passionate and dedicated to my work. With 3 years
          experience as a professional web developer, I have acquired the skills
          and knowledge necessary to make your project a success. I enjoy every
          step of the design process, from discussion and collaboration.
        </p>
      </div>
    </div>
  );
};

export default About;
