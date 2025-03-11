// pages/training.js
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Training() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Training Programs | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/Training.jpg')", // Replace with your image path
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Training Programs
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
            Training
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
                { name: 'Attitude is Everything', link: '/attitude' },
                { name: 'Industry Institute Partnership Cell (IIPC)', link: '/iipc' },
                { name: 'Cisco thingQbator', link: '/cisco' },
                { name: 'Communication Confidence: Speak Your Way to Success', link: '/communication' },
                { name: 'Other Softskills', link: '/softskills' },
                { name: 'Analytical Reasoning', link: '/reasoning' },
                { name: 'Winter & Summer Training Extravaganza', link: '/skills' },
                { name: 'Technical Augmentation', link: '/technical' },
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

        {/* Main Content Area */}
        <div className="w-full lg:w-3/4 lg:pl-6 space-y-12">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#002147]">
              Training Programs at Trident Academy of Technology
            </h1>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Trident follows a structured training approach to equip students with the skills required for professional success. The program covers aptitude, logical reasoning, technical proficiency, and effective communication. Dedicated sessions on resume building, interview techniques, and workplace ethics help students prepare for recruitment processes. Industry experts and professionals conduct workshops, ensuring students gain relevant insights and practical knowledge.
            </p>
          </section>

          {/* Training Programs Overview Section */}
          <section className="mb-16 animate-fade-in-up delay-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              To enhance learning, students engage in internships, live projects, and industry visits. Regular mock interviews and group discussions are conducted to refine problem-solving abilities, analytical thinking, and decision-making skills. Special focus is given to improving soft skills, enabling students to adapt to corporate environments with confidence.
            </p>
          </section>

          <section className="mb-16 animate-fade-in-up delay-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Performance evaluations through assessments and feedback sessions help students track their progress. Faculty mentors provide personalized guidance, identifying areas for improvement. The training ensures that students graduate with the technical expertise and professional skills required to meet industry standards.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
