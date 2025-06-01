'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(5); // Start with all items visible
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const navRef = useRef(null);
  const moreButtonRef = useRef(null);
  const moreMenuRef = useRef(null);

  // Define all navigation items
  const navItems = [
    { href: '/about', label: 'About', show: pathname !== '/about' },
    { href: '/services', label: 'Services', show: pathname !== '/services' },
    { href: '/bookings', label: 'Bookings', show: pathname !== '/bookings' },
    { href: '/testimonials', label: 'Testimonials', show: pathname !== '/testimonials' },
    { href: '/contact', label: 'Contact', show: pathname !== '/contact' }
  ].filter(item => item.show);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const closeMoreMenu = () => {
    setIsMoreMenuOpen(false);
  };

  // Handle window resize and mobile detection
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const mobile = windowWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        // Simple breakpoint-based approach for greedy navigation
        let newVisibleItems = navItems.length;

        if (windowWidth <= 1200 && windowWidth > 1000) {
          newVisibleItems = Math.max(3, navItems.length - 2); // Hide last 2 items
        } else if (windowWidth <= 1000 && windowWidth > 900) {
          newVisibleItems = Math.max(2, navItems.length - 3); // Hide last 3 items
        } else if (windowWidth <= 900 && windowWidth > 768) {
          newVisibleItems = Math.max(1, navItems.length - 4); // Hide last 4 items
        }

        // Don't show "More" for just one item
        if (navItems.length - newVisibleItems === 1) {
          newVisibleItems = navItems.length;
        }

        setVisibleItems(newVisibleItems);
      } else {
        setVisibleItems(navItems.length);
        setIsMoreMenuOpen(false);
      }
    };

    // Initial calculation
    handleResize();

    // Window resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navItems, isMobile]);

  // Handle click outside to close more menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target)
      ) {
        setIsMoreMenuOpen(false);
      }
    };

    if (isMoreMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMoreMenuOpen]);

  // Handle keyboard navigation
  const handleMoreMenuKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsMoreMenuOpen(false);
      moreButtonRef.current?.focus();
    }
  };

  const handleMoreButtonKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMoreMenu();
    }
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
          <nav className={styles.nav} ref={navRef}>
            {/* Visible navigation items */}
            {navItems.slice(0, visibleItems).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navLink}
              >
                {item.label}
              </Link>
            ))}

            {/* More dropdown button - only show if there are hidden items and not mobile */}
            {!isMobile && visibleItems < navItems.length && (
              <div className={styles.moreDropdown}>
                <button
                  ref={moreButtonRef}
                  className={styles.moreButton}
                  onClick={toggleMoreMenu}
                  onKeyDown={handleMoreButtonKeyDown}
                  aria-expanded={isMoreMenuOpen}
                  aria-haspopup="true"
                  aria-label="More navigation options"
                >
                  <span>More</span>
                  <svg
                    className={`${styles.moreIcon} ${isMoreMenuOpen ? styles.moreIconOpen : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 12l-4-4h8l-4 4z"/>
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isMoreMenuOpen && (
                  <div
                    ref={moreMenuRef}
                    className={styles.moreMenu}
                    onKeyDown={handleMoreMenuKeyDown}
                    role="menu"
                    aria-label="Additional navigation options"
                  >
                    {navItems.slice(visibleItems).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.moreMenuItem}
                        onClick={closeMoreMenu}
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
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
          {pathname !== '/' && (
            <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link>
          )}
          {pathname !== '/about' && <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>About</Link>}
          {pathname !== '/services' && <Link href="/services" className={styles.mobileNavLink} onClick={toggleMenu}>Services</Link>}
          {pathname !== '/bookings' && <Link href="/bookings" className={styles.mobileNavLink} onClick={toggleMenu}>Bookings</Link>}
          {pathname !== '/testimonials' && <Link href="/testimonials" className={styles.mobileNavLink} onClick={toggleMenu}>Testimonials</Link>}
          {pathname !== '/contact' && <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link>}

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
