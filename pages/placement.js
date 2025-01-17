import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const Placement = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Placement | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/Placement.webp')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundSize: "cover",  // Ensures the image covers the entire section
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
          Placement at Trident Academy of Technology
        </h1>
      </section>


      {/* Main Section */}
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
            <span className="ml-2 text-lg font-medium">Placement Menu</span>
          </button>

          <div
            className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
          >
            <h2 className="text-2xl font-semibold mb-6">Placement</h2>
            <ul className="space-y-3">
              {[
                { name: 'The Department', link: '/placement-overview' },
                { name: 'Placement Infrastructure', link: '/placement-infrastructure' },
                { name: 'Alumni Mentoring', link: '/alumni-mentoring' },
                { name: 'Placement Statistics', link: '/placement-statistics' },
                { name: 'Recruiters Speak', link: '/recruiters-speak' },
                { name: 'Placement Notices', link: '/placement-notices' },
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
          {/* Placement Overview Section */}
          <section id="placement-overview" className="mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Placement Overview</h2>
            <p className="text-lg text-gray-700">
              Trident Academy of Technology offers a well-established placement process that assists students in securing excellent job opportunities across industries. Our placement cell provides students with the right guidance and training for career advancement.
            </p>
          </section>

          {/* Placement Infrastructure Section */}
          <section id="placement-infrastructure" className="mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Placement Infrastructure</h2>
            <p className="text-lg text-gray-700">
              Our placement cell is equipped with state-of-the-art infrastructure including interview rooms, presentation facilities, and communication tools to provide a professional recruitment environment.
            </p>
          </section>

          {/* Alumni Mentoring Section */}
          <section id="alumni-mentoring" className="mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Alumni Mentoring</h2>
            <p className="text-lg text-gray-700">
              Our alumni network plays a key role in mentoring current students. Alumni offer valuable insights into industry trends and help students prepare for interviews.
            </p>
          </section>

          {/* Placement Statistics Section */}
          <section id="placement-statistics" className="mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Placement Statistics</h2>
            <p className="text-lg text-gray-700">
              Over the years, our placement records have been excellent. A significant percentage of our students are placed annually with top-tier organizations.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-[#002147]">2023 Placements</h3>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
                  <li>95% of eligible students placed</li>
                  <li>Average salary package: ₹6.5 LPA</li>
                  <li>Top recruiters: Infosys, TCS, Wipro, Cognizant, etc.</li>
                </ul>
              </div>
              <div className="bg-[#f8fafc] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-[#002147]">Placement Trends</h3>
                <p className="text-lg text-gray-700 mt-4">
                  The placement trends have been consistently improving with greater participation from national and international companies.
                </p>
              </div>
            </div>
          </section>

          {/* Recruiters Speak Section */}
          <section id="recruiters-speak" className="mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Recruiters Speak</h2>
            <p className="text-lg text-gray-700">
              Our recruiters consistently express satisfaction with the quality of Trident graduates. Many companies return year after year to recruit from our campus.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
              <h3 className="text-2xl font-semibold text-[#002147]">Testimonial from a Recruiter</h3>
              <blockquote className="text-lg text-gray-700 mt-4 italic">
                "We have been recruiting from Trident Academy for several years now, and the quality of students has been consistently exceptional. Their technical and soft skills make them valuable assets in any organization." – XYZ Corporation
              </blockquote>
            </div>
          </section>

          {/* Placement Notices Section */}
          <section id="placement-notices" className="mb-12">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Placement Notices</h2>
            <p className="text-lg text-gray-700">
              The Placement Cell regularly publishes notices related to placement drives, job openings, and other events. Check the latest notices for updates.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
              <li>Notice 1: Upcoming Campus Drive for Infosys – 5th January 2024</li>
              <li>Notice 2: Training on Soft Skills – 12th January 2024</li>
              <li>Notice 3: Placement Registration for 2024 Batch – 15th January 2024</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default Placement;
