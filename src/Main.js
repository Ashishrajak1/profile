import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer"

function Main() {
  return (
    <>
  <Navbar/>
  <Home />
  <About />
  <Skills />
  <Service />
  <Contact />
  <Footer/>
    </>
  )
}

export default Main
