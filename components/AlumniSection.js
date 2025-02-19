import React from 'react';
import styles from '../pages/PlacementComponent.module.css';

const alumniTestimonials = [
  {
    role: "Alumnus",
    name: "Aarav Patel",
    testimonial:
      "Trident helped me land my dream job, providing the skills and network to thrive in my career.",
  },
  {
    role: "Alumna",
    name: "Saanvi Gupta",
    testimonial:
      "The support from the alumni network has been incredible, guiding me every step of my journey.",
  },
  {
    role: "Alumnus",
    name: "Vikram Singh",
    testimonial:
      "Joining Trident was a turning point in my life. The training and mentorship prepared me for success.",
  },
];

export default function HighlightSection() {
  return (
    <section id="alumni" className="py-16 w-full relative overflow-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #ddd, #ddd 2px, transparent 2px, transparent 6px)",
        backgroundSize: "10px 10px",
        opacity: 0.9,
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300 opacity-30 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto overflow-hidden rounded-lg shadow-xl bg-white relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch min-h-[500px]">
          {/* Image Section */}
          <div className="w-full bg-black">
            <img
              src="/images/ALUMNI12.jpg"
              alt="TAT Alumni"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          
          {/* Testimonial Section */}
          <div className="w-full flex flex-col justify-center px-10 py-12 bg-gradient-to-br from-orange-500 to-red-600 text-white">
            <blockquote className="text-3xl font-extrabold leading-tight italic mb-6">
              "At TAT, our alumni lead with passion and innovation, forging paths that transform industries and communities around the world."
            </blockquote>
            <p className="text-lg font-semibold mb-8 opacity-90">
              — The TAT Alumni Community
            </p>
          </div>
          
          {/* Link & Testimonials */}
          <div className="w-full bg-white flex flex-col justify-center px-8 py-12">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900 text-center">What Alumni Say</h3>
            <div className={styles.testimonialWrapper}>
              <div className={styles.testimonialTrack}>
                {alumniTestimonials.concat(alumniTestimonials).map((t, index) => (
                  <div key={index} className={styles.testimonialCard}>
                    <p className="italic text-gray-600">"{t.testimonial}"</p>
                    <p className="font-bold mt-4 text-blue-700">{t.name}</p>
                    <p className="text-gray-500">{t.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition transform hover:scale-105"
              >
                Discover Their Stories <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="h-2 bg-gradient-to-br from-orange-500 to-red-600 w-full mt-6"></div>
      </div>
    </section>
  );
}