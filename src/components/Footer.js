import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <h3>Tuffside Automotive</h3>
            <p className={styles.tagline}>Built to Last. Tuned to Perform.</p>
            <p>Professional automotive repair and maintenance services in Trinidad.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <nav className={styles.footerNav}>
              <Link href="/" className={styles.footerLink}>Home</Link>
              <Link href="/about" className={styles.footerLink}>About</Link>
              <Link href="/services" className={styles.footerLink}>Services</Link>
              <Link href="/bookings" className={styles.footerLink}>Bookings</Link>
              <Link href="/testimonials" className={styles.footerLink}>Testimonials</Link>
              <Link href="/contact" className={styles.footerLink}>Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h4>Contact Us</h4>
            <div className={styles.contactInfo}>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+18683357440" className={styles.contactLink}>
                  +1 868 335-7440
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@tuffside.vip" className={styles.contactLink}>
                  info@tuffside.vip
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{' '}
                <a 
                  href="https://wa.me/18683357440" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Message Us
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h4>Our Services</h4>
            <ul className={styles.servicesList}>
              <li>Engine Diagnostics</li>
              <li>Diesel Repair</li>
              <li>Engine Tuning</li>
              <li>Suspension Work</li>
              <li>General Maintenance</li>
              <li>Emergency Services</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>&copy; {currentYear} Tuffside Automotive Garage. All rights reserved.</p>
            <div className={styles.footerCta}>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
