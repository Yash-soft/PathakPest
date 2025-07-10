import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FloatingContactButtons from "./components/FloatingContactButtons";
import Footer from "./components/Footer";
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    <Router>
      <ScrollToTop />
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onContactClick={() => scrollToSection(contactRef)}
        onFaqClick={() => scrollToSection(faqRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
      />

      {/* Single scrollable page only renders Home component */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeRef={homeRef}
              aboutRef={aboutRef}
              servicesRef={servicesRef}
              contactRef={contactRef}
              faqRef={faqRef}
              testimonialsRef={testimonialsRef}
            />
          }
        />
        {/* Optional separate page */}
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingContactButtons />
      < BackToTop />
      <Footer />

    </Router>
  );
}

export default App;
