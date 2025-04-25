import React, { useState } from "react";
import "../../assets/css/gallery.css";
import image from "../../assets/images/image 7.png";
import image1 from "../../assets/images/image 19.png";
import image2 from "../../assets/images/image 20.png";
import image3 from "../../assets/images/image 22.png";
import image4 from "../../assets/images/image 23.png";
import image5 from "../../assets/images/image 25.png";
import image6 from "../../assets/images/image 26.png";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [image, image1, image2, image3, image4, image5, image6];

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="gallery">
      <div className="title-header container-fluid d-flex flex-column align-items-center justify-content-center text-center">
        <h4>FEATURED PROJECT</h4>
        <h2>WHERE HAPPINESS LIVES</h2>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide w-50 mx-auto" data-bs-interval="false">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active" : ""}
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              onTransitionEnd={() => handleSlideChange(index)}
            >
              <img src={img} className="showcase" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() => handleSlideChange((activeIndex - 1 + images.length) % images.length)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => handleSlideChange((activeIndex + 1) % images.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Images Below Carousel */}
      <div className="image-grid mt-5">
        <div className="row justify-content-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={`hlight ${index === activeIndex ? "highlight" : ""}`}
              onClick={() => handleSlideChange(index)}
              style={{ cursor: "pointer" }}
            >
              <img src={img} className="img-fluid" alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}