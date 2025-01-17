import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';

const Scholarships = () => {
    const [activeScholarship, setActiveScholarship] = useState(null);

    const scholarshipDetails = [
        {
            category: "In-House Scholarships",
            scholarships: [
                {
                    title: "Highest Attendance",
                    description: "Awarded to students with the highest attendance record."
                },
                {
                    title: "Batch Toppers",
                    description: "Awarded to the top-performing students in each batch."
                },
                {
                    title: "Best Innovations",
                    description: "Awarded to students demonstrating the most innovative projects."
                },
                {
                    title: "Best Entrepreneurs",
                    description: "Awarded to students excelling in entrepreneurship activities."
                },
                {
                    title: "Pranati Mishra Memorial Gold Medal",
                    description: "Awarded to the college topper of Degree-completion every year."
                },
                {
                    title: "TFW (Total Fee Waiver)",
                    description: "Admits 5% of students through the TFW scheme according to government guidelines."
                },
            ]
        },
        {
            category: "State Level Scholarships",
            scholarships: [
                {
                    title: "PRERANA (Odisha)",
                    description: "Scholarship for meritorious students from Odisha."
                },
                {
                    title: "MEDHABRUTI",
                    description: "Scholarship for meritorious students from Odisha."
                },
                {
                    title: "Welfare Fund (Odisha)",
                    description: "Financial assistance to students whose father has passed away during their study."
                },
                {
                    title: "PRERANA (Bihar)",
                    description: "Scholarship for meritorious students from Bihar."
                },
                {
                    title: "PRERANA (Jharkhand)",
                    description: "Scholarship for meritorious students from Jharkhand."
                },
            ]
        },
        {
            category: "National Level Scholarships",
            scholarships: [
                {
                    title: "Central Sector Scholarship",
                    description: "Financial aid for meritorious students at the national level."
                },
                {
                    title: "Ex-Serviceman Scholarship",
                    description: "Scholarship for students whose parents are ex-servicemen."
                },
                {
                    title: "Pragati Scholarship",
                    description: "Financial aid for women students pursuing technical education."
                },
                {
                    title: "Sitaram Jindal Scholarship",
                    description: "Scholarship for students from economically disadvantaged backgrounds."
                },
            ]
        },
        {
            category: "Other Scholarships",
            scholarships: [
                {
                    title: "Departmental Financial Assistance",
                    description: "Financial assistance for children of employees in various departments such as Postal, Railway, NALCO, etc."
                },
            ]
        }
    ];

    const toggleDetails = (scholarshipCategory) => {
        setActiveScholarship((prev) => (prev === scholarshipCategory ? null : scholarshipCategory));
    };

    return (
        <Layout title="Scholarships | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/security-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                Scholarships
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
                        <Link href="/facilities" className="hover:underline">
                            Facilities
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Scholarships</li>
                </ul>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-semibold text-center mb-8">Scholarships and Financial Aid</h2>

                {scholarshipDetails.map((category, index) => (
                    <div key={index} className="mb-6">
                        <button
                            className="w-full text-left text-xl font-medium text-blue-600 hover:text-blue-800"
                            onClick={() => toggleDetails(category.category)}
                        >
                            {category.category}
                        </button>
                        {activeScholarship === category.category && (
                            <div className="mt-4">
                                {category.scholarships.map((scholarship, i) => (
                                    <div key={i} className="p-4 mb-4 border border-gray-300 rounded-md">
                                        <h3 className="font-semibold text-lg">{scholarship.title}</h3>
                                        <p>{scholarship.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <Footer />
        </Layout>
    );
};

export default Scholarships;
