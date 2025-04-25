import React, { useState } from "react";
import "../../assets/css/aaa.css";
import image from "../../assets/images/image 11.png";
import Href from "../basics/href";

// Achievements and Awards sections
export default function Aaa() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Top Residential Sales Last 5 Years",
      icon: <i class="fa-solid fa-award"></i>,
      content: `We helped nearly 90 clients in 2021, and closed 28.5 million in sales! 
      Our team works hard everyday to grow and learn, so that we may continue to excel in our market. 
      Our clients deserve our best, & we want to make sure our best is better every year.`,
    },
    {
      title: "Don't Just List it...",
      icon: <i class="fa-solid fa-sack-dollar"></i>,
      content: `Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.`,
    },
    {
      title: "Guide to Buyers",
      icon: <i class="fa-solid fa-user-tie"></i>,
      content: `Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!`,
    },
  ];

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="aaa-section">
      <h2 className="title">GET IT SOLD</h2>
      <div className="aaa-content">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="aaa-text">
          <h4>ACHIEVEMENTS AND AWARDS</h4>
          <h2>TOP NOTCH FOR A REASON</h2>
        </div>
        <div className="carousel-container">
          <div className="carousel-slide">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                {slide.title && (
                  <div className="card-title">
                    <h4>{slide.title}</h4>
                    <span>{slide.icon}</span>
                  </div>
                )}
                {slide.content && (
                  <div className="card-content">
                    <p>{slide.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="carousel-controls">
              <Href label={"<"} onclick={handlePrev}/>
              <Href label={">"} onclick={handleNext}/>
          </div>
        </div>
      </div>
    </div>
  );
}
