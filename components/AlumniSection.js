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
    <section id="alumni" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white relative">
        {/* Alumni Highlight Section */}
        <div className="flex flex-col md:flex-row items-stretch min-h-[400px]">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-16 md:p-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
            <blockquote className="text-2xl md:text-3xl font-extrabold leading-tight italic mb-6">
              "At TAT, our alumni lead with passion and innovation, forging paths that transform industries and communities around the world."
            </blockquote>
            <p className="text-lg font-semibold mb-8 opacity-90">
              — The TAT Alumni Community
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition transform hover:scale-105"
            >
              Discover Their Stories <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 bg-black">
            <img
              src="/images/ALUMNI1.jpg"
              alt="TAT Alumni"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Decorative Line */}
        <div className="h-2 bg-gradient-to-br from-orange-500 to-red-600 w-full mt-6"></div>
      </div>

      {/* Alumni Testimonials Section */}
      <div className="w-full text-center px-4 mt-16">
        <h3 className="text-3xl font-semibold mb-6">What Alumni Say</h3>
        <div className={styles.testimonialWrapper}>
          <div className={styles.testimonialTrack}>
            {alumniTestimonials.concat(alumniTestimonials).map((t, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p className="italic text-gray-600">"{t.testimonial}"</p>
                <p className="font-bold mt-4">{t.name}</p>
                <p className="text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
