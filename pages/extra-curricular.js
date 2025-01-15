import React, { useState } from 'react'; // Add this import
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

function ExtraCurricularPage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Extra-Curricular Activities | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/extra-curricular.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Extra-Curricular Activities
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
                        <Link href="/activities" className="hover:underline">
                            Activities
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Co-Curricular Activities</li>
                </ul>
            </nav>

            {/* Main Content */}
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
                        <span className="ml-2 text-lg font-medium">Menu</span>
                    </button>

                    <div
                        className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}
                    >
                        <h2 className="text-2xl font-semibold mb-6">Extra-Curricular Menu</h2>
                        <ul className="space-y-3">
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#trifest">TRIFEST – The Annual Cultural Show</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#udayan">UDAYAN – The Annual Techfest</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#kartavya">KARTAVYA – The Service Group</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#manan">Manan – The Intellectual Group</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#elixir">ELIXIR – The Business Meet</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#trifit">TriFit – The Fitness Initiative</Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="w-full lg:w-3/4 space-y-12">
                    {/* Sections */}
                    <section id="trifest" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">TRIFEST – The Annual Cultural Show</h2>
                        <p className="text-lg text-gray-700">
                            Trident’s Annual Spring Festival is celebrated in the campus every year under the name of “TRIFEST”. It showcases the talents of students in music, dance, and performing arts through various in-house competitions and cultural events.
                        </p>
                    </section>

                    <section id="udayan" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">UDAYAN – The Annual Techfest</h2>
                        <p className="text-lg text-gray-700">
                            UDAYAN is Trident's flagship technical festival, celebrated every year to encourage technological innovations. It features various competitions and workshops aimed at fostering technical skills among students.
                        </p>
                    </section>

                    <section id="kartavya" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">KARTAVYA – The Service Group</h2>
                        <p className="text-lg text-gray-700">
                            Kartavya is an initiative focused on social responsibility. It helps students contribute to greater causes, including organizing blood donation camps, reaching out to the distressed, and participating in plantation and NSS activities.
                        </p>
                    </section>

                    <section id="manan" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">Manan – The Intellectual Group</h2>
                        <p className="text-lg text-gray-700">
                            Manan is a club designed to promote intellectual growth among students. It organizes debates, discussions, and talks to nourish the mind and foster critical thinking.
                        </p>
                    </section>

                    <section id="elixir" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">ELIXIR – The Business Meet</h2>
                        <p className="text-lg text-gray-700">
                            ELIXIR is a business meet organized by the management students, where they showcase their business acumen through a variety of events, providing them with a platform to hone their entrepreneurial skills.
                        </p>
                    </section>

                    <section id="trifit" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">TriFit – The Fitness Initiative</h2>
                        <p className="text-lg text-gray-700">
                            TriFit is a fitness club aimed at promoting health and fitness among students. It organizes regular fitness challenges, yoga sessions, and other wellness activities to keep the students physically fit.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </Layout>
    );
}

export default ExtraCurricularPage;
