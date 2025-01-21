import React, { useEffect, useState } from 'react';
import styles from '../pages/PlacementComponent.module.css'; // Correct path to pages
 // Adjusted to the correct relative path
 // Adjusted path to 'pages'
 // Ensure to adjust path if needed

const companies = [
  { name: "Mindtree", image: "/images/mindtree.png" },
  { name: "Mindfire", image: "/images/mindfire.webp" },
  { name: "Infosys", image: "/images/infosys-logo.jpg" },
  { name: "Tata Consultancy Services", image: "/images/TCS-Logo.png" },
  { name: "Accenture", image: "/images/Accenture-logo.png" },
];

export default function PlacementComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 5; // Adjust number of cards visible at a time
  const totalSlides = companies.length;

  // Function to automatically change the index every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change to your desired timing

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= totalSlides - 1) {
        return 0; // Reset to the first company
      }
      return prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return totalSlides - 1; // Reset to the last company
      }
      return prevIndex - 1;
    });
  };

  return (
    <section className="py-20 bg-gray-100" id="placement">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Top Recruiters</h2>
        <p className="text-lg text-gray-600 mb-10">
          Meet the top recruiters who trust our talent. Our students are placed with leading companies, shaping successful careers worldwide.
        </p>

        {/* Carousel */}
        <div className={`${styles.carousel} overflow-hidden`}>
          <div
            className={`${styles.cardWrapper} flex transition-transform duration-500`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {companies.map((company, index) => (
              <div key={index} className={`${styles.card} flex-shrink-0 mx-2`}>
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
