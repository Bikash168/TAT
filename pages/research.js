import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Research() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const researchAreas = [
    {
      title: 'AI and Machine Learning',
      description: 'Innovative solutions in AI and ML with applications across healthcare, finance, and smart cities.',
    },
    {
      title: 'Renewable Energy',
      description: 'Cutting-edge research in solar, wind, and energy storage for a sustainable future.',
    },
    {
      title: 'Biotechnology Research',
      description: 'Groundbreaking research in genomics and environmental biotechnology for health and sustainability.',
    },
    {
      title: 'Robotics and Automation',
      description: 'Designing advanced robots and automated systems for industrial and social applications.',
    },
    {
      title: 'Nanotechnology',
      description: 'Exploring the potential of nanomaterials and their applications in medicine, energy, and environment.',
    },
    {
      title: 'Cybersecurity and Data Privacy',
      description: 'Enhancing data protection and security through innovative technologies in the digital age.',
    },
  ];

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
            <span className="ml-2 text-lg font-medium">Research Menu</span>
          </button>

          <div
            className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
          >
            <h2 className="text-2xl font-semibold mb-6">Research Menu</h2>
            <ul className="space-y-3">
              {[
                { name: 'Objective', link: '/objective' },
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
            <h2 className="text-3xl font-semibold text-[#002147]">Research Introduction</h2>
            <p className="text-lg text-gray-700">
              Trident Academy of Technology is committed to cutting-edge research and innovation, addressing real-world challenges through interdisciplinary collaboration and impactful discoveries.
            </p>
          </section>

          <section id="vision-mission" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Vision & Mission</h2>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-lg text-gray-700">
              To become a global leader in interdisciplinary research, fostering technological advancements and societal growth.
            </p>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-lg text-gray-700">
              To cultivate innovation and excellence in research by engaging students and faculty in transformative projects that make a tangible difference.
            </p>
          </section>

          <section id="initiatives" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Research Initiatives</h2>
            <p className="text-lg text-gray-700">
              Our initiatives span diverse disciplines, from artificial intelligence to renewable energy. We strive to create impactful solutions for global challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-2xl font-semibold text-[#002147]">{area.title}</h3>
                  <p className="text-lg text-gray-700 mt-2">{area.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="highlights" className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#002147]">Research Highlights</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>
                Development of AI-powered traffic management systems for smart cities.
              </li>
              <li>
                Breakthroughs in renewable energy storage for sustainable living.
              </li>
              <li>
                Innovations in genomics and biotechnology to combat global health challenges.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
