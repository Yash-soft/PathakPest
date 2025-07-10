import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import logo from "../assest/logo/logoImage.jpg";

const Navbar = () => {
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarContent");
    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  };

  const scrollWithOffset = (el) => {
    const yOffset = -100; // adjust according to your navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="fixed-top bg-white shadow-sm">
      {/* Top Bar */}
      <div className={`dark-top-bar ${hideTopBar ? "d-none" : ""}`}>
        {/* Add top bar content here if needed */}
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <HashLink
            className="navbar-brand"
            smooth
            to="/#home"
            scroll={scrollWithOffset}
            onClick={closeNavbar}
          >
            <img
              src={logo}
              alt="Pathak Pest Control Logo"
              className="img-fluid logo-image"
            />
          </HashLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav align-items-lg-center gap-lg-4 gap-2">
              {[
                { name: "HOME", to: "/#home" },
                { name: "ABOUT US", to: "/#about" },
                { name: "SERVICES", to: "/#services" },
              ].map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <HashLink
                    smooth
                    to={item.to}
                    scroll={scrollWithOffset}
                    onClick={closeNavbar}
                    className="nav-link custom-nav-link btn btn-link p-0 text-decoration-none"
                  >
                    {item.name}
                  </HashLink>
                </li>
              ))}

              {/* CONTACT US */}
              <li className="nav-item">
  <Link
    to="/contact"
    onClick={closeNavbar}
    className="nav-link custom-nav-link btn btn-link p-0 text-decoration-none"
  >
    CONTACT US
  </Link>
</li>


              {/* OTHER Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link custom-nav-link btn btn-link p-0 text-decoration-none"
                  id="otherDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  OTHER
                </button>
                <ul className="dropdown-menu" aria-labelledby="otherDropdown">
                  {[
                    { name: "FAQ", to: "/#faq" },
                    { name: "TESTIMONIALS", to: "/#testimonials" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <HashLink
                        smooth
                        to={item.to}
                        scroll={scrollWithOffset}
                        onClick={closeNavbar}
                        className="dropdown-item p-2 text-decoration-none text-start"
                      >
                        {item.name}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
