import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const IIPC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Industry Institute Partnership Cell | Trident Academy of Technology">
      {/* Background Image Section with Improved Contrast */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/IIPC.jpg')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Industry Institute Partnership Cell (IIPC)
        </h1>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8 mb-8">
        <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/training" className="hover:underline">
              Training
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">IIPC</li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[10px] sm:mt-[20px] lg:mt-[40px] mb-16">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-4 rounded-lg shadow-md">
          {/* Hamburger Icon for Mobile View */}
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
              ></path>
            </svg>
            <span className="ml-2 text-lg font-medium">IIPC Menu</span>
          </button>

          <div
            className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
          >
            <h2 className="text-2xl font-semibold mb-6">IIPC Menu</h2>
            <ul className="space-y-3">
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/iipc-industrial-visits">Industrial Visits</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/iipc-mous">Industry MOUs</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/iipc-internships">Internship Program</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/iipc-certifications">Industry Certification</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/cisco-ASC-ITC">Cisco ASC & ITC</Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Introduction</h2>
              <p>
                The Industry Institute Partnership Cell (IIPC) at Trident Academy of Technology aims to enhance the collaboration between the institute and various industries. It works towards creating opportunities for students and promoting research, development, and training programs that meet the needs of the industry.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Objectives</h2>
              <p>
                The main objectives of the IIPC include fostering strong industry connections, aligning academic curricula with industry needs, and facilitating internship opportunities for students.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Industrial Visits</h2>
              <p>
                The IIPC regularly organizes industrial visits to provide students with real-world exposure to the latest technologies and trends in various industries.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Industry MOUs</h2>
              <p>
                We have established several industry collaborations through MOUs, which help enhance the academic and practical knowledge of our students.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Internship Program</h2>
              <p>
                Trident Academy has partnered with leading industries like TCS, Honeywell, and NTPC to offer internship opportunities that allow students to gain hands-on experience and industry exposure.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Industry Certification</h2>
              <p>
                The institute offers various industry certifications, including those from Cisco ASC and ITC, which help students gain specialized skills in high-demand areas.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Notable Internship Partners</h2>
              <p>
                The successful internships have been completed in prestigious organizations such as TCS, SPARC, CSM Technologies, Honeywell, Inland Engineers, NALCO, Paradeep Port Trust, and NTPC.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default IIPC;
