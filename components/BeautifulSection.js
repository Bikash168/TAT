import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const ProgramsAndFeaturesSection = () => {
    const router = useRouter();

    const degreePrograms = [
        { name: "Computer Science & Engineering", slug: "cse-btech", image: "/images/Computer-Science-Engineering.jpg", link: "computer-science-engineering" },
        { name: "Electronics and Telecomm Engineering", slug: "ete-btech", image: "/images/ElectronicsTelecommEngineering.jpg", link: "electronics-telecommunication" },
        { name: "Electrical & Electronics Engineering", slug: "ee-btech", image: "/images/ElectricalElectronicsEngineering.jpg", link: "electrical-electronics" },
        { name: "Computer Science & Engineering (AI & ML)", slug: "cse-ai-ml-btech", image: "/images/Computer-Science-AI-ML.jpg", link: "cs-ai-ml" },
        { name: "Computer Science & Information Technology", slug: "csit-btech", image: "/images/ComputerScienceIT.jpg", link: "cs-it" },
        { name: "Computer Science and Technology", slug: "cst-btech", image: "/images/ComputerScienceTechnology.jpg", link: "cs-technology" },
        { name: "Computer Science & Engineering (Data Science)", slug: "csedt-btech", image: "/images/Data-Science.jpg", link: "cs-data-science" },
        { name: "Electronics Engineering", slug: "eee-btech", image: "/images/ElectronicsEngineeringVLSI.jpg", link: "electronics-vlsi" },
        { name: "Mechanical Engineering", slug: "me-btech", image: "/images/MechanicalEngineering.jpg", link: "mechanical-engineering" },
        { name: "Civil Engineering", slug: "ce-btech", image: "/images/Civil-Engineering.jpg", link: "civil-engineering" },
        { name: "Biotechnology Engineering", slug: "be-btech", image: "/images/Biotechnology-Engineering.jpg", link: "biotechnology-engineering" },
        { name: "Master in Business Administration", slug: "mba", image: "/images/MBA.jpg", link: "mba" },
        { name: "Master in Computer Application", slug: "mca", image: "/images/MCA.jpg", link: "mca" },
    ];

    const handleProgramSelect = (link) => {
        router.push(link);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
                {/* Header Section */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fadeInUp">
                        Our Programs & Features
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 animate-fadeInUp delay-150">
                        Explore our wide range of degree programs and exceptional facilities.
                    </p>
                </div>

                {/* Degree Programs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {degreePrograms.map((program, index) => (
                        <div
                            key={index}
                            className="text-center p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer bg-white animate-fadeInUp"
                            onClick={() => handleProgramSelect(program.link)}
                        >
                            <Image
                                src={program.image}
                                alt={program.name}
                                width={128}
                                height={128}
                                className="rounded-full mx-auto mb-4"
                                placeholder="blur"
                                blurDataURL="/images/placeholder.jpg"
                            />
                            <h5 className="text-gray-700 text-lg font-medium">{program.name}</h5>
                        </div>
                    ))}
                </div>

                {/* See All Programs Link */}
                <div className="mt-8 text-center">
                    <a
                        href="/departments"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center group"
                    >
                        See All Programs
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 animate-fadeInUp">
                        <Image
                            src="/images/Dedicated-Faculty.jpg"
                            alt="Dedicated Faculty"
                            className="rounded-lg mb-4"
                            width={400}
                            height={300}
                            priority
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Dedicated Faculty
                        </h3>
                        <p className="text-gray-600">
                            Experienced educators committed to delivering valuable learning experiences with a blend of traditional and modern teaching methods.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 animate-fadeInUp delay-150">
                        <Image
                            src="/images/Laboratories.jpg"
                            alt="Excellent Laboratory Facilities"
                            className="rounded-lg mb-4"
                            width={400}
                            height={300}
                            priority
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Excellent Laboratory Facilities
                        </h3>
                        <p className="text-gray-600">
                            State-of-the-art laboratories ensure practical learning opportunities for students, regularly updated to meet educational standards.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 animate-fadeInUp delay-300">
                        <Image
                            src="/images/student-development1.jpg"
                            alt="Student Development Programs"
                            className="rounded-lg mb-4"
                            width={400}
                            height={300}
                            priority
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Student Development Programs
                        </h3>
                        <p className="text-gray-600">
                            Seminars, workshops, and activities designed to enhance employability and personal growth, preparing students for real-world challenges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramsAndFeaturesSection;
