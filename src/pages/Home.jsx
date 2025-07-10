import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import { ReactTyped } from "react-typed";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";




import service1 from "../assest/images/service1.jpg";
import service2 from "../assest/images/service2.jpg";
import service3 from "../assest/images/service3.jpg";
import service4 from "../assest/images/service4.jpg";
import pest1 from "../assest/images/pest-1.jpg";
import pest2 from "../assest/images/pest-2.jpg";
import pest3 from "../assest/images/pest-3.jpg";
import pest4 from "../assest/images/pest-4.jpg";
import pest5 from "../assest/images/pest-5.jpg";
import pest6 from "../assest/images/pest-6.jpg";
import lizard from "../assest/images/LIZARD.jpg";
import pest8 from "../assest/images/pest-8.jpg";
import whoImg from "../assest/images/whoImg.jpg";
import personImg from "../assest/images/personImg.png";

const Home = ({
  servicesRef,

  faqRef,
  testimonialsRef,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ✅ Hero section Contact Us scroll function
  // const handleContactClick = () => {
  //   if (contactRef && contactRef.current) {
  //     const yOffset = -80; // adjust according to your navbar
  //     const y =
  //       contactRef.current.getBoundingClientRect().top +
  //       window.pageYOffset +
  //       yOffset;
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  // };
  const services = [
    {
      img: service1,
      title: "Termite Control",
      desc: "Protect your home or office from termites with our expert anti-termite treatment. Long-lasting and eco-safe solution for wood and walls.",
    },
    {
      img: service2,
      title: "Cockroach Control",
      desc: "Get rid of cockroaches permanently. We use odorless and safe spray treatment ideal for kitchens, bathrooms, and food areas.",
    },
    {
      img: service3,
      title: "Rodent Control",
      desc: "Remove rats and mice from your home, shop, or warehouse using advanced glue traps and bait stations. Safe for children and pets.",
    },
    {
      img: service4,
      title: "Mosquito Control",
      desc: "Protect your family from dengue, malaria, and chikungunya. Our mosquito spray and fogging service gives lasting relief.",
    },
    // ...add more
  ];

  // testimoinals section //

  const testimonials = [
    {
      name: "Subhash Nigam",

      review:
        "I searched for cockroach control near me and found Pathak Pest Control. They solved the issue in just one visit! Very clean, fast, and professional service. Highly recommended if you're dealing with cockroaches in Jabalpur.",
    },
    {
      name: "Simran Vishwakarma",

      review:
        "Pathak Pest Control provided effective termite treatment for my home in Jabalpur. After their expert service, my house is completely termite-free. If you're looking for reliable anti-termite services, this is the team to call!",
    },
    {
      name: "Sourabh Rajput",

      review:
        "I called Pathak Pest Control for termite treatment. After the service, my home is safe and completely termite-free. Thank you!",
    },
    {
      name: "Buddhasen Gupta",

      review:
        "Good work, great quality. Completed within time and with full commitment. Nice nature and professionalism. Thanks!",
    },
    {
      name: "Sandhya Patel",

      review:
        "We were struggling with mosquitoes at night. Pathak Pest Control’s mosquito removal service worked wonders. Now we can sleep peacefully. Best mosquito control in Jabalpur.",
    },
    {
      name: "Jagmohan Shastri",

      review:
        "They offer affordable pest control in Jabalpur without compromising on quality. Safe for kids and pets too. I recommend Pathak Pest Control to everyone.",
    },
    {
      name: "Abhishek Thakur",

      review:
        "I called Pathak Pest Control for termite treatment. After their visit, my house is totally termite-free. Thanks for the great service!",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 576 }, items: 2 },
    mobile: { breakpoint: { max: 576, min: 0 }, items: 1 },
  };

  const faqs = [
    {
      question: "What types of pests do you handle?",
      answer:
        "We handle termites, cockroaches, rodents, ants, mosquitoes, bed bugs, and more for homes and businesses.",
    },
    {
      question: "Are your pest control treatments safe?",
      answer:
        "Yes, we use eco-friendly, government-approved chemicals that are safe for children and pets when used as directed.",
    },
    {
      question: "How often should I schedule pest control?",
      answer:
        "For best protection, we recommend quarterly treatments, but one-time and monthly plans are also available.",
    },
    {
      question: "Do you offer any warranty on your services?",
      answer:
        "Yes, we provide warranties depending on the service, with free revisits if pests return within the warranty period.",
    },
  ];

  return (
    <>
      {/* ✅ Hero Section */}
  <div
  id="home"
  className="banner-section position-relative text-white d-flex align-items-center"
>
  {/* Background with gradient overlay */}
  <div
    className="banner-bg position-absolute top-0 start-0 w-100 h-100"
    style={{
      zIndex: -1,
    }}
  ></div>

  {/* Content */}
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-6 text-center text-lg-start">
        <h1 className="fw-bold mb-3 display-5">
          <ReactTyped
            strings={["Say Goodbye to Pests with Pathak Pest Control"]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </h1>
        <p className="lead mb-4">
          Termite Control | Cockroach Control | Rodent Control | Mosquito
          Control | Bed Bug Treatment | Ant Control | Spider Removal | Fly
          Control | Lizard Removal | General Pest Management
        </p>
        <HashLink
          smooth
          to="/contact"
          className="btn text-dark contact-theme-btn"
        >
          Contact Us
        </HashLink>
      </div>
    </div>
  </div>
</div>


      {/* Services Section */}
      <section className="services-section py-5  bg-light">
        <div className="container py-5">
          {/* SEO-Friendly Heading */}

          <div className="row g-4 ">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="service-card d-flex flex-column h-100 shadow-sm rounded">
                  <div className="image-container">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="img-fluid service-img rounded-top"
                    />
                    <div className="overlay"></div>
                  </div>
                  <div className="p-3 flex-grow-1 d-flex flex-column">
                    {/* Service Title */}
                    <h5 className="service-title fw-semibold mb-2">
                      {service.title}
                    </h5>

                    {/* Description */}
                    <p className="mb-0 text-justify-custom">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pest control section */}

      <div
        id="services"
        ref={servicesRef}
        className="py-5 pest-section"
        style={{ backgroundColor: "#e9f3e0", padding: "5% 8%" }}
      >
        <div className="container-fluid p-lg-5">
          <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-2">
            {/* SEO-Friendly Heading */}
            <div>
              <h2 className="section-title fw-bold">
                Professional Pest Control Solutions in Jabalpur
              </h2>
              <div className="underline-container">
                <div className="underline-animate"></div>
                <div className="underline-green"></div>
              </div>
            </div>

            {/* VIEW ALL BUTTON */}
            <Link to="/service" className="text-decoration-none">
              <button className="btn view-all-btn text-dark">
                VIEW ALL PEST CONTROL
              </button>
            </Link>
          </div>

          {/* Pest Cards */}
          <div className="row g-4">
            {[
              { img: pest1, name: "COCKROACH" },
              { img: pest2, name: "MOSQUITO" },
              { img: pest3, name: "TERMITE" },
              { img: pest4, name: "RODENT" },
              { img: pest5, name: "FLY" },
              { img: pest6, name: "ANT" },
              { img: lizard, name: "LIZARD " },
              { img: pest8, name: "YELLOWJACKET" },
            ].map((pest, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-3 d-flex align-items-stretch"
              >
                <Link
                  to="/service"
                  state={{ categoryIndex: index }}
                  className="w-100 text-decoration-none text-dark"
                >
                  <div className="pest-card position-relative overflow-hidden w-100 shadow-sm rounded">
                    <div className="pest-img-box position-relative overflow-hidden">
                      <img
                        src={pest.img}
                        alt={`${pest.name} Control in Jabalpur`}
                        className="img-fluid w-100 pest-img"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="hover-overlay"></div>
                    </div>
                    <div
                      className="text-center pest-title py-2"
                      style={{
                        backgroundColor: "#fff",
                        borderLeft: "3px solid rgba(149, 169, 58, 1)",
                        borderRight: "3px solid rgba(149, 169, 58, 1)",
                        fontWeight: "600",
                      }}
                    >
                      {pest.name}
                    </div>
                    <div className="hover-underline"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 1000 section */}
      <div className="py-4 stats-section text-white">
        <div className="container">
          <div className="row text-center">
            {[
              {
                count: "1000+",
                text: "Homes & Offices Protected",
                icon: "bi-shield-check",
              },
              {
                count: "500+",
                text: "Pest Control Jobs Completed",
                icon: "bi-bug-fill",
              },
              {
                count: "320+",
                text: "Satisfied Clients Across Jabalpur",
                icon: "bi-emoji-smile-fill",
              },
              {
                count: "24/7",
                text: "Dedicated Customer Support",
                icon: "bi-headset",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-6 col-md-3 mb-4 mb-md-0"
                data-aos="zoom-out"
                data-aos-delay={index * 150}
              >
                <div className="stat-item position-relative p-2 h-100">
                  <div className="stat-icon mb-2">
                    <i className={`bi ${item.icon} text-white fs-2`}></i>
                  </div>
                  <h3 className="stat-count fw-bold">{item.count}</h3>
                  <p className="mb-0 stat-text fw-bold">{item.text}</p>
                  {index < 3 && <div className="stat-divider"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* about - WHY PATHAK PEST CONTROL? */}

      <div
        id="about"
        className="container-fluid py-5 whywho-section"
        data-aos="fade-up"
      >
        <div className="container py-5">
          <div className="row align-items-center">
            {/* ABOUT SECTION */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold">WHY PATHAK PEST CONTROL?</h2>
              <div className="underline-container mb-5">
                <div className="underline-animation"></div>
                <div className="underline-static"></div>
              </div>

              <div className="row">
                {[
                  {
                    icon: "bi-house-door-fill",
                    title: "RESIDENTIAL PEST CONTROL",
                    desc: "Protect your home and loved ones with safe, effective pest control for cockroaches, termites, ants, mosquitoes, and more. We eliminate pests at the root for long-lasting relief.",
                  },
                  {
                    icon: "bi-buildings-fill",
                    title: "COMMERCIAL PEST MANAGEMENT",
                    desc: "Keep your business premises pest-free and compliant with our professional pest control services. Perfect for offices, restaurants, shops, warehouses, and hospitals.",
                  },
                  {
                    icon: "bi-gear-fill",
                    title: "INDUSTRIAL & ALL-IN-ONE SOLUTIONS",
                    desc: "From factories to farmhouses, we offer tailored pest control solutions for large properties. Our treatments ensure safety, hygiene, and minimal disruption to operations.",
                  },
                  {
                    icon: "bi-currency-rupee",
                    title: "COST-EFFECTIVE & ECO-FRIENDLY",
                    desc: "Enjoy high-quality service at affordable rates. Our herbal, eco-safe products ensure effective pest control without compromising your family’s or employees’ health.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="col-12 col-sm-6 mb-5">
                    <div className="d-flex align-items-start">
                      <i className={`bi ${item.icon} fs-3 me-4 icon-style`}></i>
                      <div>
                        <h6 className="fw-bold mb-2">{item.title}</h6>
                        <p className="small text-muted mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ABOUT IMAGE & PARAGRAPH */}
            <div className="col-md-6">
              <div className="who-img-container">
                <img
                  src={whoImg}
                  alt="About Pathak Pest Control in Jabalpur"
                  className="img-fluid"
                />
                <div className="who-img-overlay"></div>
              </div>
              <p className="small text-muted mt-3 text-justify">
                Pathak Pest Control is a leading pest control company in
                Jabalpur, Madhya Pradesh, offering complete solutions for
                residential, commercial, and industrial pest problems. Our
                certified professionals use eco-friendly, safe, and effective
                methods to eliminate termites, rodents, cockroaches, mosquitoes,
                and other pests. Whether you own a home, run a business, or
                manage a large facility — we provide guaranteed pest protection
                you can rely on.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials section */}
      <div
        id="testimonials"
        ref={testimonialsRef}
        className="testimonials-section py-5 position-relative"
      >
        <div className="text-center mb-5  ">
          <span className="testimonials-subtitle">TESTIMONIALS</span>
          <h2 className="center-headings">What Clients Say About Our Services</h2>
          <div className="section-underline">
            <div className="underline-animation"></div>
            <div className="underline-static"></div>
          </div>
        </div>

        <div className="container">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            arrows={false}
            showDots={true}
            containerClass="testimonial-carousel-container"
            itemClass="testimonial-carousel-item"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card p-3 d-flex flex-column align-items-center justify-content-between text-center"
              >
                <div className="testimonial-avatar mb-3 rounded-circle d-flex align-items-center justify-content-center">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="testimonial-review mb-2">
                  "{testimonial.review}"
                </p>
                <div>
                  <h6 className="testimonial-name fw-bold mb-1">
                    {testimonial.name}
                  </h6>
                  <small className="testimonial-profession text-muted">
                    {testimonial.profession}
                  </small>
                  <div className="text-warning mt-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="container py-5">
        <div className="text-center mb-3">
          <h2 className="center-headings">Contact for Any Query</h2>
          <div className="section-underline">
            <div className="underline-animation"></div>
            <div className="underline-static"></div>
          </div>
        </div>

        <div className="row g-4 justify-content-center mt-4">
          {/* Social Media */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="contact-box p-3 h-100 d-flex align-items-center">
              <div className="icon-circle flex-shrink-0 me-3">
                <i className="bi bi-share-fill fs-4 text-white"></i>
              </div>
              <div>
                <h5 className="contact-box-title mb-1">Follow Us</h5>
                <div className="social-icons mt-1">
                  <a
                    href="https://www.facebook.com/pathakpestcontrol"
                    className="text-decoration-none text-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook me-2"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/pathakpestcontrol"
                    className="text-decoration-none text-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram me-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="contact-box p-3 h-100 d-flex align-items-center">
              <div className="icon-circle flex-shrink-0 me-3">
                <i className="bi bi-geo-alt-fill fs-4 text-white"></i>
              </div>
              <div>
                <h5 className="contact-box-title mb-1">Address</h5>
                <p className="contact-box-text mb-0">
                  <a
                    href="https://maps.app.goo.gl/oqoBgZyuFZpq8m21A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark text-decoration-none"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="contact-box p-3 h-100 d-flex align-items-center">
              <div className="icon-circle flex-shrink-0 me-3">
                <i className="bi bi-telephone-fill fs-4 text-white"></i>
              </div>
              <div>
                <h5 className="contact-box-title mb-1">Call Us</h5>
                <p className="contact-box-text mb-0">
                  <a
                    href="tel:+919753471195"
                    className="text-dark text-decoration-none"
                  >
                    +91 97534 71195
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="contact-box p-3 h-100 d-flex align-items-center">
              <div className="icon-circle flex-shrink-0 me-3">
                <i className="bi bi-envelope-fill fs-4 text-white"></i>
              </div>
              <div>
                <h5 className="contact-box-title mb-1">Email Us</h5>
                <p className="contact-box-text mb-0">
                  <a
                    href="mailto:sukhleshpathakji@gmail.com"
                    className="text-dark text-decoration-none"
                  >
                    sukhleshpathakji@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}

      <div id="faq" ref={faqRef} className="faq-section container my-lg-5 py-5">
        <h2 className="text-center fw-bold mb-4 text-green">
          Frequently Asked Questions
        </h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item mb-3 p-3 rounded ${
                openIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question fw-bold d-flex justify-content-between align-items-center">
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer mt-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* person section */}
    <div className="pt-5">
  <div
    className="cta-section position-relative"
    data-aos="zoom-out"
  >
    <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start gap-2 py-3 px-3">
      <div className="cta-image-wrapper d-none d-md-block">
        <img
          src={personImg}
          alt="Pest Control Expert"
          className="cta-image"
        />
      </div>

      <div className="cta-text text-white mx-auto">
        <h5 className="cta-subtitle mb-1 fst-italic fs-6">
          Have Any Question!
        </h5>
        <h2 className="cta-title fw-bold mb-0 fs-5">
          DON'T HESITATE TO CONTACT US ANY TIME.
        </h2>
      </div>

      <Link
        to="/contact"
        className="btn btn-outline-light btn-lg fw-bold px-4 py-2 mt-2 mt-md-0"
      >
        CONTACT US
      </Link>
    </div>
  </div>
</div>

   
    
    </>
  );
};

export default Home;
