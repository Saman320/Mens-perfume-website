import React from "react";
import Image from "next/image";
import '../styles/carousel.css';




const images = [
    { src: "/assets/picture/p1.jpg", alt: "Perfume 1" },
    { src: "/assets/picture/p2.jpeg", alt: "Perfume 2" },
    { src: "/assets/picture/p3.jpeg", alt: "Perfume 3" },
    { src: "/assets/picture/p4.png", alt: "Perfume 4" },
    { src: "/assets/picture/p5.jpeg", alt: "Perfume 5" },
    { src: "/assets/picture/p6.jpg", alt: "Perfume 6" },
    { src: "/assets/picture/p7.jpeg", alt: "Perfume 7" },
    { src: "/assets/picture/p8.jpeg", alt: "Perfume 8" },
    { src: "/assets/picture/p9.webp", alt: "Perfume 9" },
    { src: "/assets/picture/p10.jpg", alt: "Perfume 10" },
];

const Carousel = () => {
    return (
        <div className="marquee">
            <div className="marquee-content">
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={400}
                            className="carousel-image"
                        />
                    </div>
                ))}
                {/* Duplicate images for seamless scrolling */}
                {images.map((image, index) => (
                    <div className="carousel-item" key={index + images.length}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={400}
                            className="carousel-image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
