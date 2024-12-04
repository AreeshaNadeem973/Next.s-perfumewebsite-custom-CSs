"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
  const [isHomePage, setIsHomePage] = useState(false); // State to detect Home page

  useEffect(() => {
    // Check if the current page is the home page
    setIsHomePage(window.location.pathname === "/");
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu
  };

  return (
    <header className="header">
      <h1 className="logo">Perfume World</h1>

      {/* Hamburger icon for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu style={{ color: 'white', fontSize: '30px' }} />
      </div>

      {/* Navigation links */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={handleLinkClick}>Home</Link>
        <Link href="/about" onClick={handleLinkClick}>About</Link>
        <Link href="/perfumes" onClick={handleLinkClick}>Perfumes</Link>
        <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
        <FaShoppingCart style={{ color: "white", fontSize: "20px" }} />
      </nav>
    </header>
  );
};

export default Header;
