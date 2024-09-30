"use client";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        {/* Logo and Title */}
        <a className="footer-logo">
          <Image
            src="/assets/picture/mens2-removebg-preview.png"
            alt="Perfume Palace Logo"
            width={50}
            height={50}
            className="footer-image"
          />
          <span className="footer-title">PERFUME PALACE</span>
        </a>
        
        {/* Copyright Text */}
        <p className="footer-copyright">© 2024 SAMAN SIDDIQUI</p>

        {/* Social Links */}
        <span className="footer-social-links">
          <Link target="_blank" href="https://www.facebook.com/saman.siddiqui.5682" className="facebook">
            <BsFacebook />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/saman_siddiqui320/" className="instagram">
            <BsInstagram />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/saman-siddiqui-0023b3292/" className="linkedin">
            <BsLinkedin />
          </Link>
          <Link target="_blank" href="http://www.youtube.com/@academicmentors" className="youtube">
            <BsYoutube />
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Footer;

