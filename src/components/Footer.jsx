import React from 'react'
import footerBg from "../assest/images/footer-Bg.jpg";
import { FaCheck } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GiAnt } from "react-icons/gi";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div>
            <div
                className="footer text-white py-5 pt-0 mt-0"
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${footerBg}) center center / cover no-repeat`,
                }}
            >
                <div className="container py-5">
                    <div className="row g-4">
                        {/* About Pathak Pest Control */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="fw-bold mb-4">About Pathak Pest Control</h5>
                            <p>
                                Pathak Pest Control is Jabalpur's trusted name in pest
                                management, offering eco-friendly and effective solutions for
                                homes and businesses. Our expert team ensures a pest-free
                                environment with safety and commitment.
                            </p>
                        </div>

                        {/* Useful Links */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="fw-bold mb-4">Useful Links</h5>
                            <div className="d-flex flex-column">
                                <HashLink smooth to="/#" className="footer-link">
                                    <FaCheck className="footer-tick-icon" /> Home
                                </HashLink>
                                <HashLink smooth to="/#about" className="footer-link">
                                    <FaCheck className="footer-tick-icon" /> About Us
                                </HashLink>
                                <HashLink smooth to="/#services" className="footer-link">
                                    <FaCheck className="footer-tick-icon" /> Services
                                </HashLink>
                                <Link to="/contact" className="footer-link">
                                    <FaCheck className="footer-tick-icon" /> Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="fw-bold mb-4">Our Services</h5>
                            <div className="d-flex flex-column">
                                <HashLink smooth to="/#services" className="footer-link">
                                    <FaCheck className="footer-tick-icon" /> Termite Treatment
                                </HashLink>
                                <HashLink to="/#services" className="footer-link">
                                    <FaCheck className="footer-tick-icon" /> Cockroach Control
                                </HashLink>
                                <HashLink to="/#services" className="footer-link">
                                    <FaCheck className="footer-tick-icon" /> Mosquito Control
                                </HashLink>
                                <HashLink to="/#services" className="footer-link">
                                    <FaCheck className="footer-tick-icon" /> Rodent Removal
                                </HashLink>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="fw-bold mb-2 contact-heading">Contact Us</h5>
                            <p>
                                <Link
                                    to="https://maps.app.goo.gl/oqoBgZyuFZpq8m21A"
                                    className="footer-contact-link d-block"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    📍 22/20, Ratan Nagar, Gupteshwer Road, near Guptha Hotel,
                                    Jabalpur, Madhya Pradesh 482001
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="tel:+919753471195"
                                    className="footer-contact-link d-block"
                                >
                                    📞 +91 97534 71195
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="mailto:sukhleshpathakji@gmail.com"
                                    className="footer-contact-link d-block"
                                >
                                    📧 sukhleshpathakji@gmail.com
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom black bar */}
            <div className="footer-bottom bg-black text-white py-3">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                    {/* Logo with insect */}
                    <div className="d-flex align-items-center mb-3 mb-md-0">
                        <h3 className="fw-bold mb-0 me-2 text-green">PPC</h3>
                        <GiAnt size={35} color="var(--green-color)" />
                    </div>

        


                    {/* Credits */}
                    <p className="small mb-0 text-md-end text-center">
                        © 2025. Pathak Pest Control | Design & Developed by{" "}
                        <a
                            href="https://yashsoftsolution.com/"
                            className="footer-credit-link text-green"
                            target="_blank"
                            rel="noreferrer"
                        >
                            YashSoft Solution
                        </a>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer
