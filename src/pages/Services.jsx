import React, { useState } from "react";

import "../App.css";

// 🖼️ Imported Images
import cockroach from "../assest/images/pest-1.jpg";
import mosquito from "../assest/images/pest-2.jpg";
import termite from "../assest/images/pest-3.jpg";
import rodent from "../assest/images/pest-4.jpg";
import ant from "../assest/images/pest-5.jpg";
import fly from "../assest/images/pest-6.jpg";
import lizard from "../assest/images/LIZARD.jpg";
import yellowjacket from "../assest/images/pest-8.jpg";

const services = [
  {
    name: "Cockroach Control",
    description: `Pathak Pest Control provides safe and effective cockroach control services in Jabalpur and across Madhya Pradesh. Cockroaches spread diseases and contaminate food, making timely treatment essential. Our trained pest experts use advanced, eco-friendly solutions to eliminate cockroaches from kitchens, offices, and commercial spaces. We locate breeding spots and prevent re-infestation, ensuring your home or workplace stays hygienic, safe, and pest-free. Choose Pathak Pest Control for reliable cockroach removal in MP.`,
    img: cockroach,
  },
  {
    name: "Mosquito Control",
    description: `Protect your family from mosquito-borne diseases like dengue, malaria, and chikungunya with our trusted mosquito control services in Jabalpur and MP. Pathak Pest Control uses targeted fogging, larvicidal treatments, and breeding site removal to keep mosquitoes away from your home and surroundings. Our eco-friendly mosquito management ensures maximum safety for children and pets. Stay protected with our professional mosquito pest control in Madhya Pradesh.`,
    img: mosquito,
  },
  {
    name: "Termite Control",
    description: `Termites silently damage furniture and building structures. Pathak Pest Control offers advanced termite control services in Jabalpur and throughout MP. Our team provides pre-construction and post-construction termite treatments using safe, odorless chemicals that protect your property for years. We inspect, detect, and treat termite colonies with modern equipment, ensuring complete termite protection for your home or office in Madhya Pradesh.`,
    img: termite,
  },
  {
    name: "Rodent Control",
    description: `Rodents like rats and mice spread infections and cause property damage. Pathak Pest Control delivers trusted rodent control services in Jabalpur and nearby areas in MP. We use modern traps, safe baits, and sealing techniques to stop rodent entry and nesting. Our experts identify vulnerable spots and customize rodent removal for homes, restaurants, and industries. Keep your premises rodent-free with our reliable rodent pest control in Madhya Pradesh.`,
    img: rodent,
  },
  {
    name: "Ant Control",
    description: `Ants can invade kitchens, food storage, and wiring. Pathak Pest Control offers effective ant control services in Jabalpur and all over Madhya Pradesh. We use eco-friendly sprays and gel baits to eliminate ant colonies at the source. Our ant extermination keeps your space clean, safe, and ant-free for longer. For hassle-free ant pest control in Jabalpur, trust our professional team.`,
    img: ant,
  },
  {
    name: "Fly Control",
    description: `Flies spread germs and cause health risks in homes, restaurants, and offices. Pathak Pest Control’s fly control services in Jabalpur and MP include UV light traps, targeted spraying, and practical prevention tips. We identify breeding grounds, remove flies safely, and help maintain a hygienic environment. Protect your family and customers with our fly pest control in Madhya Pradesh.`,
    img: fly,
  },
  {
    name: "Lizard Control",
    description: `Lizards can cause discomfort and unhygienic conditions, especially in kitchens, homes, and commercial spaces. Pathak Pest Control offers professional lizard control services in Jabalpur and all over Madhya Pradesh. Our trained team inspects hiding spots, uses safe repellents and eco-friendly methods to drive lizards away and prevent their return. Keep your home or workplace lizard-free and hygienic with our trusted lizard pest control solutions in MP.`,
    img: lizard,
  },
  {
    name: "Yellow Jacket Control",
    description: `Yellow jackets are aggressive stingers that threaten safety around your property. Pathak Pest Control offers safe yellow jacket removal in Jabalpur and Madhya Pradesh. We locate and treat nests using protective equipment and eco-friendly insecticides. Our experts ensure your surroundings stay safe for children, pets, and customers. Rely on us for yellow jacket pest control in MP.`,
    img: yellowjacket,
  },
];

const Services = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div
      // id="services"
      className="container py-5 mb-5"
      style={{
        backgroundColor: "rgba(232, 238, 218, 0.38)",
        marginTop: "110px",
      }}
    >
      <div className="row g-3">
        {/* Left: Categories */}
        <div className="col-md-4">
          <h4 className="fw-bold text-dark mb-3">OUR SERVICES</h4>
          <div className="underline-container mb-4">
            <div className="underline-green"></div>
            <div className="underline-animate"></div>
          </div>
          <ul className="list-group border-0 ps-4 pe-3">
            {services.map((service, index) => (
              <li
                key={index}
                onClick={() => setSelected(index)}
                className={`list-group-item border-0 py-2 category-item ${
                  selected === index ? "selected-category" : ""
                }`}
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  textAlign: "justify",
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                {service.name}
                <div className="category-underline"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image + Description */}
        <div className="col-md-8 text-center">
          <div className="category-img-wrapper mb-4">
            <div className="category-img position-relative overflow-hidden rounded shadow">
              <img
                src={services[selected].img}
                alt={services[selected].name}
                className="img-fluid"
                style={{
                  maxHeight: "300px",
                  width: "100%",
                  objectFit: "cover",
                  border: "3px solid var(--green-color)",
                  borderRadius: "0.5rem", // matching rounded
                }}
              />
              <div className="category-img-overlay"></div>
            </div>
          </div>

          <h4 className="fw-bold text-dark mb-2">{services[selected].name}</h4>
          <div className="underline-container mb-3 mx-auto">
            <div className="underline-green"></div>
            <div className="underline-animate"></div>
          </div>
          <p
            className="px-2"
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.8",
              textAlign: "justify",
            }}
          >
            {services[selected].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
