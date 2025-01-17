import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const OtherSoftskills = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Other Softskills | Trident Academy of Technology">
            {/* Background Image Section with Improved Contrast */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Softskills.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Other Softskills
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8 mb-8">
                <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
                    <li>
                        <Link href="/" className="hover:underline flex items-center">
                            <span className="mr-1">🏠</span> Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/training" className="hover:underline">
                            Training
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Other Softskills</li>
                </ul>
            </nav>

            {/* Main Section */}
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
                        <span className="ml-2 text-lg font-medium">Softskills Menu</span>
                    </button>

                    <div
                        className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
                    >
                        <h2 className="text-2xl font-semibold mb-6">Softskills Menu</h2>
                        <ul className="space-y-3">
                            {[
                                { name: 'Lateral Thinking(De-Bono)', link: '/lateral-thinking' },
                                { name: '2020-21', link: '/2020-21' },
                                { name: '2021-22', link: '/2021-22' }
                            ].map((item) => (
                                <li key={item.name} className="hover:bg-[#004D73] p-2 rounded-lg transition">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Introduction</h2>
                            <p>
                                In the engineering and manufacturing sectors, soft skills are crucial for career advancement. At Trident, we place great emphasis on these essential skills. Our training program, starting from the very first year, prepares students to excel in corporate environments by boosting their confidence, improving their communication skills, and helping them understand team dynamics.
                            </p>
                        </div>

                        {/* List of Softskills */}
                        {[
                            'Personality Development Programs',
                            'GD & PI Training',
                            'Team Building',
                            'Team Communication',
                            'Developing Lateral Thinking (De Bono)',
                            'Attire Management',
                            'Social & Business Etiquette'
                        ].map((skill) => (
                            <div key={skill} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-xl font-bold mb-4">{skill}</h2>
                                <p>
                                    Our students undergo rigorous training in these key areas, equipping them with the skills needed to thrive in their professional careers. These programs are designed to enhance communication, leadership, and personal presentation.
                                </p>
                                <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default OtherSoftskills;
