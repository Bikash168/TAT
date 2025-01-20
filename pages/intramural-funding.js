import React, { useState } from 'react'; // Add this import
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

function IntramuralFundingPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Intramural Funding (TIFR) | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/research-committee.jpg')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Intramural Funding (TIFR)
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
          <li className="text-gray-600">Intramural Funding (TIFR)</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[1px] sm:mt-[10px] lg:mt-[15px] mb-16">
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
            <h2 className="text-2xl font-semibold mb-6">Research Menu</h2>
            <ul className="space-y-3">
              {/* New items added to the sidebar */}

              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/ongoing-staff-research">Ongoing Staff Research</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/ongoing-student-research">Ongoing Student Research</Link>
              </li>
              <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                <Link href="/call-for-proposals">Call for Proposals</Link>
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
              Trident Academy of Technology offers the Trident Intramural Funded Research (TIFR) Scheme to support and promote advanced research across various disciplines. This scheme is designed to foster a culture of innovation and provide financial backing to research projects led by faculty and students.
            </p>
          </section>

          <section id="download-forms" className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Links to Downloadable Forms</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/TIFR-Sheme-Research-Project-Proposal-Terms-Conditions.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  <span className="font-bold">Terms and Conditions</span> for availing project funding under TIFR Scheme
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/TIFR-Scheme-Format-for-submission-of-Utilization-Certificate-against-Research-Funding.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  Utilization Certificate Format for funding under TIFR Scheme
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/TIFR-Scheme-Format-for-submission-of-Final-Project-Report.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  Template for Final Project Report upon completion of Project funded under TIFR Scheme
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <Link href="/pdfs/TIFR-Scheme-Billwise-detailed-statement-of-expenditure.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                  Bill wise Detailed Statement of Expenditure of Grant Money received under TIFR Scheme
                </Link>
              </li>
            </ul>
          </section>

        </div>
      </main>

      <Footer />
    </Layout>
  );
}

export default IntramuralFundingPage;
