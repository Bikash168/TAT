import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const LearningResources = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Learning Resources | Trident Group of Institutions">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/learning-resources.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Learning Resources
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
                    <li className="text-gray-600">Learning Resources</li>
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

                    </button>

                    <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
                        <ul className="space-y-3">
                            {[
                                { href: "/about-learning-resources", label: "About" },
                                { href: "/vision-mission-learning-resources", label: "Vision & Mission" },
                                { href: "#catalogue-search", label: "Catalogue Search" },
                                { href: "#department-libraries", label: "Department Libraries" },
                                { href: "#e-resources", label: "E-Resources" },
                                { href: "#digital-resources", label: "Digital Resources" },
                                { href: "#print-journals", label: "Print Journals" },
                                { href: "#open-access", label: "Open Access" },
                                { href: "#suggestions", label: "Suggestions" },
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href}>
                                        <button className="w-full text-left bg-[#004D73] text-white p-3 rounded-lg transition hover:bg-[#003652]">
                                            {item.label}
                                        </button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </aside>

                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-12">
                    <section id="about" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">About</h2>
                        <p>
                            Colleges are called the temples of knowledge. In a 21st-century perspective, knowledge is acquired from diverse resources like printed books, electronic publications, symposiums, seminars, workshops, and career counseling centers. The Trident Group of Institutions is setting up a centralized Learning Resource Centre (LRC) to provide all these facilities under one roof.
                        </p>
                    </section>

                    <section id="vision-mission" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Vision & Mission</h2>
                        <p>
                            The LRC envisions fostering a culture of academic excellence by integrating modern learning resources to empower students and faculties.
                        </p>
                    </section>

                    <section id="catalogue-search" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Catalogue Search</h2>
                        <p>Use our advanced catalogue search system to locate books, journals, and other resources effortlessly.</p>
                    </section>

                    <section id="department-libraries" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Department Libraries</h2>
                        <p>
                            Each institution of the Trident Group provides dedicated department libraries with a wide range of resources specific to various disciplines.
                        </p>
                    </section>

                    <section id="e-resources" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">E-Resources</h2>
                        <p>
                            Access e-books, e-journals, and other digital publications through our extensive e-resources platform.
                        </p>
                    </section>

                    <section id="digital-resources" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Digital Resources</h2>
                        <p>
                            Explore our digital repository for academic papers, research materials, and other digital assets.
                        </p>
                    </section>

                    <section id="print-journals" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Print Journals</h2>
                        <p>
                            Stay updated with the latest advancements through our collection of print journals.
                        </p>
                    </section>

                    <section id="open-access" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Open Access</h2>
                        <p>
                            Access a wide range of open-source materials for learning and research.
                        </p>
                    </section>

                    <section id="suggestions" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Suggestions</h2>
                        <p>
                            We value your feedback. Share your suggestions to help us improve the Learning Resource Centre.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default LearningResources;
