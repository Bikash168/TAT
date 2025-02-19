import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const MCA = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Master in Computer Application | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/MCA.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Master in Computer Application Department
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
                    <li className="text-gray-600">Master in Computer Application</li>
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
                                { name: 'Overview', link: '/overview-mca' },
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
                            Set up in 2005 by some brilliant NRIs as one of the oldest technical institutes of the state, Trident provides world-class education opportunities to students who want to translate their dreams into cherished realities. Trident MCA has a successful track record of two decades in imparting technical education.
                        </p>
                        <p className="mt-4">
                            The Trident brand, which offers the undisputed No.1 MCA courses of the state under BPUT, has also consistently figured in the top 100 list of engineering colleges of India as per <strong>DataQuest CMR</strong>. To be ranked alongside IITs, NITs, and Deemed Universities of the country is a remarkable honor.
                        </p>
                    </div>

                    <div id="courses" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Campus & Environment</h2>
                        <p>
                            Sprawled over a campus of 11 acres situated in the heart of the city and surrounded by IT corporate giants such as Infosys, TCS, Wipro, and Mindtree, Trident commands respect as one of the leading technical institutions of Eastern India. The MCA department offers an ideal environment for great ideas to flourish and innovation to become a way of life.
                        </p>
                    </div>

                    <div id="faculties" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Faculties</h2>
                        <p>
                            The department has a dedicated and highly qualified team of faculty members with expertise in software engineering, artificial intelligence, and database management. They are committed to nurturing the academic and professional growth of students.
                        </p>
                    </div>

                    <div id="laboratories" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Laboratories</h2>
                        <p>
                            Trident MCA boasts state-of-the-art laboratories equipped with cutting-edge tools and software to support hands-on learning in networking, programming, and hardware systems.
                        </p>
                    </div>

                    <div id="question-bank" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Question Bank</h2>
                        <p>
                            Access a collection of previous year question papers and practice problems designed to help students excel in their academics and technical skills.
                        </p>
                    </div>

                    <div id="bput-questions" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">BPUT Questions (PY)</h2>
                        <p>
                            A repository of BPUT's previous year question papers is available to help students prepare effectively for their examinations.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default MCA;
