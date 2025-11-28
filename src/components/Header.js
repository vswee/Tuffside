'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/bookings', label: 'Bookings' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(NAV_ITEMS.length);
  const [isMobile, setIsMobile] = useState(false);

  const moreButtonRef = useRef(null);
  const moreMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen((prev) => !prev);
  };

  const closeMoreMenu = () => {
    setIsMoreMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const mobile = windowWidth <= 768;
      setIsMobile(mobile);

      if (mobile) {
        setVisibleItems(NAV_ITEMS.length);
        setIsMoreMenuOpen(false);
        return;
      }

      let newVisibleItems = NAV_ITEMS.length;

      if (windowWidth <= 1200 && windowWidth > 1024) {
        newVisibleItems = Math.max(4, NAV_ITEMS.length - 2);
      } else if (windowWidth <= 1024 && windowWidth > 900) {
        newVisibleItems = Math.max(3, NAV_ITEMS.length - 3);
      } else if (windowWidth <= 900 && windowWidth > 768) {
        newVisibleItems = Math.max(2, NAV_ITEMS.length - 4);
      }

      if (NAV_ITEMS.length - newVisibleItems === 1) {
        newVisibleItems = NAV_ITEMS.length;
      }

      setVisibleItems(newVisibleItems);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          <Link href="/" className={styles.logo} aria-label="Tuffside Automotive Garage home">
            <span className={styles.wordmark}>Tuffside</span>
            <span className={styles.tagline}>Automotive Garage</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary navigation">
            {NAV_ITEMS.slice(0, visibleItems).map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            {!isMobile && visibleItems < NAV_ITEMS.length && (
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
                    <path d="M8 12l-4-4h8l-4 4z" />
                  </svg>
                </button>

                {isMoreMenuOpen && (
                  <div
                    ref={moreMenuRef}
                    className={styles.moreMenu}
                    onKeyDown={handleMoreMenuKeyDown}
                    role="menu"
                    aria-label="Additional navigation options"
                  >
                    {NAV_ITEMS.slice(visibleItems).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.moreMenuItem}
                        onClick={closeMoreMenu}
                        role="menuitem"
                        aria-current={pathname === item.href ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

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

          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.mobileNavLink} ${pathname === item.href ? styles.mobileNavLinkActive : ''}`}
              onClick={toggleMenu}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}

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
