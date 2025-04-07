import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const Academics = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout title="Academics | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{ backgroundImage: "url('/images/Academics.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
          Academics
        </h1>
      </section>

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4 mt-6">
        <ul className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-500">Academics</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 py-10">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full">
          <div className="bg-[#002147] text-white p-4 rounded-xl shadow-md">
            {/* Toggle for mobile */}
            <button
              className="lg:hidden flex items-center mb-4"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="ml-2">Menu</span>
            </button>

            <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
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
                      <button className="w-full text-left bg-white text-[#002147] px-4 py-2 rounded-lg border border-[#002147] hover:bg-[#003652] hover:text-white transition shadow-sm">
                        {item.name}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Academic Content Section */}
        <section className="flex-1 bg-white rounded-3xl shadow-2xl px-6 py-12 sm:p-14 relative overflow-hidden">
          {/* Yellow Blob Design Element */}
          <div className="absolute bg-yellow-400 rounded-br-[150px] rounded-tr-full h-[350px] w-[350px] -left-10 top-0 z-0 opacity-20 blur-2xl"></div>

          {/* Heading Section */}
          <div className="relative z-10 mb-10 text-left">
            <p className="text-red-500 uppercase text-sm font-bold tracking-widest">
              Learn with Us
            </p>
            <h2 className="text-4xl font-extrabold leading-snug mt-2">
              Discover and grow with the <span className="text-blue-700">experts</span>.
            </h2>
          </div>

          {/* Image + Paragraph Content */}
          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
            {/* Image */}
            <div className="relative md:w-1/2">
              {/* Modern Layered Gradient Background */}
              <div className="absolute -top-10 -left-10 w-[450px] h-[450px] bg-gradient-to-tr from-yellow-100 via-white to-blue-100 rounded-full filter blur-3xl opacity-60 z-0 animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-10 -right-5 w-[300px] h-[300px] bg-gradient-to-br from-indigo-100 via-pink-50 to-white rounded-full filter blur-2xl opacity-50 z-0 animate-pulse"></div>

              {/* Enlarged Image */}
              <img
                src="/images/Academic.jpg"
                alt="Academic Guide"
                className="relative z-10 rounded-2xl w-full max-w-2xl mx-auto shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Paragraphs */}
            <div className="md:w-1/2 text-gray-800 space-y-5">
              <p className="text-lg text-justify leading-relaxed">
                Trident Academy of Technology offers a well-planned education system that helps students gain knowledge, develop skills, and prepare for their careers. The curriculum is designed to balance theory and practice for undergraduate and postgraduate programs.
              </p>
              <p className="text-lg text-justify leading-relaxed">
                Students are encouraged to think critically, communicate effectively, and apply their learning to real-world problems through projects, research, and industry-driven training.
              </p>
              <p className="text-lg text-justify leading-relaxed">
                With modern labs, expert faculty, and hands-on activities, students get an environment that sparks creativity, innovation, and growth.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <img src="/images/laboratory.png" alt="Modern Labs" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Modern Labs</h3>
              <p className="text-sm text-gray-600 mt-2">
                Equipped with cutting-edge tools to support innovation, research, and experimentation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <img src="/images/teacher.png" alt="Expert Faculty" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Expert Faculty</h3>
              <p className="text-sm text-gray-600 mt-2">
                Learn from seasoned educators with deep academic insight and real-world experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <img src="/images/activity.png" alt="Hands-on Activities" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Hands-on Activities</h3>
              <p className="text-sm text-gray-600 mt-2">
                Dive into real-world challenges with practical sessions, workshops, and collaborative projects.
              </p>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </Layout>
  );
};

export default Academics;
