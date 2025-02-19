import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Admissions Open!</h2>
        <p className="text-gray-700">
          Enroll now for the upcoming academic session. Explore our courses and start your journey today.
        </p>
        <a
          href="/admissions"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Apply Now
        </a>
      </div>
    </motion.div>
  );
}
