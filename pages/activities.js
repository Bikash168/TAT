import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const Activities = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout title="Activities | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/Activities.jpg')",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
        Activities
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
            <span className="ml-2 text-lg font-medium">Activities Menu</span>
          </button>

          <div
            className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
          >
            <h2 className="text-2xl font-semibold mb-6">Activities Menu</h2>
            <ul className="space-y-3">
              {[
                { name: 'Co-Curricular', link: '#co-curricular' },
                { name: 'Extra-Curricular', link: '#extra-curricular' },
                { name: 'Innovation & Entrepreneurship', link: '#innovation-entrepreneurship' },
                { name: 'Sports and Games', link: '#sports-games' },
                { name: 'TRILOGY: The Annual Magazine', link: '#trilogy-magazine' },
                { name: 'IEDC', link: '#iedc' },
                { name: 'IEDC Projects', link: '#iedc-projects' },
                { name: 'Incubation Cell', link: '#incubation-cell' },
              ].map((item) => (
                <li
                  key={item.name}
                  className="hover:bg-[#004D73] p-2 rounded-lg transition"
                >
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
          {/* Dynamic Sections */}
          {[
            {
              id: 'co-curricular',
              title: 'Co-Curricular Activities',
              content:
                'Trident students have access to 20 different student clubs that cater to both cultural and academic interests. Each club is guided by a professor and a faculty coordinator, managed by a governing body of six students.',
            },
            {
              id: 'extra-curricular',
              title: 'Extra-Curricular Activities',
              content:
                'We promote the holistic development of our students by encouraging participation in sports, cultural events, workshops, and leadership activities.',
            },
            {
              id: 'innovation-entrepreneurship',
              title: 'Innovation & Entrepreneurship',
              content:
                'Students are encouraged to bring innovative ideas to life through the support of our incubation cell and entrepreneurship development programs.',
            },
            {
              id: 'sports-games',
              title: 'Sports and Games',
              content:
                'Our state-of-the-art sports facilities and regular competitions ensure students excel in both individual and team sports.',
            },
            {
              id: 'trilogy-magazine',
              title: 'TRILOGY: The Annual Magazine',
              content:
                'Trilogy showcases the creativity and talent of our students, offering a glimpse into their achievements and artistic endeavors.',
            },
            {
              id: 'iedc',
              title: 'IEDC (Innovation & Entrepreneurship Development Cell)',
              content:
                'The IEDC at Trident provides guidance, mentorship, and support for students to develop entrepreneurial skills and turn innovative ideas into reality.',
            },
            {
              id: 'iedc-projects',
              title: 'IEDC Projects',
              content:
                'Students work on real-world projects, combining technical expertise with creativity to solve contemporary challenges.',
            },
            {
              id: 'incubation-cell',
              title: 'Incubation Cell',
              content:
                'The Incubation Cell at Trident fosters the spirit of entrepreneurship by providing resources and mentorship to budding innovators.',
            },
          ].map((section) => (
            <section id={section.id} key={section.id} className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#002147]">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700">{section.content}</p>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default Activities;
