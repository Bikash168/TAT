import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Research() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Research | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/Research (2).jpg')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Research
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
            Research
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
                { name: 'Objective', link: '/research-objective' },
                { name: 'Research Recognition', link: '/research-recognition' },
                { name: 'Research Committee', link: '/research-committee' },
                { name: 'Empowerment', link: '/empowerment' },
                { name: 'Research Linkage', link: '/research-linkage' },
                { name: 'Extramural Funding (TEFR)', link: '/extramural-funding' },
                { name: 'Intramural Funding (TIFR)', link: '/intramural-funding' },
                { name: 'Domain Research Hubs', link: '/domain-research-hubs' },
                { name: 'Patents', link: '/patents' },
                { name: 'Consultancy', link: '/consultancy' },
                { name: 'Research and Consultancy Policy 2013', link: '/research-consultancy-policy-2013' },
                { name: 'Research and Development Policy 2024', link: '/research-development-policy-2024' },
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

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-12">
          {/* Sections */}
          <section id="introduction" className="space-y-4">
            <p className="text-lg text-gray-700">
              Trident Academy of Technology is dedicated to advancing research by providing modern facilities and a collaborative environment for students and faculty. Research activities span multiple disciplines, focusing on engineering, technology, and applied sciences. Trident encourages innovative projects that address industry needs and societal challenges, ensuring that research outcomes contribute to technological growth and practical solutions.
            </p>
          </section>

          <section id="vision-mission" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Vision & Mission</h2>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-lg text-gray-700">
              To develop a research-driven atmosphere where students and faculty explore new ideas, create solutions, and contribute to technological and social progress. Trident Academy of Technology aims to be a center for advanced studies, bridging innovation with real-world impact.
            </p>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-lg text-gray-700">
              To provide a strong foundation for research by offering modern facilities and continuous support. To encourage meaningful projects that address real challenges and promote collaboration across different disciplines. To contribute to knowledge through impactful research publications and prepare skilled individuals for science, industry, and society. To strengthen partnerships with industries and position Trident as a leader in advanced studies and innovation.
            </p>
          </section>

          <section id="initiatives" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Advancing Research and Innovation at Trident</h2>
            <p className="text-lg text-gray-700">
              Trident Research fosters collaboration across disciplines to inspire innovation among students and faculty. The focus is on developing solutions that address industrial and societal challenges while contributing to emerging fields.
            </p>
            <p className="text-lg text-gray-700">
              The institute supports research through initiatives like IEDC activities, student technical clubs, and funding programs. Faculty and students are encouraged to engage in national and international conferences, promoting knowledge exchange and academic recognition.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
