import React, { useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

function EnergyCenterPage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Energy Center | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/energy-center.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Energy Center
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
                        <Link href="/research" className="hover:underline">
                            Research
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/domain-research-hubs" className="hover:underline">
                            Domain Research Hubs
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Energy Center</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-6 mb-16">
                {/* Content Area */}
                <div className="w-full lg:w-4/4 space-y-12">
                    {/* Sections */}
                    <section id="introduction" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">Introduction</h2>
                        <p className="text-lg text-gray-700">
                            The Energy Center has been established by the Department of Electrical & Electronics Engineering to promote research in Renewable Energy. The primary focus is on Solar Energy, covering photovoltaic technology, storage devices, and rooftop solar applications. Research extends to grid interaction, net metering, Smart Grid, and Smart Metering, with support from the ETC Department.
                        </p>
                        <p className="text-lg text-gray-700">
                            Other key areas of research include load flow analysis, NetZero initiatives, Electric Vehicles, and Railway Electrification. Efforts are also being made to explore applications of solar photovoltaic technologies in rural agriculture and lighting.
                        </p>
                    </section>

                    <section id="team" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">Team Members</h2>
                        <ul className="list-disc pl-6 text-lg text-gray-700">
                            <li>Prof. P.K. Sahoo - Distributed Generation, Electric Vehicle</li>
                            <li>Mr. Y. Panda - Power System Protection</li>
                            <li>Mr. S.R. Das - Power System Protection</li>
                            <li>Mr. L.K. Sahoo - PLC, Electric Vehicle</li>
                            <li>Mr. S.S. Mishra - Solar Photovoltaic Technology, Electric Vehicle</li>
                        </ul>
                    </section>

                    <section id="useful-links" className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">Useful Links</h2>
                        <ul className="space-y-4 text-lg text-gray-700">
                            <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                                <Link href="/pdfs/Publications-from-Energy-Center.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                                    Publications from Center
                                </Link>
                            </li>
                            <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                                <Link href="/pdfs/Trainings-Conferences.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                                    Trainings/Conferences
                                </Link>
                            </li>
                            <li className="hover:bg-gray-100 rounded-lg transition-colors duration-300">
                                <Link href="/pdfs/BTech-Projects.pdf" className="block py-3 px-5 rounded-lg hover:text-blue-600 font-medium">
                                    B.Tech Projects
                                </Link>
                            </li>
                        </ul>
                    </section>
                    {/* Our NOVEL INITIATIVES Section */}
                    <section id="novel-initiatives" className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-[#002147] text-center mb-6">
                            Our NOVEL INITIATIVES
                        </h2>
                        <p className="text-lg text-gray-700 text-center">
                            Introducing the RENEN Club to inspire and involve students in innovative research and projects on Renewable Energy.
                        </p>
                        <div className="text-center">
                            <Link
                                href="/renen-club"
                                className="inline-block py-3 px-6 bg-[#002147] text-white text-lg font-medium rounded-lg hover:bg-[#003a72] transition-colors duration-300"
                            >
                                Explore RENEN Club
                            </Link>
                        </div>
                    </section>

                </div>
            </main>

            {/* Footer */}
            <Footer />
        </Layout>
    );
}

export default EnergyCenterPage;
