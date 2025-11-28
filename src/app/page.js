import Image from 'next/image';
import CTAButtons from '@/components/CTAButtons';
import styles from './page.module.css';

const heroMetrics = [
  { value: '500+', label: 'Vehicles serviced' },
  { value: '24/7', label: 'Emergency dispatch' },
  { value: '4.9/5', label: 'Customer rating' }
];

const previewServices = [
  {
    title: 'Precision Diagnostics',
    description: 'Computerised scanning, smoke testing, and borescope inspection to pinpoint issues the first time.'
  },
  {
    title: 'Diesel & Heavy Repair',
    description: 'Fuel system, turbo, and drivetrain specialists for commercial fleets and workhorses.'
  },
  {
    title: 'Performance Tuning',
    description: 'Custom ECU mapping, power upgrades, and reliability packages tailored to your goals.'
  },
  {
    title: 'Suspension & Chassis',
    description: 'Ride-height adjustments, steering, and suspension refreshes that keep you planted and safe.'
  }
];

const whyPoints = [
  'Transparent line-item quotes before any wrench is turned.',
  'OEM-grade tooling and data-backed recommendations.',
  'Mobile diagnostics + emergency callouts anywhere in Trinidad.',
  'Fleet maintenance programs with proactive scheduling.',
  'Locally owned, relationship-first service.'
];

const reliabilityStats = [
  { value: '10+', label: 'Years on the floor' },
  { value: '35+', label: 'Fleet partners' },
  { value: '780', label: 'Jobs last year' }
];

export default function Home() {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <p className={styles.heroKicker}>South Trinidad • Full-service garage</p>
              <h1>Built to last. Tuned to perform.</h1>
              <ul className={styles.heroHighlights}>
                <li>Advanced diagnostics + live data logging</li>
                <li>Heavy diesel, petrol, and performance builds</li>
                <li>24/7 roadside assistance + emergency recovery</li>
                <li>2 hour average site response time across Trinidad</li>
              </ul>
              {/* <div className={styles.heroMetrics}>
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className={styles.metric}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div> */}
            </div>

            <div className={styles.heroMedia}>
              <div className={styles.mediaCard}>
                <Image
                  src="/images/call-card-graphic.webp"
                  alt="Illustration of Tuffside automotive tooling"
                  width={700}
                  height={560}
                  priority
                  className={styles.heroImage}
                  sizes="(max-width: 900px) 100vw, 520px"
                />
              </div>
              <CTAButtons layout="horizontal" size="large" className={styles.heroCta} />
              {/* <div className={styles.heroBadge}>
                <p className={styles.badgeLabel}>Emergency ready</p>
                <p className={styles.badgeValue}>30 min avg response</p>
                <span className={styles.badgeMeta}>Across Trinidad</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesPreview}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>What we fix</p>
            <h2>Full-spectrum diagnostics + repair</h2>
            <p>
              Whether it is a fleet truck, track toy, or daily driver, we diagnose and repair every system bumper
              to bumper so you leave with confidence.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {previewServices.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <a href="/services" className="btn btn-primary btn-large">
              View all services
            </a>
          </div>
        </div>
      </section>

      <section className={styles.whyChooseUs}>
        <div className="container">
          <div className={styles.whyContent}>
            <div className={styles.whyText}>
              <p className={styles.sectionKicker}>Why Tuffside</p>
              <h2>Precision workmanship, honest advice.</h2>
              <p>
                We are neighbours first and technicians second. Expect straight answers, photos of the work in
                progress, and preventative guidance that saves money down the road.
              </p>
              <ul className={styles.whyList}>
                {whyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className={styles.whyStats}>
              {reliabilityStats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.emergency}>
        <div className="container">
          <div className={styles.emergencyContent}>
            <div>
              <p className={styles.sectionKicker}>Emergency support</p>
              <h2>Need help on the roadside?</h2>
              <p>
                Breakdowns do not wait for business hours. Call or WhatsApp for rapid dispatch, on-site repairs,
                towing coordination, and status updates until you are moving again.
              </p>
            </div>
            <div className={styles.emergencyActions}>
              <a href="tel:+18683357440" className="btn btn-primary btn-large">
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
