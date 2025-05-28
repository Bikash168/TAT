import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


const Activities = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarLinks = [
    { name: 'Co-Curricular', link: '/co-curricular' },
    { name: 'Extra-Curricular', link: '/extra-curricular' },
    { name: 'Innovation & Entrepreneurship', link: '/innovation-entrepreneurship' },
    { name: 'Sports and Games', link: '/sports-games' },
    { name: 'TRILOGY: The Annual Magazine', link: '/trilogy-magazine' },
    { name: 'IEDC', link: '/iedc' },
    { name: 'IEDC Projects', link: '/iedc-projects' },
    { name: 'Incubation Cell', link: '/incubation-cell' },
  ];

  return (
    <Layout title="Activities | Trident Academy of Technology">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
        style={{
          backgroundImage: "url('/images/Activities.jpg')",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
          Activities
        </h1>
      </section>

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
        <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
          <li>
            <Link href="/" className="hover:underline flex items-center">
              <span className="mr-1">🏠</span> Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Activities</li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mb-16">
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
            <span className="ml-2">Menu</span>
          </button>

          <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
            <ul className="space-y-3">
              {sidebarLinks.map((item) => (
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
        <div className="relative w-full lg:w-3/4 space-y-12 p-6 bg-white shadow-lg rounded-2xl mx-auto overflow-hidden">
          {/* Yellow Blob Design Element on the Right */}
          <div className="absolute bg-yellow-400 rounded-bl-[150px] rounded-tl-full h-[350px] w-[350px] -right-20 -top-10 z-0 opacity-20 blur-2xl"></div>

          <div className="relative z-10 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-yellow-900 pl-4 text-justify">
              Trident provides students with opportunities to engage in various activities that support both academic and personal development. Industry interactions, workshops, and seminars help students gain practical knowledge and stay updated with current trends.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-yellow-900 pl-4 text-justify">
              Leadership programs and student-led initiatives encourage teamwork, communication, and decision-making skills. Cultural events, competitions, and community engagement programs allow students to explore their interests and develop a well-rounded perspective.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-yellow-900 pl-4 text-justify">
              These activities help students build confidence, improve problem-solving abilities, and prepare for professional challenges with faculty support and access to resources.
            </p>

            {/* Swiper Carousel */}
            <div className="w-full flex flex-col items-center">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                modules={[Pagination, Autoplay]}
                className="w-full"
              >
                {[
                  { img: '/images/social-work.jpg', title: 'Social Work' },
                  { img: '/images/conclave.jpg', title: 'Conclave' },
                  { img: '/images/case-study.jpg', title: 'Case Study' },
                  { img: '/images/FDP.jpg', title: 'FDP' },
                  { img: '/images/Function.jpg', title: 'Function' },
                  { img: '/images/Sports (2).jpg', title: 'Sports Day' },
                  { img: '/images/Picnic.jpg', title: 'Picnic' },
                  { img: '/images/Yoga.jpeg', title: 'Yoga Day' },
                  { img: '/images/inter-college-contest.jpeg', title: 'Inter College Contest' },
                ].map((event, index) => (
                  <SwiperSlide key={index} className="flex flex-col items-center space-y-3 pb-6">
                    <div className="w-[320px] h-[220px] overflow-hidden rounded-xl shadow-lg border">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center text-lg font-semibold text-gray-700">
                      {event.title}
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper pagination spacing */}
              <style jsx global>{`
        .swiper-pagination {
          margin-top: 1.5rem;
          position: relative !important;
        }
      `}</style>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </Layout>
  );
};

export default Activities;
