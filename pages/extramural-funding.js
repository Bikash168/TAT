import { useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ExtramuralFunding() {
    const [expandedYear, setExpandedYear] = useState(null);

    const handleToggleYear = (year) => {
        if (expandedYear === year) {
            setExpandedYear(null); // Collapse if the same year is clicked
        } else {
            setExpandedYear(year); // Expand the clicked year
        }
    };

    return (
        <Layout title="Extramural Funding (TEFR) | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/extramural-funding-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Extramural Funding (TEFR)
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
                    <li className="text-gray-600">Extramural Funding (TEFR)</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-2">
                {/* Objective Section */}
                <section id="objective" className="bg-light p-6">
                    <h2 className="text-center text-xl font-bold">Objective</h2>
                    <p className="mt-2 text-justify">
                        The objective of institutions offering technical education in engineering technology is not only to offer teaching but also to provide solutions for pressing societal and industrial challenges. Recognizing this, many government, semi-government, autonomous, national, and international agencies provide financial assistance to promote research and innovation activities in engineering colleges. Faculty and students of Trident Academy of Technology have availed themselves of research grants from various funding agencies to carry out sponsored research projects in identified thrust areas.
                    </p>
                </section>

                {/* Research Details by Year */}
                {[
                    {
                        year: "2021-22",
                        projects: [
                            {
                                title: "Design and Development of realtime ground behaviour monitoring system (RT-GBMS) for underground metal mines – An innovative ICT-based solution",
                                investigator: "Dr. Abhaya Kumar Samal",
                                agency: "Ministry of Mines, Govt. of India",
                                amount: "₹39,88,000",
                            },
                            {
                                title: "Design and Development of realtime ground behaviour monitoring system (RT-GBMS) for underground metal mines – An innovative ICT-based solution",
                                investigator: "Dr. Abhaya Kumar Samal",
                                agency: "Manganize Ore India Ltd. (MOIL)",
                                amount: "₹10,00,000",
                            },
                        ],
                    },
                    {
                        year: "2020-21",
                        projects: [
                            {
                                title: "Skill and Personality Development Programme Center for SC/ST students",
                                investigator: "Dr. D.N. Pattanayak",
                                agency: "AICTE",
                                amount: "₹7,18,000",
                            },
                            {
                                title: "An Intelligent IoT-based system for Sensing Hazardous Gases in Manhole and Analysis",
                                investigator: "Dr. Sakuntala Mahapatra",
                                agency: "DDP, DST, Govt. of India",
                                amount: "₹10,06,672",
                            },
                            {
                                title: "IoT-Based Smart Dustbin for Smart City",
                                investigator: "Dr. Sakuntala Mahapatra",
                                agency: "BPUT",
                                amount: "₹2,42,799",
                            },
                            {
                                title: "MODROBS",
                                investigator: "Dr. D.N. Pattanayak",
                                agency: "AICTE",
                                amount: "₹8,68,706",
                            },
                            {
                                title: "Short Term Training Programme",
                                investigator: "Dr. Sakuntala Mahapatra",
                                agency: "AICTE",
                                amount: "₹3,24,667",
                            },
                            {
                                title: "Short Term Training Programme",
                                investigator: "Dr. D.N. Pattanayak",
                                agency: "AICTE",
                                amount: "₹2,05,833",
                            },
                            {
                                title: "Short Term Training Programme",
                                investigator: "Dr. R.N. Satapathy",
                                agency: "AICTE",
                                amount: "₹1,80,500",
                            },
                        ],
                    },
                    {
                        year: "2019-20",
                        projects: [
                            {
                                title: "Automatic door opening and closing of vehicle using IoT and AI",
                                investigator: "Dr. R.N. Satapathy",
                                agency: "BPUT",
                                amount: "₹2,42,952",
                            },
                            {
                                title: "Faculty Development Programme",
                                investigator: "Dr. Sakuntala Mahapatra",
                                agency: "AICTE",
                                amount: "₹4,69,000",
                            },
                            {
                                title: "Faculty Development Programme",
                                investigator: "Dr. R.N. Satapathy",
                                agency: "AICTE",
                                amount: "₹5,33,000",
                            },
                            {
                                title: "Seminar Grant",
                                investigator: "Prof. P.K. Sahoo",
                                agency: "AICTE",
                                amount: "₹3,80,000",
                            },
                            {
                                title: "FIST",
                                investigator: "Dr. Sakuntala Mahapatra",
                                agency: "DST",
                                amount: "₹28,00,000",
                            },
                            {
                                title: "Online monitoring of powerline phase synchronization status",
                                investigator: "Dr. Abhaya Kumar Samal, Mr. Mir Manjur Elahi",
                                agency: "INLAND ENGINEERS",
                                amount: "₹18,44,000",
                            },
                            {
                                title: "The effect of CSR on company performance: A Study on Spatial Planning & Analysis Research Centre",
                                investigator: "Dr. Nargis Befum",
                                agency: "SPARC",
                                amount: "₹10,60,000",
                            },
                        ],
                    },
                    {
                        year: "2018-19",
                        projects: [
                            {
                                title: "Short Term Training Program",
                                investigator: "Prof. (Dr.) Sakuntala Mahapatra",
                                agency: "AICTE, Govt. of India",
                                amount: "₹5,00,000",
                            },
                            {
                                title: "Faculty Development Program",
                                investigator: "Prof. (Dr.) Sakuntala Mahapatra",
                                agency: "AICTE, Govt. of India",
                                amount: "₹7,00,000",
                            },
                        ],
                    },
                    {
                        year: "2017-18",
                        projects: [
                            {
                                title: "AICTE Sponsored FDP on Embedded system in IoT",
                                investigator: "Prof. (Dr.) Sakuntala Mahapatra",
                                agency: "AICTE, Govt. of India",
                                amount: "₹7,00,000",
                            },
                            {
                                title: "AICTE Sponsored National seminar on Convergence of Communication, Network & Computing (CCNC-2017)",
                                investigator: "Prof. (Dr.) Sakuntala Mahapatra",
                                agency: "AICTE, Govt. of India",
                                amount: "₹1,00,000",
                            },
                        ],
                    },
                    {
                        year: "2016-17",
                        projects: [
                            {
                                title: "16 channel wireless acquisition system for magnetic diagnostics of Aditya-U Tokamak",
                                investigator: "Prof. (Dr.) Sakuntala Mahapatra (PI) & Asst. Prof. Sk. Mohammed Ali (Co-PI)",
                                agency: "BRNS, Department of Atomic Energy (DAE), Govt. of India",
                                amount: "₹18,71,600",
                            },
                        ],
                    },
                ].map(({ year, projects }) => (
                    <section key={year} className="bg-gray-100 p-6 mt-6">
                        <h2 className="text-center text-xl font-bold flex items-center justify-between cursor-pointer" onClick={() => handleToggleYear(year)}>
                            <span>Year: {year}</span>
                            <span>{expandedYear === year ? '-' : '+'}</span>
                        </h2>
                        {expandedYear === year && (
                            <div className="overflow-x-auto mt-4">
                                <table className="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base">
                                    <thead>
                                        <tr className="bg-gray-200 text-left">
                                            <th className="border border-gray-300 px-4 py-2">Sl. No.</th>
                                            <th className="border border-gray-300 px-4 py-2">Project Title</th>
                                            <th className="border border-gray-300 px-4 py-2">Principal Investigator</th>
                                            <th className="border border-gray-300 px-4 py-2">Agency</th>
                                            <th className="border border-gray-300 px-4 py-2">Sanctioned Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.map((project, index) => (
                                            <tr key={index}>
                                                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                                <td className="border border-gray-300 px-4 py-2">{project.title}</td>
                                                <td className="border border-gray-300 px-4 py-2">{project.investigator}</td>
                                                <td className="border border-gray-300 px-4 py-2">{project.agency}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-right">{project.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </section>
                ))}
            </main>

            <Footer />
        </Layout>
    );
}
