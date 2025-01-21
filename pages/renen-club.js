import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function RenenClub() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="RENEN Club | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/solar-power-power-station.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    RENEN (Renewable Energy) Club
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
                    <li>
                        <Link href="/energy-center" className="hover:underline">
                            Energy Center
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">RENEN Club</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-6 mb-16">
                <div className="w-full lg:w-4/4 space-y-12">
                    {/* Club Details */}
                    <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-4xl font-bold text-[#002147] text-center mb-6">
                            RENEN (Renewable Energy) Club
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            This club started in the Electrical & Electronics Engineering Department to focus on the advanced trends in technological development in non-conventional energy, particularly solar energy, among faculty and students.
                        </p>
                        <h2 className="text-2xl font-semibold text-[#002147] mb-4">
                            AIM OF THE CLUB:
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li>The teachers and students will develop their skills and knowledge in one forum.</li>
                            <li>To develop research works in solar energy.</li>
                            <li>To apply new trends in technology to applications in solar photovoltaic, particularly solar rooftop energy.</li>
                            <li>To compare their innovative ideas in new trends of technology.</li>
                            <li>To implement the application of electronics, computer, and IT technology in the field of smart technology, i.e., smart grid and smart metering, etc.</li>
                            <li>This club will give information on solar cells, solar panels, storage devices, and grid interaction and net metering.</li>
                            <li>This club will arrange for training of young engineers subsequently.</li>
                            <li>This club will help the students face competition on electrical energy problems and job interviews by different energy companies.</li>
                            <li>This club will create an information center for solar photovoltaic structures and their application.</li>
                            <li>This club will conduct seminars/workshops/talks of resource persons on solar PV structures in the college premises.</li>
                            <li>To develop the control mechanism of electrical energy smartly with the help of microprocessors and power electronics.</li>
                        </ul>
                        <p className="text-lg text-gray-700 mb-6">
                            <strong>Faculty Coordinator:</strong> Mr. S. S. Mishra, Assistant Professor, Department of Electrical & Electronics Engineering
                        </p>
                        <div className="text-center">
                            <Link
                                href="pdfs/Solar-Energy-Presentation.pdf"
                                className="inline-block py-3 px-6 bg-[#002147] text-white text-lg font-medium rounded-lg hover:bg-[#003a72] transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download Club Presentation
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
