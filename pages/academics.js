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
            <span className="ml-2 text-lg font-medium">Academics Menu</span>
          </button>

          <div
            className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
          >
            <h2 className="text-2xl font-semibold mb-6">Academics Menu</h2>
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
                <li key={item.name} className="hover:bg-[#004D73] p-2 rounded-lg transition ">
                  <Link href={item.link}>
                    {item.name}
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
              <h2 class="text-xl font-bold mb-4">Introduction</h2>
              <p class="text-sm text-justify">
                Trident Academy of Technology offers the kind of education needed for leadership in a rapidly changing world. Its departments – Department of Biotechnology, Department of Civil Engineering, Department Computer Science and Engineering,  Department of Electrical and Electronics Engineering, Department of Electronics and Telecommunication Engineering, Department of Mechanical Engineering,  Department of Computer Science and Information Technology, Department of Computer Science and Technology, Department of Computer Science and Engineering (AI & ML), Department of MCA and Department of MBA – offer a breadth of highly regarded M.Tech./B.Tech./M.B.A./M.C.A. degree programs under Biju Pattnaik University of Technology that allow students the freedom to explore their intellectual and personal passions.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Departments</h2>
              <p class="text-sm text-justify">
                The institution offers a wide range of departments across multiple fields such as Engineering, Management, Biotechnology, and Social Work.
              </p>
              <a href="/departments" class="text-blue-500 hover:underline">Know More</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Learning-resources</h2>
              <p class="text-sm text-justify">
                The institution is equipped with cutting-edge learning resources such as state-of-the-art laboratories, a comprehensive library, e-learning tools, and online resources to support students’ academic journey.
              </p>
              <a href="#" class="text-blue-500 hover:underline">Know More</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Academic Advisory Board</h2>
              <p class="text-sm text-justify">
                The Academic Advisory Board plays a vital role in shaping the academic policies, curricula, and ensuring the overall academic quality of the institution. The board consists of experienced academic professionals and experts from various domains.
              </p>
              <a href="#" class="text-blue-500 hover:underline">Know More</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Academic Monitoring Council</h2>
              <p class="text-sm text-justify">
                The Academic Monitoring Council regularly evaluates the academic performance of students, faculty, and departments to ensure that the institution maintains high standards of education and learning.
              </p>
              <a href="#" class="text-blue-500 hover:underline">Know More</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Peer Evaluation</h2>
              <p class="text-sm text-justify">
                The institution implements a peer evaluation system to assess both student performance and faculty teaching effectiveness. This feedback is used to improve academic standards and teaching methods.
              </p>
              <a href="#" class="text-blue-500 hover:underline">Know More</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Chapters</h2>
              <p class="text-sm text-justify">
                Various academic and professional chapters are maintained within the institution to foster student involvement in extracurricular and co-curricular activities, as well as to encourage knowledge sharing and leadership.
              </p>
              <a href="#" class="text-blue-500 hover:underline">Know More</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Programme & Course Outcome</h2>
              <p class="text-sm text-justify">
                Each program and course offered by the institution is designed to meet specific outcomes that contribute to the holistic development of students. These outcomes are regularly reviewed and aligned with industry needs.
              </p>
              <a href="#" class="text-blue-500 hover:underline">Know More</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Calendar</h2>
              <p class="text-sm text-justify">
                The academic calendar of the institution includes important dates such as the start and end of semesters, holidays, exam schedules, and other academic events to ensure smooth academic operations.
              </p>
              <a href="#" class="text-blue-500 hover:underline">Know More</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Time Table</h2>
              <p class="text-sm text-justify">
                A well-structured time table is provided to all students at the beginning of each semester, ensuring that students are aware of their class schedules and academic requirements.
              </p>
              <a href="#" class="text-blue-500 hover:underline">Know More</a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">BPUT Regulation</h2>
              <p class="text-sm text-justify">
                The institution adheres to the guidelines and regulations set by Biju Patnaik University of Technology (BPUT), ensuring that all academic policies and procedures are in line with the university’s standards and requirements.
              </p>
              <a href="#" class="text-blue-500 hover:underline">Know More</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default Academics;
