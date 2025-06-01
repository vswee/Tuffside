'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <h1>Tuffside</h1>
            <span className={styles.tagline}>Automotive Garage</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <Link href="/bookings" className={styles.navLink}>Bookings</Link>
            <Link href="/testimonials" className={styles.navLink}>Testimonials</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <a 
              href="tel:+18683357440" 
              className="btn btn-primary"
              aria-label="Call Tuffside Automotive Garage"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/18683357440" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              aria-label="Message us on WhatsApp"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>About</Link>
          <Link href="/services" className={styles.mobileNavLink} onClick={toggleMenu}>Services</Link>
          <Link href="/bookings" className={styles.mobileNavLink} onClick={toggleMenu}>Bookings</Link>
          <Link href="/testimonials" className={styles.mobileNavLink} onClick={toggleMenu}>Testimonials</Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link>
          
          <div className={styles.mobileCta}>
            <a 
              href="tel:+18683357440" 
              className="btn btn-primary btn-large"
              onClick={toggleMenu}
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/18683357440" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-large"
              onClick={toggleMenu}
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
