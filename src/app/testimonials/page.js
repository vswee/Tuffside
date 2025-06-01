import styles from './page.module.css';

export const metadata = {
  title: "Customer Testimonials - Tuffside Automotive Garage",
  description: "Read what our customers say about Tuffside Automotive Garage. Real reviews from satisfied customers in Trinidad.",
};

export default function Testimonials() {
  const testimonials = [
    {
      id: "TS001",
      name: "Marcus T.",
      vehicle: "2018 Toyota Hilux",
      service: "Diesel Engine Repair",
      rating: 5,
      date: "November 2024",
      review: "My Hilux was losing power and making strange noises. The team at Tuffside diagnosed the problem quickly and had it fixed the same day. Honest pricing and excellent work. I'll definitely be back for my next service.",
      location: "Port of Spain"
    },
    {
      id: "TS002", 
      name: "Sarah M.",
      vehicle: "2020 Honda Civic",
      service: "General Servicing",
      rating: 5,
      date: "October 2024",
      review: "Professional service from start to finish. They explained everything they were doing and why. My car runs like new again. The staff is friendly and the prices are very reasonable. Highly recommended!",
      location: "Oropouche"
    },
    {
      id: "TS003",
      name: "David C.",
      vehicle: "2016 Nissan Frontier",
      service: "Emergency Roadside",
      rating: 5,
      date: "October 2024",
      review: "Broke down on the highway at 8 PM. Called Tuffside and they were there within 30 minutes! Fixed the alternator issue on the spot. Saved my weekend trip. These guys are lifesavers!",
      location: "Chaguanas"
    },
    {
      id: "TS004",
      name: "Jennifer W.",
      vehicle: "2019 Suzuki Swift",
      service: "Brake Repair",
      rating: 5,
      date: "September 2024",
      review: "Had brake problems and was worried about safety. Tuffside took care of everything quickly and thoroughly. They even showed me the old parts and explained what was wrong. Great customer service!",
      location: "Siparia"
    },
    {
      id: "TS005",
      name: "Robert S.",
      vehicle: "2017 Ford Ranger",
      service: "Engine Tuning",
      rating: 5,
      date: "September 2024",
      review: "Wanted to improve my truck's performance and fuel economy. The engine tuning service exceeded my expectations. Better power, better mileage, and the truck feels brand new. Worth every dollar!",
      location: "Couva"
    },
    {
      id: "TS006",
      name: "Lisa R.",
      vehicle: "2015 Hyundai Elantra",
      service: "Electrical Diagnostics",
      rating: 5,
      date: "August 2024",
      review: "Had mysterious electrical issues that other garages couldn't figure out. Tuffside found the problem in no time and fixed it properly. Finally, my car is reliable again. Thank you!",
      location: "Marabella"
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className={styles.testimonialsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Customer Testimonials</h1>
            <p className={styles.heroDescription}>
              Don't just take our word for it - hear what our customers have to say 
              about their experience with Tuffside Automotive Garage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>Happy Customers</p>
            </div>
            <div className={styles.statCard}>
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className={styles.statCard}>
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
            <div className={styles.statCard}>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.serviceTicket}>
                    <span className={styles.ticketId}>#{testimonial.id}</span>
                    <span className={styles.ticketDate}>{testimonial.date}</span>
                  </div>
                  <div className={styles.rating}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <blockquote className={styles.review}>
                    "{testimonial.review}"
                  </blockquote>
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.customerInfo}>
                    <h4>{testimonial.name}</h4>
                    <p className={styles.vehicle}>{testimonial.vehicle}</p>
                    <p className={styles.location}>{testimonial.location}</p>
                  </div>
                  <div className={styles.serviceInfo}>
                    <span className={styles.serviceType}>{testimonial.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Join Our Happy Customers?</h2>
            <p>
              Experience the Tuffside difference for yourself. Book your service today 
              and see why our customers keep coming back.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/bookings" className="btn btn-primary btn-large">
                Book Service
              </a>
              <a href="tel:+18683357440" className="btn btn-large">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
