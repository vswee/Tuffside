import CTAButtons from '@/components/CTAButtons';
import styles from './page.module.css';

export const metadata = {
  title: "Contact Tuffside Automotive Garage - Get in Touch",
  description: "Contact Tuffside Automotive Garage in Trinidad. Call +1 868 335-7440, email info@tuffside.vip, or visit our location. Emergency services available 24/7.",
};

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Contact Us</h1>
            <p className={styles.heroDescription}>
              Get in touch with Tuffside Automotive Garage. We're here to help 
              with all your automotive needs, from routine maintenance to emergency repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className={styles.contactInfo}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Details */}
            <div className={styles.contactDetails}>
              <h2>Get in Touch</h2>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.contactText}>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+18683357440" className={styles.contactLink}>
                      +1 868 335-7440
                    </a>
                  </p>
                  <span className={styles.contactNote}>Available 24/7 for emergencies</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div className={styles.contactText}>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@tuffside.vip" className={styles.contactLink}>
                      info@tuffside.vip
                    </a>
                  </p>
                  <span className={styles.contactNote}>We'll respond within 24 hours</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>💬</div>
                <div className={styles.contactText}>
                  <h3>WhatsApp</h3>
                  <p>
                    <a 
                      href="https://wa.me/18683357440" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      Message us on WhatsApp
                    </a>
                  </p>
                  <span className={styles.contactNote}>Quick responses during business hours</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactText}>
                  <h3>Location</h3>
                  <p>Trinidad & Tobago</p>
                  <span className={styles.contactNote}>Mobile service available island-wide</span>
                </div>
              </div>
            </div>

            {/* Business Hours & Services */}
            <div className={styles.businessInfo}>
              <div className={styles.hoursCard}>
                <h3>Business Hours</h3>
                <div className={styles.hours}>
                  <div className={styles.hourItem}>
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className={styles.hourItem}>
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className={styles.hourItem}>
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
                <p className={styles.emergencyNote}>
                  🚨 Emergency services available 24/7
                </p>
              </div>

              <div className={styles.servicesCard}>
                <h3>Quick Services</h3>
                <ul className={styles.servicesList}>
                  <li>Engine Diagnostics</li>
                  <li>Diesel Repair</li>
                  <li>Engine Tuning</li>
                  <li>Suspension Work</li>
                  <li>Electrical Systems</li>
                  <li>General Maintenance</li>
                  <li>Emergency Roadside</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className="text-center mb-lg">Our Service Area</h2>
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <h3>🗺️ Trinidad & Tobago</h3>
              <p>Island-wide mobile service available</p>
              <p>Emergency response across all regions</p>
            </div>
          </div>
          <div className={styles.serviceAreas}>
            <h4>We Service All Areas Including:</h4>
            <div className={styles.areasList}>
              <span>Port of Spain</span>
              <span>San Fernando</span>
              <span>Chaguanas</span>
              <span>Arima</span>
              <span>Point Fortin</span>
              <span>Couva</span>
              <span>Marabella</span>
              <span>Sangre Grande</span>
              <span>And surrounding areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className={styles.emergency}>
        <div className="container">
          <div className={styles.emergencyContent}>
            <h2>🚨 Emergency Breakdown?</h2>
            <p>
              Don't panic! We provide 24/7 emergency roadside assistance 
              across Trinidad & Tobago. Call us now for immediate help.
            </p>
            <a 
              href="tel:+18683357440" 
              className="btn btn-primary btn-large"
            >
              📞 Emergency Call: +1 868 335-7440
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us today to schedule your service, get a quote, or ask any questions. 
              We're here to help keep you moving!
            </p>
            <CTAButtons layout="horizontal" size="large" />
          </div>
        </div>
      </section>
    </div>
  );
}
