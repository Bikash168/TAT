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
      <main className="flex container mx-auto px-4 lg:px-16 my-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
          {/* Sidebar Menu (Mobile Toggle) */}
          <div className="lg:w-1/4 w-full bg-[#002147] text-white p-6 rounded-lg shadow-md lg:block">
            {/* Hamburger Icon for Mobile View */}
            <button 
              className="lg:hidden text-white" 
              onClick={toggleSidebar}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            {/* Sidebar Menu */}
            <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
              <h2 className="text-2xl font-semibold text-white mb-6">Academics Menu</h2>
              <ul className="mt-6 space-y-3">
                {[
                  { name: 'Departments', link: '#departments' },
                  { name: 'Learning Resources', link: '#learning-resources' },
                  { name: 'Academic Advisory Board', link: '#academic-advisory-board' },
                  { name: 'Academic Monitoring Council', link: '#academic-monitoring-council' },
                  { name: 'Peer Evaluation', link: '#peer-evaluation' },
                  { name: 'Chapters', link: '#chapters' },
                  { name: 'Programme & Course Outcomes', link: '#programme-course-outcomes' },
                  { name: 'Calendar', link: '#calendar' },
                  { name: 'Time Table', link: '#time-table' },
                  { name: 'BPUT Regulation', link: '#bput-regulation' },
                ].map((item) => (
                  <li key={item.name} className="hover:bg-[#004D73] p-2 rounded-lg transition">
                    <Link href={item.link} className="text-white hover:text-[#A8C7E6]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 pl-6">
            {/* Departments Section */}
            <section id="departments" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Departments</h2>
              <p className="text-lg text-gray-700">
                The institution offers a wide range of departments across multiple fields such as Engineering, Management, and Biotechnology, providing students with the knowledge and skills necessary to excel in their respective fields.
              </p>
            </section>

            {/* Learning Resources Section */}
            <section id="learning-resources" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Learning Resources</h2>
              <p className="text-lg text-gray-700">
                The institution is equipped with cutting-edge learning resources such as state-of-the-art laboratories, a comprehensive library, e-learning tools, and online resources to support students' academic journey.
              </p>
            </section>

            {/* Additional sections go here */}
          </div>
        </div>
      </main>
      <Footer /> {/* Footer is here */}
    </Layout>
  );
};

export default Academics;
