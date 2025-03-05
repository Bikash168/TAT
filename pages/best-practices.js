import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
        <h1 className="relative text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Best Practices at Trident Academy of Technology
        </h1>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center gap-4 text-gray-700 text-sm sm:text-base lg:text-lg">
        <Link href="/" className="hover:underline flex items-center">
          <span className="mr-1">🏠</span> Home
        </Link>
        <span>/</span>
        <span className="text-gray-600">Best Practices</span>
      </nav>

      {/* Main Section with Sidebar */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mb-16">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-4 rounded-lg shadow-md">
          {/* Hamburger Icon for Mobile View */}
          <button
            className="lg:hidden text-white mb-1 flex items-center"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
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

          <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
            <ul className="space-y-3">
              {[
                { name: 'Quality/Accreditation', link: '/quality-accreditation' },
                { name: 'Implementation of SDGs', link: '/implementation-of-sdgs' },
                { name: 'Policies', link: '/policies' },
                { name: 'Peer Audits', link: '/Peer-Audits' },
                { name: 'E-Governance', link: '/E-Governance' },
                { name: 'College Committees', link: '/College-Committees' },
                { name: 'Student Council', link: '/Student-Council' },
                { name: 'Career Guidance', link: '/Career-Guidance' },
                { name: 'Proctorial System', link: '/Proctorial-System' },
                { name: 'Guardians Meet', link: '/Guardians-Meet' },
                { name: 'Learn with Fun', link: '/Learn-with-Fun' },
                { name: 'Attendance Monitoring', link: '/Attendance-Monitoring' },
                { name: 'Lab QUIZZES', link: '/Lab-QUIZZES' },
                { name: 'Special Care Groups', link: '/Special-Care-Groups' },
                { name: 'Sustainability (TCSR)', link: '/Sustainability-(TCSR)' },
                { name: 'IQAC', link: '/IQAC' },
                { name: 'Best Practice – 1', link: '/Best Practice–1' },
                { name: 'Best Practice – 2', link: '/Best Practice–2' },
                { name: 'Institutional Social Responsibility (ISR)', link: '/ISR' },
                { name: 'OJEE & AICTE', link: '/OJEE&AICTE' },
                { name: 'Publication', link: '/Publication' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} legacyBehavior>
                    <a className="block bg-white text-[#002147] p-3 rounded-lg transition duration-300 ease-in-out shadow-md border border-[#002147] hover:bg-[#003652] hover:text-white hover:shadow-lg">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <section className="lg:w-3/4 w-full">
          <p className="text-lg mb-6">
            Best practices are a set of guidelines, ethics, or ideas that represent the most efficient or prudent course of action. Trident Academy of Technology ensures that such practices are followed. Some key aspects include:
          </p>

          <ul className="list-disc list-inside text-lg space-y-3 mb-6">
            <li>Availability of lectures on intranet after classroom teaching</li>
            <li>Use of multimedia for effective teaching-learning</li>
            <li>Availability of time schedule to students before semester starts</li>
            <li>Summer training to upgrade skills</li>
            <li>Career guidance and regular mentoring</li>
            <li>Parents-teachers meet</li>
          </ul>

          <p className="text-lg">
            Trident Academy of Technology believes in progressive academic practices for the betterment of technical education and research.
          </p>

          {/* Images Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            {/* Parent-Teacher Meets */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/parentsmeet.jpg"
                alt="Best Practice 1"
                width={500}
                height={300}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <h2 className="mt-2 text-lg font-semibold text-center">Parent-Teacher Meets</h2>
            </div>

            {/* Learn with Fun through Club Activities */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/training3-530x380.jpg"
                alt="Best Practice 2"
                width={500}
                height={300}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <h2 className="mt-2 text-lg font-semibold text-center">Learn with Fun through Club Activities</h2>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </Layout>
  );
};

export default BestPractices;
