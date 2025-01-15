import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const CareerGuidance = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Career Guidance | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/CareerGuidance.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Career Guidance at Trident Academy of Technology
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-10">
                <ul className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
                    <li>
                        <a href="/" className="hover:underline flex items-center">
                            <span className="mr-1">🏠</span> Home
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/best-practices" className="hover:underline">
                            Best Practices
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/student-council" className="hover:underline">
                            Career Guidance
                        </a>
                    </li>
                </ul>
            </nav>

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
                        <span className="ml-2 text-lg font-medium">Career Guidance Menu</span>
                    </button>

                    <div
                        className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
                    >
                        <h2 className="text-2xl font-semibold mb-6">Career Guidance</h2>
                        <ul className="space-y-3">
                            {["Studies", "Internship", "Jobs", "Entrepreneurship"].map((item) => (
                                <li key={item} className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                    <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="w-3/4 lg:w-4/5 pl-6">
                    {/* Overview */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Overview</h2>
                        <p className="text-lg text-gray-700">
                            The Career Guidance Cell at Trident Academy of Technology is dedicated to nurturing career consciousness among students, helping them develop personality traits that align with their professional aspirations. The cell organizes expert talks and provides access to resources to fine-tune student skills and attitudes.
                        </p>
                    </section>

                    {/* Expert Talks */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Expert Talks</h2>
                        <ul className="list-disc pl-8 text-lg text-gray-700">
                            <li>‘Attitude is everything’ by Mr. Panduranga Rao, IVRCL, India.</li>
                            <li>‘IT Sector Vs Core Sector’ by Anthony Reddy, GM HR, Honeywell.</li>
                            <li>‘How to crack Campus Drive’ by Dr. Suman Bhattacharya, Head Training, TCS.</li>
                            <li>‘Building Career’ by TM Sundaram, GM HR, Sundaram Brake Lining.</li>
                        </ul>
                    </section>

                    {/* Facilities */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Facilities</h2>
                        <p className="text-lg text-gray-700">
                            The Career Guidance Cell is equipped with internet-connected personal computers, dedicated career literature, and counseling support. Students can access regular publications, books, newsletters, and journals to aid in their career planning.
                        </p>
                    </section>

                    {/* Achievements */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Achievements</h2>
                        <ul className="list-disc pl-8 text-lg text-gray-700">
                            <li>Students secured PG/PhD seats in reputed universities worldwide.</li>
                            <li>Excellent GATE scores leading to admissions in IITs.</li>
                            <li>Qualifying for PSU, Government, Civil Services, and Engineering Services jobs.</li>
                            <li>Establishing successful entrepreneurial ventures.</li>
                        </ul>
                    </section>

                    {/* Committee Members */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Committee Members</h2>
                        <ul className="list-none text-lg text-gray-700">
                            <li>
                                <strong>Prof. Nani Gopal Das</strong> - HOD (Training & Placement)
                                <br /> Email: <a href="mailto:trplacement@tat.ac.in" className="text-blue-500">trplacement@tat.ac.in</a>
                            </li>
                            <li>
                                <strong>Ashis Kumar Barik (Mech)</strong> - 9853676338
                            </li>
                            <li>
                                <strong>Subhra Swetanisha (CSE)</strong> - 9040972928
                            </li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default CareerGuidance;
