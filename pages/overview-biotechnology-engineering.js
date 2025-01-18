import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';

const Overview = () => {
    const [activeTab, setActiveTab] = useState("Vision");

    // Menu Tabs
    const tabs = ["Vision", "Mission", "PO", "PEO", "PSO", "LO"];

    // Content for each tab
    const content = {
        Vision: {
            title: "Vision",
            description:
                "To produce competent biotechnologists who can use premium processes and applications to improve agriculture, industry, and health care sectors and provide sustainable development to the present society.",
        },
        Mission: {
            title: "Mission",
            description:
                "To inculcate the spirit of innovation and creativity in young minds to solve human problems with sound research aptitude. " +
                "To attain a leading role in the field of Biotechnology Research and Development and promote incubation centers for industries and entrepreneurs. " +
                "To enhance the skills of students through training to excel in the bio-industry. " +
                "To create a conducive research environment in different areas of Biotechnology pertinent to society, environment, and industry. " +
                "To produce good researchers, entrepreneurs, and industrialists in the field of Biotechnology.",
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
                "To acquire the knowledge of planning and design in the construction of various structures in the development of civil engineering with the application of computers. To establish as efficient designers and consultants in various fields and technical resource persons in civil engineering works. To excel as construction engineers in various structural works like dams, bridges, water-retaining structures, harbors, airports, railways, and highways handling critical situations and managing efficiently as safety engineers.",
        },
        LO: {
            title: "Learning Outcomes",
            description:
                "To acquire the knowledge of planning and design in construction of various structures in development of civil engineering with application of computer. To establish an efficient designer and consultant in various fields and technical resource person in civil engineering works. To expertise as a construction engineer in various structural works like dams, bridges, water retaining structures, harbours, airports, railways, and highways handling critical situations and managing efficiently as a safety engineer.",
        },
    };

    return (
        <Layout title="Overview | Biotechnology Engineering | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/overview-biotechnology-engineering.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Biotechnology Engineering Department Overview
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
                        <Link href="/biotechnology-engineering" className="hover:underline">
                            Biotechnology Engineering
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Overview</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                {/* Overview Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 id="overview" className="text-xl sm:text-2xl font-bold mb-4">Overview</h2>
                    <p className="text-base sm:text-lg">
                    The Department of Biotechnology at Trident Academy of Technology (TAT), started in the year 2018 as an addition to the existing stream of technical degree courses, at present offers an undergraduate degree program of 160 credit points in B.Tech. in Biotechnology from Biju Patnaik University of Technology (BPUT), Odisha and the program curricula are distributed over 8 semesters. Presently there are 10 dedicated, committed and highly experienced teaching faculty members in this department with various specializations like Recombinant DNA Technology, Environmental Biotechnology, Immunology, Immunotechnology, Bioprocess Technology, Industrial Microbiology, Bioinformatics, Protein Engineering, Enzyme Technology, Animal Biotechnology, Plant Biotechnology, Molecular Biology and Biochemistry.
                    </p>
                    <p className="text-base sm:text-lg mt-4">
                    Department organizes workshops and seminars regularly for the interest of students and also organizes study tour for them to various industries and national research institutes. Professors and Technical experts are invited from various universities and industries for providing additional advanced information in the field of biotechnology for the benefits of students. Apart from rigorously drilling down the students with regular classroom delivery on academic curricula as per BPUT guidelines, the department emphasizes on making students to identify, analyze, design and solve problems related to the field of biotechnology with strong foundation on the basic science, biology and IT related application. Department not only provides good theoretical and practical concept but also motivate and help the students to prepare for various competitive examinations like GATE, CSIR-NET, IARI, etc. In general, as a part of the Trident culture, students are plugged in with the “learn with fun” approach to nurture their intellectual, technological and personal skills development by involving them through varieties of technical and intellectual club, and professional societies. Academic environment at Trident is sufficient enough to elicit their mindset for life long learning to maintain them as successful person that are very much necessary for success in research, industry and society.
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
