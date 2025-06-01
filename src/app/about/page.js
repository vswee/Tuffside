import CTAButtons from '@/components/CTAButtons';
import styles from './page.module.css';

export const metadata = {
  title: "About Tuffside Automotive Garage - Our Story",
  description: "Learn about Tuffside Automotive Garage's commitment to quality automotive repair and maintenance in Trinidad. Over 15 years of trusted service.",
};

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>About Tuffside</h1>
            <p className={styles.heroTagline}>Built to Last. Tuned to Perform.</p>
            <p className={styles.heroDescription}>
              More than just a garage - we're your trusted automotive partners 
              committed to keeping you safely on the road.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>Our Story</h2>
              <p>
                Tuffside Automotive Garage was born from a simple belief: every vehicle 
                deserves honest, expert care, and every customer deserves to be treated 
                like family. What started as a small operation has grown into one of 
                Trinidad's most trusted automotive service providers.
              </p>
              <p>
                For over 15 years, we've been the go-to garage for drivers who value 
                quality workmanship, fair pricing, and genuine customer service. We've 
                built our reputation one satisfied customer at a time, and we're proud 
                to serve our community with integrity and expertise.
              </p>
              <p>
                Whether you drive a compact car, a heavy-duty truck, or anything in 
                between, we treat every vehicle with the same level of care and attention. 
                Because at Tuffside, we don't just fix cars - we keep families moving.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.experienceBadge}>
                <h3>15+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className={styles.values}>
        <div className="container">
          <h2 className="text-center mb-lg">Our Values</h2>
          <div className="grid grid-3">
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Trust & Honesty</h3>
              <p>
                We believe in transparent communication and honest pricing. 
                No hidden fees, no unnecessary work - just straight talk about 
                what your vehicle needs.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3>Quality & Speed</h3>
              <p>
                We know your time is valuable. That's why we work efficiently 
                without compromising on quality, getting you back on the road 
                as quickly as possible.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💪</div>
              <h3>Expertise & Care</h3>
              <p>
                Our team brings years of experience and genuine passion for 
                automotive work. Every job gets our full attention, from routine 
                maintenance to complex repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className={styles.difference}>
        <div className="container">
          <div className={styles.differenceContent}>
            <div className={styles.differenceText}>
              <h2>What Sets Us Apart</h2>
              <ul className={styles.differenceList}>
                <li>
                  <strong>Personal Service:</strong> We remember your name, your car, 
                  and your preferences. You're not just a number here.
                </li>
                <li>
                  <strong>Fair Pricing:</strong> Competitive rates with no surprises. 
                  We'll always explain costs upfront.
                </li>
                <li>
                  <strong>Emergency Response:</strong> Breakdowns don't wait for 
                  business hours. Neither do we.
                </li>
                <li>
                  <strong>All Makes & Models:</strong> From vintage classics to 
                  modern hybrids, we work on everything.
                </li>
                <li>
                  <strong>Guaranteed Work:</strong> We stand behind every job with 
                  our satisfaction guarantee.
                </li>
                <li>
                  <strong>Community Focus:</strong> We're locals serving locals, 
                  invested in our community's success.
                </li>
              </ul>
            </div>
            <div className={styles.differenceStats}>
              <div className={styles.statCard}>
                <h3>500+</h3>
                <p>Happy Customers</p>
              </div>
              <div className={styles.statCard}>
                <h3>98%</h3>
                <p>Customer Satisfaction</p>
              </div>
              <div className={styles.statCard}>
                <h3>24/7</h3>
                <p>Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Experience the Tuffside Difference?</h2>
            <p>
              Join hundreds of satisfied customers who trust us with their vehicles. 
              Contact us today to schedule your service or get a quote.
            </p>
            <CTAButtons layout="horizontal" size="large" />
          </div>
        </div>
      </section>
    </div>
  );
}
