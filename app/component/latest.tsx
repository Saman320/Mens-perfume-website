"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import '../styles/latest.css';

const Mid = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/picture/p1.jpg",
    "/assets/picture/p2.jpeg",
    "/assets/picture/p3.jpeg",
    "/assets/picture/p5.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="latest">
      <section className="latest-section">
        <div className="background-overlay"></div>

        <div className="container">
          {/* Content Column */}
          <div className="text-container">
            {/* Heading */}
            <h2 className="section-heading">Latest Perfumes</h2>

            {/* Paragraph */}
            <p className="section-paragraph">
              Here are some of the most in-demand and latest perfumes just for you because 
              a person can remember you by your perfume. Absolute Attraction: Intimate yourself with Desire; The fragrance is in the air!
            </p>
          </div>

          {/* Image Column */}
          <div className="image-container">
            <Image
              src={images[currentImage]}  
              alt={`Perfume ${currentImage + 1}`}
              width={400}
              height={400}
              className="custom-image animate-fadeInUp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mid;
