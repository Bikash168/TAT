import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const ComputerScienceAIML = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Computer Science & Engineering (AI & ML) | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Computer-Science-AI-ML.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Computer Science & Engineering (AI & ML) Department
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
                    <li className="text-gray-600">Computer Science & Engineering (AI & ML)</li>
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
                                { name: 'Overview', link: '/overview-cs-ai-ml' },
                                { name: 'Courses', link: '/courses' },
                                { name: 'Faculties', link: '/faculties' },
                                { name: 'Laboratories', link: '/laboratories' },
                                { name: 'Question Bank', link: '/question-bank' },
                                { name: 'BPUT Questions (PY)', link: '/bput-questions' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.link}>
                                        <button className="w-full text-left bg-[#004D73] text-white p-2 rounded-lg transition hover:bg-[#003355]">
                                            {item.name}
                                        </button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </aside>

                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 id="overview" className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            The Computer Science & Engineering (AI & ML) department focuses on providing students with cutting-edge education in the fields of Artificial Intelligence and Machine Learning, with a strong foundation in computer science and engineering.
                        </p>
                    </div>

                    <div id="courses" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Courses Offered</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold">1. B.Tech. in Computer Science & Engineering (AI & ML) - 60 Seats</h3>
                                <p>
                                    This course provides students with an in-depth understanding of AI & ML techniques, data science, robotics, and more, preparing them for roles in AI-driven industries.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">2. M.Tech. in Computer Science & Engineering (AI & ML) - 18 Seats</h3>
                                <p>
                                    A specialized program focusing on advanced AI and ML technologies, offering research opportunities in cutting-edge fields like deep learning, reinforcement learning, and more.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="faculties" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Faculties</h2>
                        <p>
                            The department is staffed with faculty members holding M.Tech and Ph.D. degrees, specializing in areas like AI, ML, data science, and robotics.
                        </p>
                    </div>

                    <div id="laboratories" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Laboratories</h2>
                        <p>
                            The department has state-of-the-art labs equipped with the latest hardware and software tools to provide practical training in AI, ML, and robotics.
                        </p>
                    </div>

                    <div id="question-bank" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Question Bank</h2>
                        <p>
                            The department maintains a comprehensive question bank with previous year questions and sample papers to help students prepare effectively.
                        </p>
                    </div>

                    <div id="bput-questions" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">BPUT Questions (PY)</h2>
                        <p>
                            A repository of previous year questions from BPUT exams, helping students to practice and understand exam patterns.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ComputerScienceAIML;
