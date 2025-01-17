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
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/ElectricalElectronicsEngineering.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Electrical & Electronics Engineering Department
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
                    <li className="text-gray-600">Electrical & Electronics Engineering</li>
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
                        <span className="ml-2 text-lg font-medium">EEE Menu</span>
                    </button>

                    <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
                        <h2 className="text-2xl font-semibold mb-6">EEE Menu</h2>
                        <ul className="space-y-3">
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#overview">Overview</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#courses">Courses</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#activities">Activities</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#achievements">Achievements</Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-12">
                    <div id="overview" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            The Department of Electrical & Electronics Engineering (EEE) was established in 2005. It offers a B.Tech program with 30 seats and two postgraduate courses: M.Tech in Electric Vehicle Technology and M.Tech in Energy and Environmental Engineering, each with 18 seats.
                        </p>
                        <p>
                            The department has 10 dedicated faculty members, ensuring quality education through theoretical and practical classes. Faculty achievements include 10 national and 5 international publications and 3 patents in the last 3 years.
                        </p>
                    </div>

                    <div id="courses" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Courses Offered</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>B.Tech. in Electrical & Electronics Engineering – 30 Seats</li>
                            <li>M.Tech. in Electric Vehicle Technology – 18 Seats</li>
                            <li>M.Tech. in Energy & Environmental Engineering – 18 Seats</li>
                        </ul>
                    </div>

                    <div id="activities" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Clubs and Activities</h2>
                        <p>
                            Students enhance their knowledge through active participation in:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Renewable Energy (RENEN) Club</li>
                            <li>Energy Efficiency Club</li>
                            <li>Electric Vehicle Club</li>
                        </ul>
                        <p>
                            The department has successfully installed a 10KWp on-grid rooftop solar power plant and a 2KWp solar hybrid system for campus street lighting. A new 240KWp on-grid solar power plant is under development.
                        </p>
                    </div>

                    <div id="achievements" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Achievements</h2>
                        <p>
                            The department is proud of its certified trainers from the Power Sector Skill Council (PSSC) and Skill Council of Green Jobs (SCGJ). These trainers provide National Skills Qualification Framework (NSQF) certification courses to students, ensuring employment in reputed companies.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ElectricalElectronicsEngineering;
