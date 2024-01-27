/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/meport.jpg";

const imageAltText = "desktop with coffee";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Bridge Token",
    description:
      "This project aims to create a bridge token that enables seamless interoperability between the Bitcoin SV (BSV) blockchain and the Bitcoin blockchain. Utilizing React.js for the frontend, Solidity for smart contracts, Hardhat for editing, compiling, debugging, and deploying, and ethers.js for integrating the frontend and smart contract.",
    url: "",
  },
  {
    title: "United HealthCare Services",
    description:
      "Collaborated with talented developers to make a healthcare website using postman API platform.",
    url: "",
  },
  {
    title: "My portfolio Site",
    description:
      "Created from Microsoft's repo and deployed to Azure Static webpages. Includes my experience and design abilities.",
    url: "https://orange-flower-07a846900.4.azurestaticapps.net",
  },
  {
    title: "working at Code Social",
    description:
      "Working as an executive team member at Code Social, a student-led organization that aims to provide a platform for students to learn and grow in the field of technology.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
