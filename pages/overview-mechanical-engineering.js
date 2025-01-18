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
        <Layout title="Overview | Mechanical Engineering | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/overview-mechanical-engineering.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                Mechanical Engineering Department Overview
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
                        <Link href="/mechanical-engineering" className="hover:underline">
                        Mechanical Engineering
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
                        An MoU has been signed with Capital Goods for the skill development of the mechanical students on CNC Programming and Operations.                        </p>
                        <p className="text-base sm:text-lg">
                        The Department is equipped with a state-of-the-art CAD Lab with 36 systems having the latest version of design tools Auto CAD, Solidworks CATIA and Master CAM for hands-on training of  the students to make them industry fit.
                        </p>
                        <p className="text-base sm:text-lg">
                        A state-of-the-art Automobile Workshop has been set up to provide the mechanical students with training on cutting edge technology off automotive industry with life DEMO.                        </p>
                        <p className="text-base sm:text-lg">
                        Students are regularly trained on CNC Programming and Operations at CTTC, Bhubaneswar .                        </p>
                        <p className="text-base sm:text-lg">
                        Students regularly undertake one or two Automobile projects work on design and development of automotive vehicles like Gokart, Quad Bike, Effy Vehicle  and F1 Car through specific training by dept. trainer Mr. Sambit Mohanty every year.                        </p>
                        <p className="text-base sm:text-lg">
                        The Department is well equipped with two Technical Clubs named DESIGNERS Club  and  AUTOTRACK  Club to impart technical skill through relevant  industrial training, workshop and seminar as club activities beyond the college hours.              </p>
                        <p className="text-base sm:text-lg">
                        The department faculty have designed and developed three 6 ton Heat Pumps and installed them in the college hostel kitchen to restore heat from the six cooking zones and utilize it in  heating the kitchen water for cooking purpose.              </p>
                        <p className="text-base sm:text-lg">
                        The faculty members have designed and fabricated a hybrid demo model of 5 kwatt  wind mill integrated with 15kwatt solar demo model which are installed in the campus for students project learning purpose.              </p>
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
