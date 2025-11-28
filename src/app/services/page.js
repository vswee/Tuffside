import CTAButtons from '@/components/CTAButtons';
import styles from './page.module.css';

export const metadata = {
  title: "Automotive Services - Tuffside Garage Trinidad",
  description: "Complete automotive services including engine diagnostics, diesel repair, engine tuning, suspension work, and emergency services in Trinidad.",
};

const serviceHighlights = [
  'Live diagnostic reports with photos and estimates.',
  'OEM and motorsport-grade tooling under one roof.',
  'Flexible scheduling for fleets and commercial vehicles.'
];

export default function Services() {
  const services = [
    {
      icon: "🔧",
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify engine problems quickly and accurately. We use state-of-the-art equipment to pinpoint issues and provide detailed reports.",
      features: ["OBD-II scanning", "Borescope inspection", "Fault code interpretation"]
    },
    {
      icon: "⚙️",
      title: "Diesel Repair",
      description: "Specialised diesel engine repair and maintenance for trucks, buses, and heavy machinery. Our expertise covers all diesel systems and components.",
      features: ["Fuel injection repair", "Turbocharger service", "Diesel engine rebuilds", "Emission system repair"]
    },
    {
      icon: "🏁",
      title: "Engine Tuning",
      description: "Performance tuning and optimisation to maximize your engine's potential. From economy tuning to performance enhancement.",
      features: ["Fuel efficiency optimization", "Power enhancement", "Engine modification"]
    },
    {
      icon: "🔩",
      title: "Suspension Work",
      description: "Complete suspension system repair and maintenance to ensure a smooth, safe ride and proper vehicle handling.",
      features: ["Shock absorber replacement", "Spring repair", "Alignment services", "Suspension diagnostics", "Ride height modifications"]
    },
    {
      icon: "🚘",
      title: "Body Work and Replacement",
      description: "Full bodywork services including dent removal, panel replacement, sanding, priming, and painting. We restore vehicles to their best condition after accidents, wear, or custom requests.",
      features: ["Panel replacement", "Dent repair", "Sanding and priming", "Paint respray", "Rust treatment"]
    },
    {
      icon: "🛠️",
      title: "General Maintenance",
      description: "Regular maintenance services to keep your vehicle running smoothly and prevent costly repairs down the road.",
      features: ["Oil changes", "Filter replacements", "Brake service", "Tyre rotation"]
    },
    {
      icon: "🚨",
      title: "Emergency Services",
      description: "24/7 emergency call-out services for breakdowns, urgent repairs, and vehicle recovery across Trinidad.",
      features: ["Roadside assistance", "Jump starts", "Tyre changes", "Emergency towing"]
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
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div>
              <p className={styles.heroKicker}>Services</p>
              <h1>Our Services</h1>
              <p className={styles.heroDescription}>
                Comprehensive automotive repair and maintenance packages designed to keep your vehicle running at
                its best. From routine servicing to complex rebuilds, we handle it in-house with transparent
                updates.
              </p>
            </div>
            <ul className={styles.heroHighlights}>
              {serviceHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.servicesGrid}>
        <div className="container">
          <div className={styles.serviceList}>
            {services.map((service, index) => (
              <article key={index} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whyChoose}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Why choose our shop</p>
            <h2>Backed by data, driven by relationships.</h2>
            <p>
              We combine a race-and-rally mindset with approachable service, so you get transparent updates and
              reliable turnaround times.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h4>Expert Technicians</h4>
              <p>Certified mechanics with hands-on experience on every major platform.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Quality Parts</h4>
              <p>OEM, performance, and trusted aftermarket partners for every budget.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Fair Pricing</h4>
              <p>Line-item quotes and approvals before any major work begins.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Quick Service</h4>
              <p>Priority scheduling and pick-up options keep you moving.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Trusted Partners</h4>
              <p>Access to machinists, bodywork experts, and paint specialists we trust.</p>
            </div>
            <div className={styles.benefitCard}>
              <h4>Emergency Support</h4>
              <p>On-call technicians ready for roadside diagnostics and recovery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <p className={styles.sectionKicker}>Ready when you are</p>
            <h2>Book a service or request a quote.</h2>
            <p>
              Do not wait for small problems to become big ones. Contact us today to schedule service or ask for a
              custom estimate.
            </p>
            <CTAButtons layout="horizontal" size="large" />
          </div>
        </div>
      </section>
    </div>
  );
}
