import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ContactForm from "./pages/ContactForm";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div>
        <AppBar
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          servicesRef={servicesRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/contactForm" element={<ContactForm />} />
          {/* Add a 404 route if needed */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
