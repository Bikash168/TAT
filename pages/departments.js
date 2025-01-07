import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const Departments = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Departments | Trident Academy of Technology">


      {/* Background Image Section with Improved Contrast */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/Departments.jpg')", // Replace with your image path
          backgroundPosition: "center center", // Center the image horizontally and vertically
          backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
        }}
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Title */}
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
          Departments
        </h1>
      </section>
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8 mb-8">
        <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/academics" className="hover:underline">
              Academics
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">
            Departments
          </li>
        </ul>
      </nav>
      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[10px] sm:mt-[20px] lg:mt-[40px] mb-16">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-4 rounded-lg shadow-md">
          {/* Hamburger Icon for Mobile View */}
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
            <span className="ml-2 text-lg font-medium">Departments Menu</span>
          </button>

          <div
            className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
          >
            <h2 className="text-2xl font-semibold mb-6">Departments Menu</h2>
            <ul className="space-y-3">
              {[
                { name: 'Civil Engineering', link: '/civil-engineering' },
                { name: 'Biotechnology Engineering', link: '/biotechnology-engineering' },
                { name: 'Computer Science & Engineering', link: '#computer-science-engineering' },
                { name: 'Computer Science & Engineering (AI & ML)', link: '#cs-ai-ml' },
                { name: 'Computer Science & Engineering (Data Science)', link: '#cs-data-science' },
                { name: 'Computer Science and Technology', link: '#cs-technology' },
                { name: 'Computer Science & Information Technology', link: '#cs-it' },
                { name: 'Electronics and Telecommunication Engineering', link: '#electronics-telecommunication' },
                { name: 'Electronics Engineering (VLSI Design Technology)', link: '#electronics-vlsi' },
                { name: 'Electrical and Electronics Engineering', link: '#electrical-electronics' },
                { name: 'Mechanical Engineering', link: '#mechanical-engineering' },
                { name: 'Master in Business Administration', link: '#mba' },
                { name: 'Master in Computer Application', link: '#mca' },
                { name: 'Science & Humanities', link: '#science-humanities' },
              ].map((item) => (
                <li key={item.name} className="hover:bg-[#004D73] p-2 rounded-lg transition">
                  <Link href={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-xl font-bold mb-4">Introduction</h2>
              <p>
                Trident Academy of Technology offers diverse departments across multiple fields, allowing students to pursue their academic passions and achieve their goals. Each department offers specialized programs that combine theory with practical learning experiences.
              </p>
            </div>

            {/* List of Departments */}
            {[
              'Civil Engineering',
              'Biotechnology Engineering',
              'Computer Science & Engineering',
              'Computer Science & Engineering (AI & ML)',
              'Computer Science & Engineering (Data Science)',
              'Computer Science and Technology',
              'Computer Science & Information Technology',
              'Electronics and Telecommunication Engineering',
              'Electronics Engineering (VLSI Design Technology)',
              'Electrical and Electronics Engineering',
              'Mechanical Engineering',
              'Master in Business Administration',
              'Master in Computer Application',
              'Science & Humanities'
            ].map((department) => (
              <div key={department} class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-xl font-bold mb-4">{department}</h2>
                <p>
                  Explore the courses and opportunities available within the {department} department. Our curriculum is designed to equip students with the skills needed for success in their respective fields.
                </p>
                <a href="#" class="text-blue-500 hover:underline">Know More</a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default Departments;
