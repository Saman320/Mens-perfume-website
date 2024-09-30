"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import '../styles/about.css';

const About = () => {
  return (
    <div id="About">
      <section className="about-section">
        {/* Background Image with Opacity */}
        <div className="background-image"></div>

        <div className="container">
          {/* Profile Image */}
          <div className="profile-image">
            <Image
              src="/assets/picture/p4.png"
              alt="Profile of Perfume Palace"
              width={400}
              height={400}
              className="image"
            />
          </div>

          {/* Text Content */}
          <div className="text-content">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
            Welcome to Perfume Palace, where every fragrance tells a story. Our passion for fine scents drives us to bring
              you an exquisite selection of perfumes from around the world. At Perfume Palace, we believe that a fragrance is
              more than just a scent—its a reflection of your personality, mood, and style. Whether you are looking for
              something bold, elegant, or refreshing, we offer a curated collection that caters to every preference. Our
              commitment to quality ensures that every bottle is crafted with care, providing long-lasting, memorable
              fragrances that stay with you throughout the day. Explore our luxurious range and find your perfect signature
              scent today!
            </p>

            <div className="button-container">
              <Link href="/contact">
                <button className="contact-button">Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
