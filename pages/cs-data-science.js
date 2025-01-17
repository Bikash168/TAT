import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const DataScienceEngineering = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Computer Science & Engineering (Data Science) | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Data-Science.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Computer Science & Engineering (Data Science) Department
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
                        <Link href="/academics" className="hover:underline">
                            Academics
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/departments" className="hover:underline">
                            Departments
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Computer Science & Engineering (Data Science)</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[10px] sm:mt-[20px] lg:mt-[40px] mb-16">

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
                        <span className="ml-2 text-lg font-medium">CSE (Data Science) Menu</span>
                    </button>

                    <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
                        <h2 className="text-2xl font-semibold mb-6">CSE (Data Science) Menu</h2>
                        <ul className="space-y-3">
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#overview">Overview</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#courses">Courses</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#faculties">Faculties</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#laboratories">Laboratories</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#question-bank">Question Bank</Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 id="overview" className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            The Computer Science & Engineering (Data Science) department offers a 4-year full-time B.Tech program under BPUT. This program aims to equip students with a solid foundation in Data Science, Machine Learning, Data Engineering, and more. With the growing demand for Data Scientists globally, this program prepares students for a wide range of career opportunities in tech giants like Google, Microsoft, Amazon, etc.
                        </p>
                    </div>

                    <div id="courses" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Courses Offered</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold">1. B.Tech. in Computer Science & Engineering (Data Science) - 60 Seats</h3>
                                <p>
                                    This course includes specialized modules in Data Science, Machine Learning, and Data Engineering to help students build solid expertise in handling and analyzing large datasets.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">2. M.Tech. in Computer Science & Engineering (Data Science) - 18 Seats</h3>
                                <p>
                                    A postgraduate program offering advanced knowledge in Data Science, preparing students for research or industry-specific challenges.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="faculties" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Faculties</h2>
                        <p>
                            The department is staffed by faculty members with specialized knowledge in Data Science, Machine Learning, Artificial Intelligence, and more. Many faculty members hold M.Tech and Ph.D. qualifications.
                        </p>
                    </div>

                    <div id="laboratories" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Laboratories</h2>
                        <p>
                            The department is equipped with state-of-the-art laboratories to provide hands-on experience in Data Science and related fields, enabling students to work with cutting-edge technologies.
                        </p>
                    </div>

                    <div id="question-bank" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Question Bank</h2>
                        <p>
                            A comprehensive question bank for various Data Science subjects is available for students, aiding their preparation for exams and building a solid foundation in the field.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default DataScienceEngineering;
