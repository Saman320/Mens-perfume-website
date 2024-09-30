"use client";
import React from "react";
import Link from "next/link";
import Carousel from '../carousel/page';
import '../styles/hero.css'; // Import your custom CSS

const Hero = () => {
    return (
        <div>
            <Carousel />
            <section className="hero-section">

                <div className="background-image"></div>

                <div className="container">
                    {/* Text content */}
                    <div className="text-content">
                        <h1 className="hero-title">
                            Experience the magic of fragrance
                        </h1>
                        <h3 className="hero-subtitle">
                            A person can remember you by your perfume. Absolute Attraction; Intimate yourself with Desire; The fragrance is in the air!
                        </h3>

                        <div className="button-container">
                            <Link href="/latest">
                                <button className="hero-button">
                                    Latest Perfume
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
