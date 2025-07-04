'use client';

import { useEffect } from 'react';
import styles from './FacebookBentobox.module.css';

export default function FacebookBentobox() {
  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className={styles.facebookBentobox}>
      <div className="container">
        <div className={styles.bentoboxHeader}>
          <h2>Latest Updates</h2>
          <p>Stay connected with our latest news and updates from our Facebook page</p>
        </div>
        
        <div className={styles.bentoboxContainer}>
          <div className={styles.facebookWidget}>
            <div 
              className="fb-page" 
              data-href="https://www.facebook.com/profile.php?id=61576809067752"
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote 
                cite="https://www.facebook.com/profile.php?id=61576809067752" 
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/profile.php?id=61576809067752">
                  Visit our Facebook page for the latest updates
                </a>
              </blockquote>
            </div>
          </div>
          
          <div className={styles.bentoboxSidebar}>
            <div className={styles.connectCard}>
              <div className={styles.connectIcon}>📱</div>
              <h3>Stay Connected</h3>
              <p>Follow us on Facebook for:</p>
              <ul>
                <li>✓ Latest service updates</li>
                <li>✓ Behind-the-scenes content</li>
                <li>✓ Customer testimonials</li>
                <li>✓ Special promotions</li>
              </ul>
              <a 
                href="https://www.facebook.com/profile.php?id=61576809067752" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Follow Us
              </a>
            </div>
            
            <div className={styles.quickActions}>
              <h4>Quick Actions</h4>
              <div className={styles.actionButtons}>
                <a 
                  href="tel:+18683357440" 
                  className={`btn ${styles.actionBtn}`}
                >
                  📞 Call Now
                </a>
                <a 
                  href="https://wa.me/18683357440" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`btn ${styles.actionBtn}`}
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="/bookings" 
                  className={`btn btn-primary ${styles.actionBtn}`}
                >
                  📅 Book Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
