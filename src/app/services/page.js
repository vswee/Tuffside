import CTAButtons from '@/components/CTAButtons';
import styles from './page.module.css';

export const metadata = {
  title: "Automotive Services - Tuffside Garage Trinidad",
  description: "Complete automotive services including engine diagnostics, diesel repair, engine tuning, suspension work, and emergency services in Trinidad.",
};

export default function Services() {
  const services = [
    {
      icon: "🔧",
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify engine problems quickly and accurately. We use state-of-the-art equipment to pinpoint issues and provide detailed reports.",
      features: ["OBD-II scanning", "Engine performance analysis", "Emission testing", "Fault code interpretation"]
    },
    {
      icon: "⚙️",
      title: "Diesel Repair",
      description: "Specialized diesel engine repair and maintenance for trucks, buses, and heavy machinery. Our expertise covers all diesel systems and components.",
      features: ["Fuel injection repair", "Turbocharger service", "Diesel engine rebuilds", "Emission system repair"]
    },
    {
      icon: "🏁",
      title: "Engine Tuning",
      description: "Performance tuning and optimization to maximize your engine's potential. From economy tuning to performance enhancement.",
      features: ["ECU remapping", "Performance chips", "Fuel efficiency optimization", "Power enhancement"]
    },
    {
      icon: "🔩",
      title: "Suspension Work",
      description: "Complete suspension system repair and maintenance to ensure a smooth, safe ride and proper vehicle handling.",
      features: ["Shock absorber replacement", "Spring repair", "Alignment services", "Suspension diagnostics"]
    },
    {
      icon: "🔋",
      title: "Electrical Systems",
      description: "Comprehensive electrical system diagnosis and repair, from simple battery issues to complex wiring problems.",
      features: ["Battery testing", "Alternator repair", "Starter motor service", "Wiring diagnostics"]
    },
    {
      icon: "🛠️",
      title: "General Maintenance",
      description: "Regular maintenance services to keep your vehicle running smoothly and prevent costly repairs down the road.",
      features: ["Oil changes", "Filter replacements", "Brake service", "Tire rotation"]
    },
    {
      icon: "🚨",
      title: "Emergency Services",
      description: "24/7 emergency call-out services for breakdowns, urgent repairs, and vehicle recovery across Trinidad.",
      features: ["Roadside assistance", "Jump starts", "Tire changes", "Emergency towing"]
    },
    {
      icon: "🚛",
      title: "Commercial Vehicles",
      description: "Specialized services for commercial fleets, trucks, and heavy-duty vehicles with flexible scheduling.",
      features: ["Fleet maintenance", "Commercial diagnostics", "Heavy-duty repairs", "Preventive maintenance"]
    }
  ];

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Our Services</h1>
            <p className={styles.heroDescription}>
              Comprehensive automotive repair and maintenance services designed to keep 
              your vehicle running at its best. From routine maintenance to complex repairs, 
              we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesGrid}>
        <div className="container">
          <div className="grid grid-2">
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className={styles.whyChoose}>
        <div className="container">
          <h2 className="text-center mb-lg">Why Choose Our Services?</h2>
          <div className="grid grid-3">
            <div className={styles.benefitCard}>
              <h4>Expert Technicians</h4>
              <p>Our certified mechanics have years of experience working on all makes and models.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Quality Parts</h4>
              <p>We use only high-quality parts and materials to ensure lasting repairs.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Fair Pricing</h4>
              <p>Transparent, competitive pricing with no hidden fees or surprises.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Quick Service</h4>
              <p>Efficient service to get you back on the road as quickly as possible.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Guaranteed Work</h4>
              <p>All our work comes with a satisfaction guarantee for your peace of mind.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Emergency Support</h4>
              <p>24/7 emergency services when you need help the most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Service Your Vehicle?</h2>
            <p>
              Don't wait for small problems to become big ones. Contact us today to 
              schedule your service or get a free quote.
            </p>
            <CTAButtons layout="horizontal" size="large" />
          </div>
        </div>
      </section>
    </div>
  );
}
