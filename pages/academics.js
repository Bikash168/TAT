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
              className="lg:hidden text-white mt-10" 
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
            {/* Academic Advisory Board Section */}
            <section id="academic-advisory-board" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Academic Advisory Board</h2>
              <p className="text-lg text-gray-700">
                The Academic Advisory Board plays a vital role in shaping the academic policies, curricula, and ensuring the overall academic quality of the institution. The board consists of experienced academic professionals and experts from various domains.
              </p>
            </section>

            {/* Academic Monitoring Council Section */}
            <section id="academic-monitoring-council" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Academic Monitoring Council</h2>
              <p className="text-lg text-gray-700">
                The Academic Monitoring Council regularly evaluates the academic performance of students, faculty, and departments to ensure that the institution maintains high standards of education and learning.
              </p>
            </section>

            {/* Peer Evaluation Section */}
            <section id="peer-evaluation" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Peer Evaluation</h2>
              <p className="text-lg text-gray-700">
                The institution implements a peer evaluation system to assess both student performance and faculty teaching effectiveness. This feedback is used to improve academic standards and teaching methods.
              </p>
            </section>

            {/* Chapters Section */}
            <section id="chapters" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Chapters</h2>
              <p className="text-lg text-gray-700">
                Various academic and professional chapters are maintained within the institution to foster student involvement in extracurricular and co-curricular activities, as well as to encourage knowledge sharing and leadership.
              </p>
            </section>

            {/* Programme & Course Outcomes Section */}
            <section id="programme-course-outcomes" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Programme & Course Outcomes</h2>
              <p className="text-lg text-gray-700">
                Each program and course offered by the institution is designed to meet specific outcomes that contribute to the holistic development of students. These outcomes are regularly reviewed and aligned with industry needs.
              </p>
            </section>

            {/* Calendar Section */}
            <section id="calendar" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Calendar</h2>
              <p className="text-lg text-gray-700">
                The academic calendar of the institution includes important dates such as the start and end of semesters, holidays, exam schedules, and other academic events to ensure smooth academic operations.
              </p>
            </section>

            {/* Time Table Section */}
            <section id="time-table" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">Time Table</h2>
              <p className="text-lg text-gray-700">
                A well-structured time table is provided to all students at the beginning of each semester, ensuring that students are aware of their class schedules and academic requirements.
              </p>
            </section>

            {/* BPUT Regulation Section */}
            <section id="bput-regulation" className="mb-12">
              <h2 className="text-3xl font-semibold text-[#002147] mb-6">BPUT Regulation</h2>
              <p className="text-lg text-gray-700">
                The institution adheres to the guidelines and regulations set by Biju Patnaik University of Technology (BPUT), ensuring that all academic policies and procedures are in line with the university's standards and requirements.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer /> {/* Footer is here */}
    </Layout>
  );
};

export default Academics;
