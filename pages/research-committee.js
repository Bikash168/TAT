import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ResearchCommittee() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Research Committee | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/research-committee.jpg')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Research Committee
        </h1>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-10">
        <ul className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/research" className="hover:underline">
              Research
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Research Committee</li>
        </ul>
      </nav>

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
            <span className="ml-2 text-lg font-medium">Menu</span>
          </button>

          <div
            className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
          >
            <h2 className="text-2xl font-semibold mb-6">Research Menu</h2>
            <ul className="space-y-3">
              {[
                { name: 'About Research Committee', link: '/about-research-committee' },
                { name: 'Objectives', link: '/research-objectives' },
                { name: 'Research Groups', link: '/research-groups' },
                { name: 'Research Committee Members', link: '/research-committee-members' },
              ].map((item) => (
                <li key={item.name} className="hover:bg-[#004D73] p-2 rounded-lg transition">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-12">
          {/* Sections */}
          <section id="introduction" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">About the Research Committee</h2>
            <p className="text-lg text-gray-700">
              Trident Group of Institutions has established Trident Research, an independent research setup through a dedicated group of professors known as the Advanced Research Group (ARG). This initiative explores the hidden capabilities and untapped potential among young faculty and students, enabling them to conduct advanced research and devise innovative solutions for diverse applications.
            </p>
            <p className="text-lg text-gray-700">
              Currently, Trident Research operates actively in Odisha as a non-profit research organization, conducting cross-disciplinary projects to address a wide range of social and industrial challenges.
            </p>
          </section>

          <section id="objectives" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Objectives</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>To foster a culture of innovation and advanced research among students and faculty.</li>
              <li>To develop interdisciplinary solutions for real-world social and industrial problems.</li>
              <li>To encourage collaboration between academia, industry, and society for impactful research.</li>
            </ul>
          </section>

          <section id="groups" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Research Groups</h2>
            <p className="text-lg text-gray-700">
              The Research Committee has established specialized groups focusing on cutting-edge fields such as Artificial Intelligence, Renewable Energy, Biotechnology, and more. Each group is committed to achieving excellence in their respective domains and contributing to the global knowledge pool.
            </p>
          </section>

          <section id="members" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Research Committee Members</h2>
            <p className="text-lg text-gray-700">
              The committee comprises dedicated professors and researchers who guide and mentor students in their research journey. Their expertise ensures the institution achieves its vision of impactful innovation and technological advancement.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
