"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo section */}
        <div className="navbar-logo">
          <Image
            src="/assets/picture/mens2-removebg-preview.png"
            alt="Perfume Palace Logo"
            width={50}
            height={50}
            className="navbar-logo-img"
          />
          <span className="navbar-title">Perfume Palace</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links">
          <Link href="/" className="navbar-link" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="navbar-link" onClick={closeMenu}>About</Link>
          <Link href="/latest" className="navbar-link" onClick={closeMenu}>Latest</Link>
          <Link href="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="navbar-hamburger">
          <button onClick={toggleMenu} className="navbar-hamburger-btn" aria-label="Toggle navigation">
            <svg
              className="navbar-hamburger-icon"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link href="/" className="mobile-link" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="mobile-link" onClick={closeMenu}>About</Link>
          <Link href="/latest" className="mobile-link" onClick={closeMenu}>Latest</Link>
          <Link href="/contact" className="mobile-link" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
