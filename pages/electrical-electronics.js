import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const ElectricalElectronicsEngineering = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Electrical & Electronics Engineering | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/ElectricalElectronicsEngineering.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                Electrical & Electronics Engineering Department
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
                    <li className="text-gray-600">Electrical & Electronics Engineering</li>
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
                        <span className="ml-2 text-lg font-medium">CSIT Menu</span>
                    </button>

                    <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
                        <h2 className="text-2xl font-semibold mb-6">CSIT Menu</h2>
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
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#bput-questions">BPUT Questions (PY)</Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-12">
                    <div id="overview" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            The B.Tech. in Computer Science & Information Technology program integrates theoretical knowledge and practical applications in computing and information technology. It focuses on developing skills in programming, networking, database management, and information security.
                        </p>
                    </div>

                    <div id="courses" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Courses Offered</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold">B.Tech. in Computer Science & IT - 60 Seats</h3>
                                <p>
                                    A four-year undergraduate program covering areas such as software engineering, cloud computing, and system development. This course prepares students for various roles in the IT industry.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="faculties" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Faculties</h2>
                        <p>
                            The department has highly qualified faculty members with expertise in software engineering, artificial intelligence, and database management.
                        </p>
                    </div>

                    <div id="laboratories" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Laboratories</h2>
                        <p>
                            Modern laboratories equipped with advanced tools for practical learning in networking, programming, and hardware systems.
                        </p>
                    </div>

                    <div id="question-bank" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Question Bank</h2>
                        <p>
                            Access a collection of previous year question papers and practice problems to excel in academics.
                        </p>
                    </div>

                    <div id="bput-questions" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">BPUT Questions (PY)</h2>
                        <p>
                            A repository of previous year BPUT questions is available to aid in effective exam preparation.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ElectricalElectronicsEngineering;
