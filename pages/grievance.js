// pages/grievance.js
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Grievance() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Grievance Redressal | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/grievance-hero4.webp')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Grievance Redressal System
        </h1>
      </section>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6 ">
        <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">
            Grievance
          </li>

        </ul>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[1 px] sm:mt-[2.5px] lg:mt-[5px] mb-16">
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
            <span className="ml-2 text-lg font-medium">Grievance Menu</span>
          </button>

          <div
            className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}
          >
            <h2 className="text-2xl font-semibold mb-6">Grievance Redressal Menu</h2>
            <ul className="space-y-3">
              {[
                { name: 'General', link: '/general' },
                { name: 'Women', link: '/women' },
                { name: 'SC/ST', link: '/scst' }
              ].map((item) => (
                <li key={item.name} className="hover:bg-[#004D73] p-2 rounded-lg transition">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="w-full lg:w-3/4 lg:pl-6">
          {/* Grievance Redressal Forums Section */}
          <section id="general" className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Grievance Redressal Forums</h2>
            <p className="text-lg text-gray-700 mb-6">
              TAT has framed three Grievance Redressal Forums to provide easy and accessible mechanisms for the prompt disposal of grievances from specific community segments.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#002147]">General Grievance Redressal Committee (G-GRC)</h3>
                <p className="text-lg text-gray-700">
                  This forum addresses grievances and issues that do not fall under the specific categories of Women and SC/ST Grievance Redressal Committees.
                </p>
              </div>
              <div id="women">
                <h3 className="text-2xl font-semibold text-[#002147]">Women Grievance Redressal Committee (W-GRC)</h3>
                <p className="text-lg text-gray-700">
                  This forum is dedicated to addressing grievances and issues related to women students and staff members only.
                </p>
              </div>
              <div id="scst">
                <h3 className="text-2xl font-semibold text-[#002147]">SC & ST Grievance Redressal Committee (S-GRC)</h3>
                <p className="text-lg text-gray-700">
                  This forum handles grievances and issues specifically related to the SC & ST community.
                </p>
              </div>
            </div>
          </section>

          {/* Objectives Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Objectives</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <ul className="list-disc pl-6">
                <li>Introduce a fair, impartial, and unbiased mechanism for redressal of various issues.</li>
                <li>Encourage stakeholders to express grievances and issues freely, without fear of victimization.</li>
                <li>Develop a responsive and accountable attitude among stakeholders to maintain a harmonious academic atmosphere.</li>
                <li>Ensure that grievances are resolved promptly, impartially, and with utmost confidentiality.</li>
                <li>Uphold the dignity of the institute by promoting cordial inter-community relationships.</li>
                <li>Advise stakeholders to respect the right and dignity of one another and not act vindictively.</li>
              </ul>
            </div>
          </section>

          {/* Grievance Submission Form */}
          <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Submit Your Grievance</h2>
            <form action="#" method="POST">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Grievance Type Dropdown */}
                <div>
                  <label htmlFor="grievance-type" className="block text-gray-700 font-medium">Grievance Type</label>
                  <select
                    id="grievance-type"
                    name="grievance-type"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled selected>Select Grievance Type</option>
                    <option value="general">General Grievance</option>
                    <option value="women">Women Related Issue</option>
                    <option value="scst">SC & ST Community Issue</option>
                  </select>
                </div>

                {/* Grievance Description */}
                <div>
                  <label htmlFor="grievance-description" className="block text-gray-700 font-medium">Grievance Description</label>
                  <textarea
                    id="grievance-description"
                    name="grievance-description"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Describe your grievance in detail..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Submit Grievance
                  </button>
                </div>
              </div>
            </form>
          </section>

          {/* Contact Information Section */}
          <section className="bg-[#f8fafc] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Contact Information</h2>
            <p className="text-lg text-gray-700 text-center mb-4">
              For any urgent issues, please feel free to reach out directly through the contact details below.
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> <a href="mailto:grievance@tat.ac.in" className="text-blue-500 hover:underline">grievance@tat.ac.in</a>
              </p>
              <p className="text-lg text-gray-700">
                <strong>Phone:</strong> +91 123 456 7890
              </p>
              <p className="text-lg text-gray-700">
                <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
