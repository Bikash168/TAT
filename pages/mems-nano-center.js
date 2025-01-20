import React, { useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

function MEMSAndNanoCenterPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="MEMS & Nano Center | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/mems-nano-center.jpg')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          MEMS & Nano Center
        </h1>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
        <ul className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/research" className="hover:underline">
              Research
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">MEMS & Nano Center</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 mt-[1px] sm:mt-[10px] lg:mt-[15px] mb-16 min-h-screen">
        {/* Content Area */}
        <div className="w-full lg:w-3/4 space-y-12">
          {/* Sections */}
          <section id="introduction" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Introduction</h2>
            <p className="text-lg text-gray-700">
              A National MEMS Design Centre (NMDC) has been established at Trident Academy of Technology, Bhubaneswar, in collaboration with IISc Bangalore under the NPMASS Program in 2012. It is one of the proud institutions in eastern India with a National MEMS Design Centre for research in MEMS and Nanotechnology.
            </p>
          </section>

          <section id="team" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Team Members</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Sakuntala Mahapatra, Co-ordinator - Professor & HOD, Dept. of ETC</li>
              <li>Saswati Panda, Member - Associate Professor, Physics</li>
              <li>Mohammed Ali, Member - Asst. Professor, ETC</li>
              <li>Swetashree Patnaik, Member - Asst. Professor, Chemistry</li>
              <li>Tanmaya Kumar Das, Member - Asst. Professor, ETC</li>
              <li>Millee Panigrahi, Member - Asst. Professor, ETC</li>
              <li>Minu Samantary, Member - Asst. Professor, ETC</li>
            </ul>
          </section>

          <section id="facilities" className="space-y-4 bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Facilities Available</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>10 Nos. of fully upgraded advanced systems.</li>
              <li>Perpetual licensed software such as COMSOL, Coventorware, Intellisuite provided by IISc Bangalore.</li>
              <li>Full licensed version of MATLAB.</li>
              <li>Exclusive space for the National MEMS Design Centre for research in MEMS & Nanotechnology.</li>
            </ul>
          </section>

          <section id="links" className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Useful Links</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/Publications-from-Centre.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  Publications from Centre
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/Training-Conferences.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  Training/Conferences
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/ISSS-Student-Awards.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  ISSS-Student Awards
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/Poster-Presentations.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  Poster Presentations
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/IEDC-Funded-Projects.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  IEDC Funded Projects
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/BTech-MEMS-Projects.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  B.Tech. MEMS Projects
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/Seminars-Workshops.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  Seminars/Workshops
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </Layout>
  );
}

export default MEMSAndNanoCenterPage;
