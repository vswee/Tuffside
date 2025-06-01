import styles from './CTAButtons.module.css';

export default function CTAButtons({ 
  layout = 'horizontal', 
  size = 'default',
  showBooking = true,
  className = '' 
}) {
  const containerClass = `${styles.ctaContainer} ${styles[layout]} ${styles[size]} ${className}`;

  return (
    <div className={containerClass}>
      {showBooking && (
        <a 
          href="/bookings" 
          className="btn btn-primary btn-large"
          aria-label="Book an appointment"
        >
          Book Appointment
        </a>
      )}
      
      <a 
        href="tel:+18683357440" 
        className="btn btn-large"
        aria-label="Call Tuffside Automotive Garage"
      >
        📞 Call Now
      </a>
      
      <a 
        href="https://wa.me/18683357440" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-large"
        aria-label="Message us on WhatsApp"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
