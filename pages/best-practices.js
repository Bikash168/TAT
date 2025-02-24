import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Reusable Section Component
const Section = ({ id, title, content }) => (
  <section id={id} className="mb-12">
    <h2 className="text-3xl font-semibold text-[#002147] mb-6">{title}</h2>
    <p className="text-lg text-gray-700">{content}</p>
  </section>
);

const BestPractices = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Data for Best Practices
  const bestPractices = [
    { id: 'quality-accreditation', title: 'Quality/Accreditation', content: 'Description...' },
    { id: 'implementation-of-sdgs', title: 'Implementation of SDGs', content: 'Description...' },
    // more sections...
  ];

  return (
    <Layout title="Best Practices | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/BestPractices.jpg')",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Best Practices at Trident Academy of Technology
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
            Best Practices
          </li>

        </ul>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[1 px] sm:mt-[2.5px] lg:mt-[5px] mb-16">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-4 rounded-lg shadow-md">
          <button
            aria-label="Toggle sidebar"
            className="lg:hidden text-white mb-2 flex items-center"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

          </button>

          <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
            <ul className="space-y-3">
              {[
                { name: 'Quality/Accreditation', link: '/quality-accreditation' },
                // Add more items here
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
        <div className="w-3/4 lg:w-4/5 pl-6">
          {bestPractices.map((practice) => (
            <Section key={practice.id} id={practice.id} title={practice.title} content={practice.content} />
          ))}
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default BestPractices;
