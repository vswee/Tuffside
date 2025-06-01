import BookingCard from '@/components/BookingCard';
import styles from './page.module.css';

export const metadata = {
  title: "Book a Service - Tuffside Automotive Garage",
  description: "Book your automotive service online. Choose from emergency services, repairs, or general servicing. Easy online booking with TidyCal.",
};

export default function Bookings() {
  const bookingTypes = [
    {
      title: "Emergency or On-site Services",
      duration: "1 hour",
      description: "Stuck on the road or need help at your location? We offer call-outs for breakdowns, urgent repairs, and vehicle recovery. Whether it's a dead battery, a flat tyre, or something more involved, we're equipped to respond quickly and get you moving again.",
      bookingUrl: "https://tidycal.com/1w7lwem/emergency-or-on-site-services",
      icon: "🚨",
      urgent: true
    },
    {
      title: "Repairs",
      duration: "15 minutes",
      description: "Whether it's something minor or a bit more serious, we'll take a thorough look and get your vehicle back in shape. This includes engine diagnostics, suspension issues, brake repairs, electrical faults, and other mechanical concerns. Bring it in—we'll sort it out.",
      bookingUrl: "https://tidycal.com/1w7lwem/repairs",
      icon: "🔧",
      urgent: false
    },
    {
      title: "General Servicing",
      duration: "2 hours",
      description: "Keep your vehicle running smoothly with a routine check-up. This service covers a standard maintenance checklist including oil and filter changes, fluid top-ups, brake inspection, tyre rotation, battery health, and more. Ideal for regular upkeep and peace of mind.",
      bookingUrl: "https://tidycal.com/1w7lwem/general-servicing",
      icon: "🛠️",
      urgent: false
    }
  ];

  return (
    <div className={styles.bookingsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Book a Service</h1>
            <p className={styles.heroDescription}>
              Choose the service that best fits your needs and book online. 
              We'll confirm your appointment and get your vehicle back in top shape.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Cards */}
      <section className={styles.bookingCards}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {bookingTypes.map((booking, index) => (
              <BookingCard
                key={index}
                title={booking.title}
                duration={booking.duration}
                description={booking.description}
                bookingUrl={booking.bookingUrl}
                icon={booking.icon}
                urgent={booking.urgent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className={styles.bookingInfo}>
        <div className="container">
          <div className={styles.infoContent}>
            <div className={styles.infoText}>
              <h2>How It Works</h2>
              <ol className={styles.stepsList}>
                <li>
                  <strong>Choose Your Service:</strong> Select the type of service 
                  that best matches your needs from the options above.
                </li>
                <li>
                  <strong>Pick Your Time:</strong> Choose a convenient date and time 
                  from our available slots.
                </li>
                <li>
                  <strong>Provide Details:</strong> Tell us about your vehicle and 
                  any specific concerns you have.
                </li>
                <li>
                  <strong>Confirmation:</strong> We'll confirm your booking and send 
                  you all the details you need.
                </li>
              </ol>
            </div>
            <div className={styles.contactInfo}>
              <h3>Need Help Booking?</h3>
              <p>
                If you're not sure which service you need or prefer to book over 
                the phone, we're here to help.
              </p>
              <div className={styles.contactOptions}>
                <a 
                  href="tel:+18683357440" 
                  className="btn btn-primary"
                >
                  📞 Call Us
                </a>
                <a 
                  href="https://wa.me/18683357440" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="mailto:info@tuffside.vip" 
                  className="btn"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className={styles.emergency}>
        <div className="container">
          <div className={styles.emergencyContent}>
            <h2>🚨 Emergency Breakdown?</h2>
            <p>
              If you're currently broken down or need immediate assistance, 
              don't wait for an appointment - call us now!
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
    </div>
  );
}
