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
          backgroundImage: "url('/images/Placement.webp')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Placement at Trident Academy of Technology
        </h1>
      </section>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
        <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Placement</li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mb-16">
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
              />
            </svg>
          </button>

          <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
            <ul className="space-y-3">
              {[
                { name: 'The Department', link: '/placement-overview' },
                { name: 'Placement Infrastructure', link: '/placement-infrastructure' },
                { name: 'Alumni Mentoring', link: '/alumni-mentoring' },
                { name: 'Placement Statistics', link: '/placement-statistics' },
                { name: 'Recruiters Speak', link: '/recruiters-speak' },
                { name: 'Placement Notices', link: '/placement-notices' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} passHref>
                    <button className="w-full text-left bg-white text-[#002147] p-3 rounded-lg transition duration-300 ease-in-out shadow-md border border-[#002147] hover:bg-[#003652] hover:text-white hover:shadow-lg">
                      {item.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="relative w-full lg:w-3/4 lg:pl-6">

          {/* Yellow Blob Design Element on the Right */}
          <div className="absolute bg-yellow-400 rounded-bl-[150px] rounded-tl-full h-[350px] w-[350px] -right-20 -top-10 z-0 opacity-20 blur-2xl"></div>

          {/* Combined Card */}
          <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden p-6 space-y-10">

            {/* Placement Overview */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src="/images/Trident-Placement-1.jpeg"
                  alt="Placement Overview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-2xl font-semibold text-[#002147] mb-4">Placement Overview</h2>
                <p className="text-lg text-gray-700">
                  The placement cell at Trident guides students in securing job opportunities through campus recruitment drives and internships. It provides complete details about job openings, selection procedures, and skill requirements. Regular sessions are conducted to help students understand industry expectations and prepare for different stages of the hiring process.
                </p>
              </div>
            </div>

            {/* Placement Infrastructure */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src="/images/Trident-Placement-2.jpg"
                  alt="Placement Infrastructure"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-6">

                <p className="text-lg text-gray-700">
                  Students undergo structured training in problem-solving, technical skills, and interview techniques. Mock interviews, group discussions, and resume-building workshops help them develop confidence and perform well in recruitment tests. Pre-placement talks and industry interactions allow students to gain insights into workplace requirements and career growth.
                </p>
              </div>
            </div>

            {/* Alumni Mentoring */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src="/images/Trident-Placement-3.jpg"
                  alt="Alumni Mentoring"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-6">

                <p className="text-lg text-gray-700">
                  The placement process is well-organized, with timely updates on job opportunities and company expectations. Students receive continuous guidance to explore career options, understand industry trends, and secure job roles that match their skills and goals. The placement cell ensures that every student is well-prepared to enter the professional world.
                </p>
              </div>
            </div>

          </div>
        </div>


      </main>

      <Footer />
    </Layout>
  );
};

export default Placement;
