import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const ElectronicsEngineeringVLSI = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Electronics Engineering (VLSI Design Technology) | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/ElectronicsEngineeringVLSI.jpg')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Electronics Engineering (VLSI Design Technology) Department
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
                    <li className="text-gray-600">Electronics Engineering (VLSI Design Technology)</li>
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
                        <span className="ml-2 text-lg font-medium">Electronics Engineering (VLSI Design Technology) Menu</span>
                    </button>

                    <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
                        <h2 className="text-2xl font-semibold mb-6">Electronics Engineering (VLSI Design Technology) Menu</h2>
                        <ul className="space-y-3">
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#overview">Overview</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#courses">Courses</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#research">Research</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#careers">Career Prospects</Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-12">
                    <div id="overview" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            The Department of Electronics Engineering (VLSI Design Technology) at Trident Academy of Technology is dedicated to creating skilled engineers who excel in integrated circuit design, system architectures, and semiconductor technologies. Our programs are tailored to address the evolving demands of the VLSI industry and contribute to India's semiconductor ecosystem.
                        </p>
                    </div>

                    <div id="courses" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Courses Offered</h2>
                        <ul className="space-y-4">
                            <li>
                                <h3 className="font-semibold">B.Tech. in Electronics Engineering (VLSI Design Technology) - 60 Seats</h3>
                                <p>
                                    A 4-year program focused on chip design, semiconductor devices, and EDA tools, preparing graduates for leading roles in the VLSI domain.
                                </p>
                            </li>
                            <li>
                                <h3 className="font-semibold">M.Tech. in VLSI Design - 18 Seats</h3>
                                <p>
                                    A comprehensive 2-year postgraduate program covering algorithms, low-power designs, and verification techniques, aimed at equipping students with advanced skills in VLSI systems.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div id="research" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Research Areas</h2>
                        <p>
                            The department actively engages in cutting-edge research in areas like FPGA design, system-on-chip development, and low-power VLSI systems, fostering innovation and industry collaboration.
                        </p>
                    </div>

                    <div id="careers" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Career Prospects</h2>
                        <p>
                            Graduates from our programs find opportunities in industries like telecommunications, high-performance computing, consumer electronics, and space research. The demand for VLSI engineers continues to grow with advancements in IC design and semiconductor technologies.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ElectronicsEngineeringVLSI;
