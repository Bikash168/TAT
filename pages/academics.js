import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const Academics = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Academics | Trident Academy of Technology">
      {/* Background Image Section with Improved Contrast */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/Academics.jpg')", // Ensure the path is correct
        }}
      >
        {/* Overlay for better visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Title Section */}
        <h1 className="relative text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Academics
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
            Academics
          </li>

        </ul>
      </nav>
      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[1 px] sm:mt-[2.5px] lg:mt-[5px] mb-16">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-4 rounded-lg shadow-md">


          {/* Hamburger Icon for Mobile View */}
          <button
            className="lg:hidden text-white mb-1 flex items-center"
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

          </button>

          <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
            <ul className="space-y-3">
              {[
                { name: 'Departments', link: '/departments' },
                { name: 'Learning Resources', link: '/learning-resources' },
                { name: 'Academic Advisory Board', link: '/academic-advisory-board' },
                { name: 'Academic Monitoring Council', link: '/academic-monitoring-council' },
                { name: 'Peer Evaluation', link: '/peer-evaluation' },
                { name: 'Chapters', link: '/chapters' },
                { name: 'Programme & Course Outcomes', link: '/programme-course-outcomes' },
                { name: 'Calendar', link: '/calendar' },
                { name: 'Time Table', link: '/time-table' },
                { name: 'BPUT Regulation', link: '/bput-regulation' }
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
        <div className="w-full lg:w-3/4 space-y-12">
          {/* Main Content */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-lg">

              <p class="text-lg text-justify">
                Trident Academy of Technology offers a well-planned education system that helps students gain knowledge, develop skills, and prepare for their careers. With undergraduate and postgraduate programs across various fields, the curriculum is designed to provide both theoretical understanding and practical experience. Students are encouraged to think critically, communicate effectively, and apply their learning to real-world situations.              </p>
            </div>
            <div class="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
              <p class="text-lg text-justify">
                Trident focuses on making learning engaging and useful. Instead of relying only on textbooks, students participate in projects, research, and industry-based training. Modern labs, expert faculty, and hands-on activities create an environment where students can explore new ideas and improve their problem-solving abilities. Internship opportunities and skill-building sessions further enhance their professional growth.  </p>
            </div>
            <div class="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
              <p class="text-lg text-justify">
                Education at Trident goes beyond academics. The aim is to help students become capable professionals who can adapt to challenges and contribute meaningfully to their fields. With a focus on industry trends and emerging technologies, Trident ensures that graduates are well-equipped for a successful future. </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default Academics;
