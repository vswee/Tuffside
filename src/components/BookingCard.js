import styles from './BookingCard.module.css';

export default function BookingCard({ 
  title, 
  duration, 
  description, 
  bookingUrl, 
  icon, 
  urgent = false 
}) {
  const cardClass = `${styles.bookingCard} ${urgent ? styles.urgent : ''}`;

  return (
    <div className={cardClass}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>{icon}</div>
        <div className={styles.cardTitle}>
          <h3>{title}</h3>
          <span className={styles.duration}>Duration: {duration}</span>
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <p className={styles.description}>{description}</p>
      </div>
      
      <div className={styles.cardFooter}>
        <a 
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${urgent ? 'btn-primary' : ''} btn-large ${styles.bookingButton}`}
        >
          Book Now
        </a>
      </div>
      
      {urgent && (
        <div className={styles.urgentBadge}>
          Emergency Service
        </div>
      )}
    </div>
  );
}
