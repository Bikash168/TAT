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
          backgroundImage: "url('/images/Training.jpg')",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Training Programs
        </h1>
      </section>

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6 ">
        <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Training</li>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="relative">
        {/* Yellow Blob */}
        <div className="absolute bg-yellow-400 rounded-bl-[150px] rounded-tl-full h-[350px] w-[350px] -right-20 -top-10 z-0 opacity-20 blur-2xl"></div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mb-16 relative z-10">
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
            <section className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl font-semibold text-[#002147]">
                Training Programs at Trident Academy of Technology
              </h1>
            </section>

            {/* Training Content as Cards */}
            <div className="space-y-8">
              {[
                {
                  text: "Trident follows a structured training approach to equip students with the skills required for professional success. The program covers aptitude, logical reasoning, technical proficiency, and effective communication. Dedicated sessions on resume building, interview techniques, and workplace ethics help students prepare for recruitment processes. Industry experts and professionals conduct workshops, ensuring students gain relevant insights and practical knowledge.",
                },
                {
                  text: "To enhance learning, students engage in internships, live projects, and industry visits. Regular mock interviews and group discussions are conducted to refine problem-solving abilities, analytical thinking, and decision-making skills. Special focus is given to improving soft skills, enabling students to adapt to corporate environments with confidence.",
                },
                {
                  text: "Performance evaluations through assessments and feedback sessions help students track their progress. Faculty mentors provide personalized guidance, identifying areas for improvement. The training ensures that students graduate with the technical expertise and professional skills required to meet industry standards.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { img: '/images/training1.jpg', alt: 'Soft Skills Training' },
                { img: '/images/training2.jpg', alt: 'Mock Interview Session' },
                { img: '/images/training3.jpg', alt: 'Industry Visit' },
              ].map((item, index) => (
                <div key={index} className="w-full overflow-hidden rounded-xl shadow-lg border">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </Layout>
  );
}
