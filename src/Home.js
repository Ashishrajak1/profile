import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./Home.css";
import "animate.css";
import About from "./About";
import Skills from "./Skills";
import Service from "./Service";
import Contact from "./Contact";

const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 1500,
      strings: ["Developer", "Designer", "Content creator"],
    });
  }, []);

  return (
    <div>
      <div className="profile_container container">
        <div className="row home_row ">
          <div className="profile-parent col-8">
            <div className="profile-details-name animate__animated animate__bounceInDown">
              <span className="primary-text">
                Hello I'm Ashish
                <h3 className="heading_a">
                  Freelance_
                  <span className="Text-typed" ref={textRef}></span>
                </h3>
              </span>
            </div>
            <div className="profile-details-role animate__animated animate__lightSpeedInLeft animate__delay-1s">
              <span className="pramary-text1 ">
                I am building apllications with frontend and backend operations
              </span>
            </div>
          </div>
          <div className="profile-bga col-4">
            <div className="profile-picture">
              <div className="profile-picture-background animate__animated animate__zoomIn animate__delay-2s"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
