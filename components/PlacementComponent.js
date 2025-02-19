import React from 'react';
import styles from '../pages/PlacementComponent.module.css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    role: "Recruiter",
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
    role: "Recruiter",
    name: "Nina Sharma",
    testimonial:
      "Thanks to Trident's excellent placement support, I joined a leading tech firm right after graduation. A life-changing experience!",
  },
];

// Animation Variant
const slideInVariant = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function PlacementComponent() {
  return (
    <motion.section
      className="relative py-16 w-full overflow-hidden"
      id="placement"
      initial="hidden"
      animate="visible"
      variants={slideInVariant}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #ddd, #ddd 2px, transparent 2px, transparent 6px)",
        backgroundSize: "10px 10px",
        opacity: 0.9,
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300 opacity-30 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
          Training & Placement
        </h2>
        <p className="text-lg text-center text-gray-700 mb-6">
          "Shaping careers through industry-aligned training & global opportunities."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Image + Write-up */}
          <div className="text-center md:text-left relative">
            <img
              src="/images/Trident-Placement-1.jpeg"
              alt="Training and Placement"
              className="w-full rounded-lg shadow-lg border-4 border-white"
            />
            {/* Decorative Dots */}
            <div className="absolute -top-6 left-6 w-14 h-14 bg-blue-400 opacity-30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 right-6 w-16 h-16 bg-gray-600 opacity-20 rounded-full blur-2xl"></div>
          </div>

          {/* Right Side: Heading, Paragraph & Scrolling Testimonials */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">
              Why Choose Trident for Placements?
            </h3>
            <p className="text-gray-700 mb-6">
              Trident's placement cell ensures that students receive top-notch 
              training and exposure to industry trends. With dedicated mentorship, 
              hands-on learning, and strong recruiter partnerships, our graduates 
              achieve career success worldwide.
            </p>

            <h3 className="text-3xl font-semibold mb-4 text-gray-900">
              Recruiters Speak
            </h3>

            <motion.div
              className={`${styles.testimonialWrapper} relative bg-white p-6 rounded-lg shadow-lg`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.testimonialTrack}>
                {testimonials.concat(testimonials).map((t, index) => (
                  <motion.div
                    key={index}
                    className={`${styles.testimonialCard} p-4 bg-gray-100 rounded-lg shadow-sm`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="italic text-gray-600">"{t.testimonial}"</p>
                    <p className="font-bold mt-4 text-blue-700">{t.name}</p>
                    <p className="text-gray-500">{t.role}</p>
                  </motion.div>
                ))}
              </div>
              {/* Floating Dots */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-500 opacity-30 rounded-full blur-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
