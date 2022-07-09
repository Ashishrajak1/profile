import React from "react";
import "./Footer.css";
import Github from "./Photos/github.png";
import Instagram from "./Photos/instagram.png";
import Gmail from "./Photos/gmail.png";
 
function Footer() {
  return (
    <>
      <div className="container-fluid text-center footer-main">
        <div className="row  text-center ">
          <div className="col-12 col-lg-12">
            <div className="f-contant ">
              <h1 className="navbar-brand">Ashish</h1>
              <ul>
                <p>
                  <a className="ankar-tag" href="/">
                    Home
                  </a>
                </p>
                <p>
                  <a className="ankar-tag" href="/about">
                    About
                  </a>
                </p>
                <p>
                  <a className="ankar-tag" href="/service">
                    Services
                  </a>
                </p>
                <p>
                  <a className="ankar-tag" href="/skills">
                    Skills
                  </a>
                </p>
                <p>
                  <a className="ankar-tag" href="/contact">
                    Contact
                  </a>
                </p>
              </ul>
            </div>

            <div className="f-icon">
              <p>Stay in touch</p>
              <a className="icon-tag" href="https://github.com/Ashishrajak1">
                <img className="icons" src={Github} alt="github-icon" />
              </a>
              <a
                className="icon-tag"
                href="https://www.instagram.com/_a_shish_0.1/"
              >
                <img className="icons" src={Instagram} alt="Instagram-icon" />
              </a>
              <a className="icon-tag" href="">
                <img className="icons" src={Gmail} alt="gmail-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
