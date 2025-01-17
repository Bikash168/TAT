import React, { useState } from 'react'; // Add this import
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

function DomainResearchHubsPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Domain Research Hubs | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/research-hubs.jpg')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
          Domain Research Hubs
        </h1>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-10">
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
          <li className="text-gray-600">Domain Research Hubs</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[20px] sm:mt-[40px] lg:mt-[60px] mb-16">
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
              ></path>
            </svg>
            <span className="ml-2 text-lg font-medium">Menu</span>
          </button>

          <div
            className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
          >
            <h2 className="text-2xl font-semibold mb-6">Research Hubs Menu</h2>
            <ul className="space-y-3">
              {/* New items added to the sidebar */}
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/mems-nano-center">MEMS & Nano Center</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/energy-center">Energy Center</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/data-science-center">Data-Science Center</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/iot-wsn-center">IoT & WSN Center</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/cisco-thingqbator">CISCO thingQbator</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/microchip">MICROCHIP</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/pcb-prototyping">PCB Prototyping and Design Lab</Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-12">
          {/* Sections */}
          <section id="introduction" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Introduction</h2>
            <p className="text-lg text-gray-700">
              Trident Academy of Technology is dedicated to providing students with access to world-class research opportunities through its Domain Research Hubs (DRH). These hubs focus on diverse cutting-edge research areas, empowering students to enhance their academic, personal, and professional growth.
            </p>
          </section>

          <section id="research-hubs" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Research Hubs</h2>
            <p className="text-lg text-gray-700">
              Our DRH program comprises several specialized centers dedicated to advancing research in their respective domains. Below are the various hubs that make significant contributions to both academic and industry advancements:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li><Link href="/mems-nano-center">MEMS & Nano Center</Link></li>
              <li><Link href="/energy-center">Energy Center</Link></li>
              <li><Link href="/data-science-center">Data-Science Center</Link></li>
              <li><Link href="/iot-wsn-center">IoT & WSN Center</Link></li>
              <li><Link href="/cisco-thingqbator">CISCO thingQbator</Link></li>
              <li><Link href="/microchip">MICROCHIP</Link></li>
              <li><Link href="/pcb-prototyping">PCB Prototyping and Design Lab</Link></li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}

export default DomainResearchHubsPage;
