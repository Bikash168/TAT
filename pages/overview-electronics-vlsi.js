import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';

const Overview = () => {
    const [activeTab, setActiveTab] = useState("Vision");

    // Menu Tabs
    const tabs = [
        "Vision",
        "Mission",
        "PO",
        "PEO",
        "PSO",
        "LO"
    ];

    // Content for each tab
    const content = {
        Vision: {
            title: "Vision",
            description:
                "To stand as a model of excellence in technical education and research and a collaborative hub with excellent facilities where leading civil engineering research serves the needs of a broad array of disciplines, and innovations from various fields to enrich civil engineering knowledge and practices in order to produce brilliant technocrats of the nation.",
        },
        Mission: {
            title: "Mission",
            description:
                "To produce an unbounded academic environment in technical research to serve the current generation to be proficient in National and International platforms. To excel in the field of all disciplines of Civil Engineering to facilitate the students with innovations and best practices. To promote skill development for enhancing professional and academic growth to meet social challenges of infrastructural and Research organisations of the nation. To impart leadership quality through dissemination of knowledge with professional ethical codes of conduct of society for future professional practices.",
        },
        PO: {
            title: "Program Outcomes",
            description:
                "An ability to apply knowledge of mathematics, science, and engineering. An ability to design and conduct experiments, as well as to analyze and interpret data. An ability to design a system, component, or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability. An ability to function on multidisciplinary teams. An ability to identify, formulate, and solve engineering problems. An understanding of professional and ethical responsibility. An ability to communicate effectively. The broad education necessary to understand the impact of engineering solutions in a global, economic, environmental, and societal context. A recognition of the need for, and an ability to engage in life-long learning. A knowledge of contemporary issues. An ability to use the techniques, skills, and modern engineering tools necessary for engineering practice.",
        },
        PEO: {
            title: "Program Educational Objectives",
            description:
                "The Program Educational Objectives of the Civil Engineering degree program are to prepare graduates who will be successful in their chosen career paths by: becoming productive and valuable engineers in the civil engineering sector, pursuing and completing graduate studies to become competent researchers, and/or ability to play leadership roles in their professional, as well as in their societal career.",
        },
        PSO: {
            title: "Program Specific Outcomes",
            description:
                "To acquire the knowledge of planning and design in construction of various structures in development of civil engineering with application of computer. To establish an efficient designer and consultant in various fields and technical resource person in civil engineering works. To expertise as a construction engineer in various structural works like dams, bridges, water retaining structures, harbours, airports, railways, and highways handling critical situations and managing efficiently as a safety engineer.",
        },
        LO: {
            title: "Learning Outcomes",
            description:
                "To acquire the knowledge of planning and design in construction of various structures in development of civil engineering with application of computer. To establish an efficient designer and consultant in various fields and technical resource person in civil engineering works. To expertise as a construction engineer in various structural works like dams, bridges, water retaining structures, harbours, airports, railways, and highways handling critical situations and managing efficiently as a safety engineer.",
        }
    };

    return (
        <Layout title="Overview | Electronics Engineering (VLSI Design Technology) | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Civil-Engineering.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Civil Engineering Department Overview
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-8">
                <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
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
                    <li>
                        <Link href="/electronics-vlsi" className="hover:underline">
                        Electronics Engineering (VLSI Design Technology)
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Overview</li>
                </ul>
            </nav>
            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                {/* Main Content Section */}
                <div className="w-full  space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 id="overview" className="text-xl sm:text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-base sm:text-lg">
                            The Department of Civil Engineering (CE) at Trident Academy of Technology (TAT), started in the year 2013 as an addition to the existing stream of technical degree courses. At present, it offers an undergraduate degree program of 204 credit points in Civil Engineering (B.Tech. in Civil) from Biju Pattnaik University of Technology (BPUT), Odisha.
                        </p>
                        <p className="text-base sm:text-lg">
                            The department focuses on providing a wide spectrum of knowledge and exposure on various key components of the civil engineering curricula, covering fundamental knowledge like mathematics, physics, chemistry, thermodynamics, metallurgy, and engineering drawing.
                        </p>
                        <p className="text-base sm:text-lg">
                            The department is equipped with state-of-the-art laboratory infrastructure and is supported by highly experienced faculty members and field instructors. The aim is to develop strong, dependable proficiency in various structural design skills, boosting students' confidence in designing effective solutions to real-life problems.
                        </p>
                        <p className="text-base sm:text-lg">
                            Beyond academic rigor, the department emphasizes professional skills, communication skills, and ethical considerations in civil engineering. As part of the Trident culture, students follow a "Learn with Fun" approach to nurture their intellectual, technological, and personal skills, engaging in a variety of technical and intellectual clubs and professional societies.
                        </p>
                    </div>

                    {/* Tabs Section */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded font-medium transition border-b-2 ${activeTab === tab
                                    ? "text-blue-600 border-blue-600"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Content Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">{content[activeTab].title}</h2>
                    <p className="text-base sm:text-lg">{content[activeTab].description}</p>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default Overview;
