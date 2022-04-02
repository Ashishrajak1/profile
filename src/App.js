import React from "react";
// import { Route,  Routes} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer"
 function  App() {
  return (
    <>
  <Navbar/>
  <Home />
  <About />
  <Skills />
  <Service />
  <Contact />
 {/* < Routes>
    <Route  exact path="/" element={<Home />} />
    <Route  exact path="/about" element={<About />} />
    <Route  exact path="/skills" element={<Skills />} />
    <Route  exact path="/service" element={<Service />} />
    <Route  exact path="/contact" element={<Contact />} />
    <Route element={Error}
   </ Routes> */}
   <Footer/>
    </>
  );
}

export default App;
 