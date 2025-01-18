import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const BiotechnologyEngineering = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Biotechnology Engineering | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Biotechnology-Engineering.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Biotechnology Engineering Department
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
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
                    <li className="text-gray-600">Biotechnology Engineering</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[1 px] sm:mt-[2.5px] lg:mt-[5px] mb-16">

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
                        <span className="ml-2 text-lg font-medium">Biotechnology Engineering Menu</span>
                    </button>

                    <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
                        <h2 className="text-2xl font-semibold mb-6">Biotechnology Engineering Menu</h2>
                        <ul className="space-y-3">
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="/overview-biotechnology-engineering">Overview</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="/courses">Courses</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="/faculties">Faculties</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="/laboratories">Laboratories</Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 id="overview" className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            The Biotechnology department was established in 2018 with student intake of 30 for B.Tech. in Biotechnology program under the aegis of Trident Academy of Technology.
                        </p>
                    </div>

                    <div id="courses" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Courses Offered</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold">1. B.Tech. in Biotechnology - 30 Seats</h3>
                                <p>
                                    A comprehensive program that focuses on equipping students with the theoretical and practical knowledge required to excel in various fields of biotechnology, including industrial, environmental, and healthcare applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="faculties" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Faculties</h2>
                        <p>
                            Presently there are 6 dedicated and committed teaching faculty members in this department with various specializations like Recombinant DNA Technology, Environmental Biotechnology, Immunology and Immunotechnology, Bioprocess Technology, Industrial Microbiology, Bioinformatics, Protein Engineering, Enzyme Technology, Animal Biotechnology, Molecular Biology, and Biochemistry.
                        </p>
                    </div>

                    <div id="laboratories" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Laboratories</h2>
                        <p>
                            The department has excellent infrastructure and laboratory facilities to provide hands-on training in frontier areas of biotechnology.
                        </p>
                    </div>

                    <div id="salient-features" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Salient Features</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Department is actively involved in maintaining corporate relationships for providing placement to the students.</li>
                            <li>The academic performance of our students in University exams is outstanding.</li>
                            <li>Department organizes workshops and seminars regularly for the interest of students and faculties.</li>
                            <li>Professors and technical experts are invited from various universities and industries for providing additional advanced information in the field of biotechnology for the benefit of students.</li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default BiotechnologyEngineering;
