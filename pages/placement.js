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
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Placement at Trident Academy of Technology
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
            Placement
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

        {/* Main Content Area */}
        <div className="w-full lg:w-3/4 lg:pl-6">
          {/* Placement Overview Section */}
          <section id="placement-overview" className="mb-12">

            <p className="text-lg text-gray-700">
              The placement cell at Trident guides students in securing job opportunities through campus recruitment drives and internships. It provides complete details about job openings, selection procedures, and skill requirements. Regular sessions are conducted to help students understand industry expectations and prepare for different stages of the hiring process.
            </p>
          </section>

          {/* Placement Infrastructure Section */}
          <section id="placement-infrastructure" className="mb-12">

            <p className="text-lg text-gray-700">
              Students undergo structured training in problem-solving, technical skills, and interview techniques. Mock interviews, group discussions, and resume-building workshops help them develop confidence and perform well in recruitment tests. Pre-placement talks and industry interactions allow students to gain insights into workplace requirements and career growth.
            </p>
          </section>

          {/* Alumni Mentoring Section */}
          <section id="alumni-mentoring" className="mb-12">

            <p className="text-lg text-gray-700">
              The placement process is well-organized, with timely updates on job opportunities and company expectations. Students receive continuous guidance to explore career options, understand industry trends, and secure job roles that match their skills and goals. The placement cell ensures that every student is well-prepared to enter the professional world.
            </p>
          </section>


        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default Placement;
