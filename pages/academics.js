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
      {/* Background Image Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Academics.jpg')", // Replace with your image path
        }}
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Title */}
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
          Academics
        </h1>
      </section>

      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-6 rounded-lg shadow-md">
          {/* Hamburger Icon for Mobile View */}
          <button
            className="lg:hidden text-white mb-4 flex items-center"
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
            <h2 className="text-2xl font-semibold mb-6">Academics Menu</h2>
            <ul className="space-y-3">
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
                <li
                  key={item.name}
                  className="hover:bg-[#004D73] p-2 rounded-lg transition"
                >
                  <Link href={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-12">
          {/* Dynamic Sections */}
          {[
            {
              id: 'departments',
              title: 'Departments',
              content:
                'The institution offers a wide range of departments across multiple fields such as Engineering, Management, and Biotechnology, providing students with the knowledge and skills necessary to excel in their respective fields.',
            },
            {
              id: 'learning-resources',
              title: 'Learning Resources',
              content:
                'The institution is equipped with cutting-edge learning resources such as state-of-the-art laboratories, a comprehensive library, e-learning tools, and online resources to support students’ academic journey.',
            },
            {
              id: 'academic-advisory-board',
              title: 'Academic Advisory Board',
              content:
                'The Academic Advisory Board plays a vital role in shaping the academic policies, curricula, and ensuring the overall academic quality of the institution. The board consists of experienced academic professionals and experts from various domains.',
            },
            {
              id: 'academic-monitoring-council',
              title: 'Academic Monitoring Council',
              content:
                'The Academic Monitoring Council regularly evaluates the academic performance of students, faculty, and departments to ensure that the institution maintains high standards of education and learning.',
            },
            {
              id: 'peer-evaluation',
              title: 'Peer Evaluation',
              content:
                'The institution implements a peer evaluation system to assess both student performance and faculty teaching effectiveness. This feedback is used to improve academic standards and teaching methods.',
            },
            {
              id: 'chapters',
              title: 'Chapters',
              content:
                'Various academic and professional chapters are maintained within the institution to foster student involvement in extracurricular and co-curricular activities, as well as to encourage knowledge sharing and leadership.',
            },
            {
              id: 'programme-course-outcomes',
              title: 'Programme & Course Outcomes',
              content:
                'Each program and course offered by the institution is designed to meet specific outcomes that contribute to the holistic development of students. These outcomes are regularly reviewed and aligned with industry needs.',
            },
            {
              id: 'calendar',
              title: 'Calendar',
              content:
                'The academic calendar of the institution includes important dates such as the start and end of semesters, holidays, exam schedules, and other academic events to ensure smooth academic operations.',
            },
            {
              id: 'time-table',
              title: 'Time Table',
              content:
                'A well-structured time table is provided to all students at the beginning of each semester, ensuring that students are aware of their class schedules and academic requirements.',
            },
            {
              id: 'bput-regulation',
              title: 'BPUT Regulation',
              content:
                'The institution adheres to the guidelines and regulations set by Biju Patnaik University of Technology (BPUT), ensuring that all academic policies and procedures are in line with the university’s standards and requirements.',
            },
          ].map((section) => (
            <section id={section.id} key={section.id} className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#002147]">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700">{section.content}</p>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default Academics;
