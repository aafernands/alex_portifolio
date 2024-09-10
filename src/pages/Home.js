import React from "react";
import Header from "../components/Header.js";
import About from "./About.js";
import Projects from "./Portfolio.js";
import Contact from "./ContactForm.js";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
