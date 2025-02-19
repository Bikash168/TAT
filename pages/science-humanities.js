import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const ScienceHumanities = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Science & Humanities | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/ScienceHumanities.jpeg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Science & Humanities Department
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
                    <li className="text-gray-600">Science & Humanities</li>
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
                                { name: 'Overview', link: '/overview-science-humanities' },
                                { name: 'Courses', link: '#courses' },
                                { name: 'Faculties', link: '#faculties' },
                                { name: 'Laboratories', link: '#laboratories' },
                                { name: 'Question Bank', link: '#question-bank' },
                                { name: 'BPUT Questions (PY)', link: '#bput-questions' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.link}>
                                        <button className="w-full text-left bg-[#004D73] text-white p-3 rounded-lg transition hover:bg-[#003355]">
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
                    <div id="overview" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            The prime objective of the Department of Science and Humanities is to provide students with deep insights into basic sciences and lay a solid foundation for engineering students throughout their four years of study. TAT is renowned for its professional teaching approach, strategic direction, and goal-oriented academic delivery. The department emphasizes academic excellence while nurturing students' creative skills, self-image, communication abilities, and public speaking through debates, group discussions, and personal development sessions.
                        </p>
                    </div>

                    <div id="departments" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Departments</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Department of Mathematics</li>
                            <li>Department of Physics</li>
                            <li>Department of Chemistry</li>
                            <li>Department of English</li>
                            <li>Department of Economics</li>
                            <li>Department of Management Studies</li>
                        </ul>
                    </div>

                    <div id="faculty" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Faculty</h2>
                        <p>
                            The department comprises sincere and dedicated faculty members, many of whom hold PhDs or are actively pursuing their doctoral degrees. They specialize in their respective fields and are committed to enriching students' learning experiences through strong conceptual clarity in both theoretical and practical aspects.
                        </p>
                    </div>

                    <div id="facilities" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Facilities</h2>
                        <p>
                            The department boasts well-equipped laboratories with state-of-the-art equipment for experiments aligned with the Biju Patnaik University of Technology syllabus. The English Department features a modern Language Lab with advanced software and hardware to enhance students' English communication skills. Periodic guest lectures by eminent faculty and industry experts further bridge academic gaps.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ScienceHumanities;
