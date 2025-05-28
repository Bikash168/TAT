import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Research() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const sidebarLinks = [
    { name: 'Objective', link: '/research-objective' },
    { name: 'Research Recognition', link: '/research-recognition' },
    { name: 'Research Committee', link: '/research-committee' },
    { name: 'Empowerment', link: '/empowerment' },
    { name: 'Research Linkage', link: '/research-linkage' },
    { name: 'Extramural Funding (TEFR)', link: '/extramural-funding' },
    { name: 'Intramural Funding (TIFR)', link: '/intramural-funding' },
    { name: 'Domain Research Hubs', link: '/domain-research-hubs' },
    { name: 'Patents', link: '/patents' },
    { name: 'Consultancy', link: '/consultancy' },
    { name: 'Research and Consultancy Policy 2013', link: '/research-consultancy-policy-2013' },
    { name: 'Research and Development Policy 2024', link: '/research-development-policy-2024' },
  ];

  return (
    <Layout title="Research | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/Research (2).jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative text-4xl sm:text-5xl font-bold text-white z-10 text-center px-4">
          Research
        </h1>
      </section>

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4 flex items-center text-sm sm:text-base gap-2 mt-4">
        <Link href="/" className="hover:underline text-blue-700">🏠 Home</Link>
        <span>/</span>
        <span className="text-gray-600">Research</span>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-4 rounded-lg shadow-md h-fit">
          <button
            className="lg:hidden text-white mb-4 flex items-center"
            onClick={toggleSidebar}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} w-full`}>
            <ul className="space-y-3">
              {sidebarLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <button className="w-full text-left bg-white text-[#002147] p-3 rounded-lg shadow-md border border-[#002147] hover:bg-[#003652] hover:text-white transition duration-300">
                      {item.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-12">
          {/* Section 1 */}
          <motion.section
            className="flex flex-col md:flex-row items-center rounded-xl shadow-lg overflow-hidden bg-gray-50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#f5f8fa] w-full md:w-1/2 h-full">
              <img
                src="/images/research-hubs.jpg"
                alt="Research"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative p-6 md:w-1/2 text-gray-700">
              {/* Yellow Blob Design Element on the Right */}
              <div className="absolute bg-yellow-400 rounded-bl-[150px] rounded-tl-full h-[350px] w-[350px] -right-10 top-0 z-0 opacity-20 blur-2xl"></div>

              <h2 className="text-2xl font-semibold mb-3 text-[#002147] relative z-10">Research at Trident</h2>
              <p className="text-lg text-justify relative z-10">
                Trident Academy of Technology is dedicated to advancing research by providing modern facilities and a collaborative environment for students and faculty. Research activities span multiple disciplines, focusing on engineering, technology, and applied sciences. Trident encourages innovative projects that address industry needs and societal challenges, ensuring that research outcomes contribute to technological growth and practical solutions.
              </p>
            </div>

          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center rounded-xl shadow-lg overflow-hidden bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#eef3f9] w-full md:w-1/2 h-full">
              <img
                src="/images/research2.jpg"
                alt="Research Vision"
                className="w-full h-full object-contain max-h-[500px] p-4"
              />
            </div>
            <div className="relative p-6 md:w-1/2 text-gray-700">
              {/* Optional Yellow Blob Design Element on the Right */}
              <div className="absolute bg-yellow-400 rounded-bl-[150px] rounded-tl-full h-[350px] w-[350px] -right-10 top-0 z-0 opacity-20 blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-1 text-[#002147]">Our Vision</h3>
                <p className="text-lg mb-3 text-justify">
                  To develop a research-driven atmosphere where students and faculty explore new ideas, create solutions, and contribute to technological and social progress.
                </p>

                <h3 className="text-xl font-semibold mb-1 text-[#002147]">Our Mission</h3>
                <p className="text-lg text-justify">
                  To provide a strong foundation for research by offering modern facilities and continuous support. To encourage meaningful projects that address real challenges and promote collaboration across different disciplines. To contribute to knowledge through impactful research publications and prepare skilled individuals for science, industry, and society.
                </p>
              </div>
            </div>

          </motion.section>

          {/* Section 3 */}
          <motion.section
            className="flex flex-col md:flex-row items-center rounded-xl shadow-lg overflow-hidden bg-gray-50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#f0f5f7] w-full md:w-1/2 h-full">
              <img
                src="/images/Research22.jpg"
                alt="Research Initiatives"
                className="w-full h-full object-contain max-h-[500px] p-4"
              />
            </div>
            <div className="relative p-6 md:w-1/2 text-gray-700">
              {/* Yellow Blob Design Element on the Right */}
              <div className="absolute bg-yellow-400 rounded-bl-[150px] rounded-tl-full h-[350px] w-[350px] -right-10 top-0 z-0 opacity-20 blur-2xl"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-3 text-[#002147]">
                  Advancing Research and Innovation at Trident
                </h2>
                <p className="text-lg mb-3 text-justify">
                  Trident Research fosters collaboration across disciplines to inspire innovation among students and faculty. The focus is on developing solutions that address industrial and societal challenges while contributing to emerging fields.
                </p>
                <p className="text-lg text-justify">
                  The institute supports research through initiatives like IEDC activities, student technical clubs, and funding programs. Faculty and students are encouraged to engage in national and international conferences, promoting knowledge exchange and academic recognition.
                </p>
              </div>
            </div>

          </motion.section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
