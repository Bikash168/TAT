import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const ElectronicsTelecommEngineering = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Electronics & Telecomm Engineering | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/ElectronicsTelecommEngineering.jpg')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Electronics & Telecomm Engineering Department
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
                    <li className="text-gray-600">Electronics & Telecomm Engineering</li>
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
                        <span className="ml-2 text-lg font-medium">ETE Menu</span>
                    </button>

                    <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
                        <h2 className="text-2xl font-semibold mb-6">Electronics & Telecomm Engineering Menu</h2>
                        <ul className="space-y-3">
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#overview">Overview</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#courses">Courses</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#labs">Laboratories</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#achievements">Achievements</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#faculty">Faculty</Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-6">
                    <div id="overview" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            The Electronics and Telecommunication Engineering department focuses on cutting-edge technologies in communication systems, embedded systems, VLSI design, and more. With an emphasis on practical learning and research, students are prepared for both industry roles and higher studies.
                        </p>
                    </div>

                    <div id="courses" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Courses Offered</h2>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>B.Tech in Electronics and Telecommunication Engineering</li>
                            <li>M.Tech in Electronics and Telecommunication Engineering</li>
                            <li>Specialized courses in VLSI Design, Embedded Systems, and Communication Technologies</li>
                        </ul>
                    </div>

                    <div id="labs" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Laboratory Facilities</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our department is equipped with state-of-the-art labs including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>Advanced Communication Lab</li>
                            <li>VLSI and Embedded Systems Lab</li>
                            <li>Signal Processing Lab</li>
                            <li>Microcontroller and Microprocessor Lab</li>
                            <li>Wireless Communication and Antenna Lab</li>
                        </ul>
                    </div>

                    <div id="achievements" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Achievements</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our students and faculty have achieved several milestones, including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>Multiple national-level project competition wins</li>
                            <li>Collaborations with leading companies for research and internships</li>
                            <li>Publications in reputed journals and conferences</li>
                        </ul>
                    </div>

                    <div id="faculty" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Faculty</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our experienced faculty members are dedicated to providing quality education and mentorship. They specialize in various domains including VLSI, Communication Systems, Embedded Systems, and Signal Processing.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ElectronicsTelecommEngineering;
