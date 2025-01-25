import React from 'react';
import styles from '../pages/PlacementComponent.module.css';

const companies = [
  { name: "Mindtree", image: "/images/mindtree.png" },
  { name: "Mindfire", image: "/images/mindfire.webp" },
  { name: "Infosys", image: "/images/infosys-logo.jpg" },
  { name: "TCS", image: "/images/TCS-Logo.png" },
  { name: "Accenture", image: "/images/Accenture-logo.png" },
];

const testimonials = [
  {
    role: "Student",
    name: "Rohit Kumar",
    testimonial: "The placement opportunities at Trident helped me secure my dream job. The hands-on projects and training made all the difference.",
  },
  {
    role: "Recruiter",
    name: "Mr. Rohit Sharma",
    testimonial: "We trust Trident’s talent pool. Their students are technically proficient and ready to tackle real-world challenges.",
  },
  {
    role: "Student",
    name: "Nina Sharma",
    testimonial: "Thanks to Trident's excellent placement support, I joined a leading tech firm right after graduation. A life-changing experience!",
  },
];

export default function PlacementComponent() {
  return (
    <section className="py-20 bg-white w-full" id="placement">
      <div className="w-full text-center px-4">
        <h2 className="text-4xl font-extrabold mb-4">Top Recruiters</h2>
        <p className="text-lg mb-10">
          Meet the top recruiters who trust our talent. Our students are placed with leading companies, shaping successful careers worldwide.
        </p>

        {/* Continuous Carousel for Companies */}
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            {companies.map((company, index) => (
              <div key={index} className={styles.carouselItem}>
                <img
                  src={company.image}
                  alt={`${company.name} logo`}
                  className="w-full h-full object-contain mx-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-6">What People Say</h3>
          <div className={styles.testimonialWrapper}>
            <div className={styles.testimonialCardWrapper}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <p className="italic text-gray-600">"{testimonial.testimonial}"</p>
                  <p className="font-bold mt-4">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
