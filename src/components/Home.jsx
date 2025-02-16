import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Project from "./Project";
import Hero from "./Hero";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="services">
        {" "}
        <Services />{" "}
      </div>
      <div id="skills">
        {" "}
        <Skills />{" "}
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Project />
      <Footer />
    </div>
  );
}
