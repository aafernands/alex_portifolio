import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
import ContactForm from "./pages/ContactForm";
import Portfolio from "./pages/Portfolio";

function AppRoutes() {
  return (
    <Router>
      <MainLayout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactform" element={<ContactForm />} />
          {/* Add a 404 route if needed */}
          {/* <Route path="*" element={<NotFound />} /> */}{" "}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRoutes;
