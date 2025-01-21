import React, { useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

function DataScienceCenterPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Data Science Center | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/data-science-center.jpg')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Data Science Center
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
          <li>
            <Link href="/domain-research-hubs" className="hover:underline">
              Domain Research Hubs
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Data Science Center</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[1px] sm:mt-[2.5px] lg:mt-[5px] mb-16">
        {/* Content Area */}
        <div className="w-full lg:w-4/4 space-y-12">
          {/* Sections */}
          <section id="introduction" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Introduction</h2>
            <p className="text-lg text-gray-700">
              The Data Science Center, promoted by the Department of Computer Science & Engineering, serves as a hub for interdisciplinary research in the fields of big data analytics, cloud computing, and computational techniques. The center enables students and researchers to delve into data retrieval and transaction processes among remote repositories and sources, with a focus on real-world applications.
            </p>
            <p className="text-lg text-gray-700">
              Recent research focuses on Big Data Analytics and its applications in various domains, enhancing practical understanding and fostering innovation.
            </p>
          </section>

          <section id="contact" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Contact Person</h2>
            <p className="text-lg text-gray-700">
              <strong>Dr. Amarendra Kumar Baral</strong><br />
              Professor & Head<br />
              Department of Mathematics
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </Layout>
  );
}

export default DataScienceCenterPage;
