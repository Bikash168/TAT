import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from "framer-motion";

const Facilities = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Facilities | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/Facilities1.png')",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Facilities at Trident Academy of Technology
        </h1>
      </section>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
        <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Facilities</li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-4 rounded-lg shadow-md">
          <button
            className="lg:hidden text-white mb-2 flex items-center"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
            <ul className="space-y-3">
              {[
                { name: 'Infrastructure', link: '/infrastructure' },
                { name: 'Hostels', link: '/hostels' },
                { name: 'Transport', link: '/transport' },
                { name: 'Food Centers', link: '/food-centers' },
                { name: 'Healthcare', link: '/healthcare' },
                { name: 'Power Backups', link: '/power-backups' },
                { name: 'Water Quality', link: '/water-quality' },
                { name: 'Internet and WiFi', link: '/internet-wifi' },
                { name: 'Sanitations', link: '/sanitations' },
                { name: 'Campus Security', link: '/campus-security' },
                { name: 'Scholarships', link: '/scholarships' },
                { name: 'ICT Enabled Classroom', link: '/ict-enabled-classroom' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <button className="w-full text-left bg-white text-[#002147] p-3 rounded-lg transition duration-300 ease-in-out shadow-md border border-[#002147] hover:bg-[#003652] hover:text-white hover:shadow-lg">
                      {item.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 mx-auto space-y-6">
          {/* Section 1 */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg text-gray-700">
              Trident Academy of Technology provides a well-equipped campus to support education, research, and professional development. Classrooms are designed for interactive learning, and laboratories follow AICTE standards, ensuring students gain practical knowledge through hands-on experience. The library includes a vast collection of books, journals, and digital resources to aid research and self-learning.
            </p>
            <img
              src="/images/infrastructure.jpg"
              alt="Infrastructure"
              className="mt-4 rounded-lg w-full object-cover max-h-[300px]"
            />
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-lg text-gray-700">
              Dedicated facilities for engineering and management programs provide students with specialized learning environments. Computer labs with high-speed internet offer access to software tools essential for programming, data analysis, and project work. Workshop areas and research centers encourage innovation, while regular assessments help upgrade infrastructure to meet academic and industry demands.
            </p>
            <img
              src="/images/hostel.jpg"
              alt="Hostels"
              className="mt-4 rounded-lg w-full object-cover max-h-[300px]"
            />
          </motion.div>

          {/* Section 3 */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-lg text-gray-700">
              Seminar halls and conference rooms host lectures, technical sessions, and industry interactions. On-campus hostel facilities ensure a comfortable stay for students, with necessary amenities for study and daily activities. Transportation services provide easy access to the campus. Continuous improvements in infrastructure support the evolving needs of students and faculty, ensuring a well-rounded educational experience.
            </p>
            <img
              src="/images/transportation.png"
              alt="Transport"
              className="mt-4 rounded-lg w-full object-cover max-h-[300px]"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default Facilities;
