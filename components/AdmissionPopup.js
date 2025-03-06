import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-show the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
    >
      <div className="relative bg-white p-6 rounded-xl shadow-xl border-4 border-gray-200 max-w-md text-center">
        {/* Close Button Positioned Above */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-5 right-3 w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:text-red-500 hover:border-red-500 transition bg-white shadow-md"
        >
          ✕
        </button>

        {/* Image with Bordered Section */}
        <div className="border-b border-gray-300 pb-4 mb-4 rounded-lg overflow-hidden">
          <Image
            src="/images/student-development1.jpg"
            alt="Admissions Open"
            width={400}
            height={250}
            className="w-full rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-bold text-blue-700 mb-3">Admissions Open!</h2>
        <p className="text-gray-700">
          Enroll now for the upcoming academic session. Explore our courses and start your journey today.
        </p>

        <div className="mt-6">
          <a
            href="/admission"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            Apply Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
