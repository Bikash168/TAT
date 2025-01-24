import React from 'react';
import styles from '../pages/PlacementComponent.module.css';

const companies = [
  { name: "Mindtree", image: "/images/mindtree.png" },
  { name: "Mindfire", image: "/images/mindfire.webp" },
  { name: "Infosys", image: "/images/infosys-logo.jpg" },
  { name: "Tata Consultancy Services", image: "/images/TCS-Logo.png" },
  { name: "Accenture", image: "/images/Accenture-logo.png" },
];

const testimonials = [
  {
    role: "Student",
    name: "Aarav Kumar",
    testimonial: "The placement opportunities at Trident helped me secure my dream job. The hands-on projects and training made all the difference.",
  },
  {
    role: "Student",
    name: "Aarav Kumar",
    testimonial: "The placement opportunities at Trident helped me secure my dream job. The hands-on projects and training made all the difference.",
  },
  {
    role: "Recruiter",
    name: "Mr. Rohit Sharma",
    testimonial: "We trust Trident’s talent pool. Their students are not only technically proficient but also prepared to handle real-world challenges.",
  },
  {
    role: "Recruiter",
    name: "Mr. Rohit Sharma",
    testimonial: "We trust Trident’s talent pool. Their students are not only technically proficient but also prepared to handle real-world challenges.",
  },
  {
    role: "Student",
    name: "Nina Sharma",
    testimonial: "Thanks to Trident's excellent placement support, I was able to join a leading tech firm right after graduation. The experience was life-changing.",
  },
  {
    role: "Recruiter",
    name: "Ms. Priya Gupta",
    testimonial: "Trident students are always ready to tackle challenges and adapt quickly. We have seen great success in hiring from this institution.",
  },
];

export default function PlacementComponent() {
  return (
    <section className="py-20 bg-white" id="placement">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Top Recruiters</h2>
        <p className="text-lg mb-10">
          Meet the top recruiters who trust our talent. Our students are placed with leading companies, shaping successful careers worldwide.
        </p>

        {/* Continuous Carousel for Companies */}
        <div className={styles.carousel}>
          <div className={styles.cardWrapper}>
            {companies.map((company, index) => (
              <div key={index} className={`${styles.card} hover:scale-110 transition-transform duration-300`}>
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-50 object-contain mx-auto rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                />
              </div>
            ))}
            {/* Duplicate the content for seamless looping */}
            {companies.map((company, index) => (
              <div key={`dup-${index}`} className={`${styles.card} hover:scale-110 transition-transform duration-300`}>
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-24 object-contain mx-auto rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                />

              </div>
            ))}
          </div>
        </div>

        {/* Students' Viewpoint - Carousel */}
        <div className="mt-16 space-y-12">
          <h3 className="text-3xl font-semibold mb-6">What Our Students Say</h3>
          <div className={styles.testimonialWrapper}>
            <div className={styles.testimonialCardWrapper}>
              {testimonials
                .filter((t) => t.role === "Student")
                .map((testimonial, index) => (
                  <div key={index} className={styles.testimonialCard}>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                      <p className="italic text-gray-600">"{testimonial.testimonial}"</p>
                      <p className="font-bold mt-4">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              {/* Duplicate the content for seamless looping */}
              {testimonials
                .filter((t) => t.role === "Student")
                .map((testimonial, index) => (
                  <div key={`dup-${index}`} className={styles.testimonialCard}>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                      <p className="italic text-gray-600">"{testimonial.testimonial}"</p>
                      <p className="font-bold mt-4">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Recruiters' Viewpoint - Carousel */}
        <div className="mt-16 space-y-12">
          <h3 className="text-3xl font-semibold mb-6">What Our Recruiters Say</h3>
          <div className={styles.testimonialWrapper}>
            <div className={styles.testimonialCardWrapper}>
              {testimonials
                .filter((t) => t.role === "Recruiter")
                .map((testimonial, index) => (
                  <div key={index} className={styles.testimonialCard}>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                      <p className="italic text-gray-600">"{testimonial.testimonial}"</p>
                      <p className="font-bold mt-4">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              {/* Duplicate the content for seamless looping */}
              {testimonials
                .filter((t) => t.role === "Recruiter")
                .map((testimonial, index) => (
                  <div key={`dup-${index}`} className={styles.testimonialCard}>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                      <p className="italic text-gray-600">"{testimonial.testimonial}"</p>
                      <p className="font-bold mt-4">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

