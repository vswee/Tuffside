import CTAButtons from '@/components/CTAButtons';
import styles from './page.module.css';
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <Image className={styles.heroImage} src="/images/call-card-graphic.webp" alt="Tuffside Automotive Garage Logo"
              width={1000}
              height={501}/>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Tuffside
                <span className={styles.heroSubtitle}>Automotive Garage</span>
              </h1>
              <p className={styles.heroTagline}>Built to Last. Tuned to Perform.</p>
              <p className={styles.heroDescription}>
                Professional automotive repair and maintenance services in South Trinidad.
                Diagnostics, heavy diesel repair, engine tuning, and suspension work
                with honest, reliable service you can trust.
              </p>
              <CTAButtons layout="horizontal" size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesPreview}>
        <div className="container">
          <h2 className="text-center mb-lg">Our Services</h2>
          <div className="grid grid-3">
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Diagnostics</h3>
              <p>Advanced diagnostic tools to identify and resolve engine issues quickly and accurately.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚙️</div>
              <h3>Diesel Repair</h3>
              <p>Specialised diesel engine repair and maintenance for trucks, and heavy machinery.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏁</div>
              <h3>Engine Tuning</h3>
              <p>Performance tuning, modification and optimisation to get the best out of your vehicle's engine.</p>
            </div>
          </div>
          <div className="text-center mt-lg">
            <a href="/services" className="btn btn-primary btn-large">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseUs}>
        <div className="container">
          <div className={styles.whyContent}>
            <div className={styles.whyText}>
              <h2>Why Choose Tuffside?</h2>
              <ul className={styles.whyList}>
                <li>✓ Over 10 years of automotive experience</li>
                <li>✓ Honest, transparent pricing</li>
                <li>✓ Quick turnaround times</li>
                <li>✓ Emergency and on-site services</li>
                <li>✓ Friendly service</li>
              </ul>
              <p>
                We're not just another garage - we're your neighbours who care about
                keeping you safely on the road. Every job, big or small, gets our
                full attention and expertise.
              </p>
            </div>
            <div className={styles.whyImage}>
              <div className={styles.trustBadge}>
                <h3>Trusted by</h3>
                <p className={styles.trustNumber}>500+</p>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className={styles.emergency}>
        <div className="container">
          <div className={styles.emergencyContent}>
            <h2>Need Emergency Help?</h2>
            <p>Stuck on the road? We offer emergency call-out services for breakdowns,
            urgent repairs, and vehicle recovery across Trinidad.</p>
            <div className={styles.emergencyActions}>
              <a
                href="tel:+18683357440"
                className="btn btn-primary btn-large"
              >
                📞 Emergency Call
              </a>
              <a
                href="https://wa.me/18683357440"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-large"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
