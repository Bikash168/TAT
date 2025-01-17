import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const ProctorialSystem = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Proctorial System | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/ProctorialSystem.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Proctorial System at Trident Academy of Technology
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
                        <a href="/proctorial-system" className="hover:underline">
                            Proctorial System
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
                        <span className="ml-2 text-lg font-medium">Proctorial System Menu</span>
                    </button>

                    <div
                        className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
                    >
                        <h2 className="text-2xl font-semibold mb-6">Proctorial System</h2>
                        <ul className="space-y-3">
                            {["About", "Committee", "Implementation", "Web Management", "Assignment of Groups"].map((item) => (
                                <li key={item} className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                    <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="w-3/4 lg:w-4/5 pl-6">
                    {/* Overview */}
                    <section id="about" className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Overview</h2>
                        <p className="text-lg text-gray-700">
                            The Proctorial System at Trident Academy of Technology assigns a faculty member to guide a group of 20 students. Proctors are responsible for offering academic and personal counseling, helping students resolve issues, and maintaining communication with both students and their parents.
                        </p>
                    </section>

                    {/* Duties of Proctors */}
                    <section id="committee" className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Duties of Proctors</h2>
                        <ul className="list-disc pl-8 text-lg text-gray-700">
                            <li>Proctors act as leaders for a group of students, overseeing their academic and personal development.</li>
                            <li>They provide regular academic and personal counseling to students, helping them with any problems they may face.</li>
                            <li>Proctors maintain records of student progress and communicate regularly with parents and the institution.</li>
                        </ul>
                    </section>

                    {/* Scope for Students */}
                    <section id="implementation" className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Scope for Students</h2>
                        <p className="text-lg text-gray-700">
                            The Proctorial System supports students in both academic and personal development. Proctors monitor student progress, assist with issues, and ensure students are on track with their studies. This system aims to improve students' curricular activities, behavior, and overall development.
                        </p>
                    </section>

                    {/* Assignment of Groups */}
                    <section id="assignment-of-groups" className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Assignment of Groups</h2>
                        <p className="text-lg text-gray-700">
                            Each faculty member is assigned a group of 20 students to guide through their academic journey. Proctors ensure that every student receives the necessary support to succeed academically and personally.
                        </p>
                    </section>

                    {/* Web Management */}
                    <section id="web-management" className="mb-12">
                        <h2 className="text-3xl font-semibold text-[#002147] mb-6">Web Management</h2>
                        <p className="text-lg text-gray-700">
                            The Proctorial System is managed digitally, where proctors can track student progress, maintain records, and communicate with both students and parents efficiently.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ProctorialSystem;
