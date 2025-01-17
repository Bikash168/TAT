import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const IEDCPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/iedc-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Innovation and Entrepreneurship Development Centre (IEDC)
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
                    <li className="text-gray-600">IEDC</li>
                </ul>
            </nav>

            {/* IEDC Information */}
            <div className="container mx-auto p-8">
                <section id="iedc-info" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">Innovation and Entrepreneurship Development Centre (IEDC)</h2>
                        <p className="text-xl text-gray-700 mb-6">
                            The Innovation and Entrepreneurship Development Centre (IEDC) is an initiative by the Ministry of Science & Technology, Government of India. 
                            The centre's mission is to develop an institutional mechanism to foster innovation and entrepreneurship among students and faculty.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Trident Academy of Technology, Bhubaneswar, has established IEDC under the sponsorship of the Department of Science & Technology, Government of India, 
                            with the goal of promoting an entrepreneurial culture in the institution.
                        </p>
                    </div>
                </section>

                {/* Vision and Mission Section */}
                <section id="vision-mission" className="py-12 bg-white">
                    <div className="container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-blue-600 mb-6">Vision and Mission</h3>
                        <p className="text-xl text-gray-700 mb-6">
                            The vision of IEDC is to create an environment where innovation and entrepreneurship thrive. 
                            The mission is to equip students and faculty with the tools and knowledge necessary to develop entrepreneurial ventures.
                        </p>
                    </div>
                </section>

                {/* Objectives Section */}
                <section id="objectives" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-blue-600 mb-6">Objectives</h3>
                        <ul className="list-disc text-lg text-gray-700 mb-6 mx-auto max-w-3xl text-left">
                            <li>Foster entrepreneurial culture among students and faculty.</li>
                            <li>Provide support for the commercialization of ideas and technologies.</li>
                            <li>Encourage innovation in various sectors through collaboration.</li>
                            <li>Enhance skill development to promote start-ups and new ventures.</li>
                        </ul>
                    </div>
                </section>

                {/* Advisory Board Section */}
                <section id="advisory-board" className="py-12 bg-white">
                    <div className="container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-blue-600 mb-6">Advisory Board</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            The IEDC is guided by a dedicated advisory board that helps shape its initiatives and ensure its alignment with industry standards and academic goals.
                        </p>
                        {/* Advisory Board Members (Placeholder) */}
                        <div className="flex justify-center gap-12">
                            <div className="text-center">
                                <img src="/path/to/advisor1.jpg" alt="Advisor 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
                                <h4 className="font-bold text-xl">Dr. John Doe</h4>
                                <p className="text-sm text-gray-600">Chairman, IEDC Advisory Board</p>
                            </div>
                            <div className="text-center">
                                <img src="/path/to/advisor2.jpg" alt="Advisor 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
                                <h4 className="font-bold text-xl">Dr. Jane Smith</h4>
                                <p className="text-sm text-gray-600">Member, IEDC Advisory Board</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Scrutiny Section */}
                <section id="project-scrutiny" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-blue-600 mb-6">Project Scrutiny</h3>
                        <p className="text-xl text-gray-700 mb-6">
                            IEDC conducts regular project scrutiny to ensure the ideas and projects align with the entrepreneurial goals of the institution. 
                            This process helps refine concepts, identify challenges, and provide support in building sustainable ventures.
                        </p>
                    </div>
                </section>

                {/* Entrepreneurship Events Section */}
                <section id="entrepreneurship-events" className="py-12 bg-white">
                    <div className="container mx-auto text-center">
                        <h3 className="text-3xl font-bold text-blue-600 mb-6">Entrepreneurship Events</h3>
                        <p className="text-xl text-gray-700 mb-6">
                            IEDC organizes various events to promote entrepreneurship, including awareness camps, workshops, and training sessions.
                        </p>
                        <div className="flex justify-center gap-8">
                            {/* Event 1 */}
                            <div className="text-center">
                                <img src="/path/to/event1.jpg" alt="Event 1" className="h-48 w-48 mx-auto rounded-md shadow-md hover:shadow-lg transition duration-300" />
                                <h4 className="text-xl font-semibold mt-4">Entrepreneurship Awareness Camp</h4>
                                <p className="text-sm text-gray-600">September 24-26, 2018</p>
                            </div>
                            {/* Event 2 */}
                            <div className="text-center">
                                <img src="/path/to/event2.jpg" alt="Event 2" className="h-48 w-48 mx-auto rounded-md shadow-md hover:shadow-lg transition duration-300" />
                                <h4 className="text-xl font-semibold mt-4">Innovation Workshop</h4>
                                <p className="text-sm text-gray-600">March 12-14, 2019</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default IEDCPage;
