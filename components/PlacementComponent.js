import React from 'react';
import styles from '../pages/PlacementComponent.module.css';

const companies = [
  { name: "Mindtree", image: "/images/mindtree.png" },
  { name: "Mindfire", image: "/images/mindfire.webp" },
  { name: "Infosys", image: "/images/infosys-logo.jpg" },
  { name: "Tata Consultancy Services", image: "/images/TCS-Logo.png" },
  { name: "Accenture", image: "/images/Accenture-logo.png" },
];

export default function PlacementComponent() {
  const duplicatedCompanies = [...companies, ...companies]; // Duplicate array for seamless loop

  return (
    <section className="py-20 bg-gray-100" id="placement">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Top Recruiters</h2>
        <p className="text-lg text-gray-600 mb-10">
          Meet the top recruiters who trust our talent. Our students are placed with leading companies, shaping successful careers worldwide.
        </p>

        {/* Continuous Carousel */}
        <div className={styles.carousel}>
          <div className={styles.cardWrapper}>
            {duplicatedCompanies.map((company, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-50 object-contain mx-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
