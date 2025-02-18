import React from 'react';
import styles from '../pages/PlacementComponent.module.css';

const testimonials = [
  {
    role: "Student",
    name: "Rohit Kumar",
    testimonial:
      "The placement opportunities at Trident helped me secure my dream job. The hands-on projects and training made all the difference.",
  },
  {
    role: "Recruiter",
    name: "Mr. Rohit Sharma",
    testimonial:
      "We trust Trident’s talent pool. Their students are technically proficient and ready to tackle real-world challenges.",
  },
  {
    role: "Student",
    name: "Nina Sharma",
    testimonial:
      "Thanks to Trident's excellent placement support, I joined a leading tech firm right after graduation. A life-changing experience!",
  },
];

export default function PlacementComponent() {
  return (
    <section className="py-20 bg-white w-full" id="placement">
      <div className="w-full text-center px-4">
        <h2 className="text-4xl font-extrabold mb-4">Training & Placement</h2>
        <p className="text-lg mb-10 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-gray-500 pr-4">
          "Shaping careers through industry-aligned training & global opportunities."
        </p>

        {/* Image Section */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/Trident-Placement-1.jpeg"
            alt="Training and Placement"
            className="w-3/4 md:w-1/2 rounded-lg shadow-lg"
          />
        </div>

        {/* Continuous Scrolling Testimonials */}
        <div className="mt-16 space-y-12">
          <h3 className="text-3xl font-semibold mb-6">What People Say</h3>
          <div className={styles.testimonialWrapper}>
            <div className={styles.testimonialTrack}>
              {testimonials.concat(testimonials).map((t, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <p className="italic text-gray-600">"{t.testimonial}"</p>
                  <p className="font-bold mt-4">{t.name}</p>
                  <p className="text-gray-500">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
