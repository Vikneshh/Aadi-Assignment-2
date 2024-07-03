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
import image from "../images/img2.jpg";

const imageAltText = "Desktop with books and laptop just like a office setups";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "RepRanger",
    description:
      "Engineered an fitness app that dynamically showcases exercises sourced from the ExerciseDB API  with robust search functionality to pinpoint exercises by body parts.",
    url: "https://nvk-gym-app.netlify.app/",
  },
  {
    title: "Google Gemini.",
    description:
      "Developed a high-fidelity replica of the Gemini AI, harnessing the power of advanced APIs to deliver seamless functionality.",
    url: "https://nvk-gemini-clone.netlify.app/",
  },
  {
    title: "Crypto Price Tracker",
    description:
      "Discover the dynamic world of cryptocurrencies with real-time updates on market cap, price changes, and interactive charts and Navigate through cryptocurrencies with detailed descriptions and search functions.",
    url: "https://nvk-crypto.netlify.app/",
  },
  {
    title: "A Modern Responsive Bank App",
    description:
      "A Responsive bank App which shows features about a certain banks in a modern way",
    url: "https://nvk-bankapp.netlify.app/",
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
