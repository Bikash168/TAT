import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const MechanicalEngineering = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Mechanical Engineering | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/MechanicalEngineering.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Mechanical Engineering Department
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
                    <li className="text-gray-600">Mechanical Engineering</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[10px] sm:mt-[20px] lg:mt-[40px] mb-16">

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
                        <span className="ml-2 text-lg font-medium">ME Menu</span>
                    </button>

                    <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
                        <h2 className="text-2xl font-semibold mb-6">ME Menu</h2>
                        <ul className="space-y-3">
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#overview">Overview</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#labs">Laboratories</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#clubs">Technical Clubs</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#projects">Projects</Link>
                            </li>
                            <li className="hover:bg-[#004D73] p-2 rounded-lg transition">
                                <Link href="#innovations">Innovations</Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-12">
                    <div id="overview" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            An MoU has been signed with Capital Goods for the skill development of the mechanical students on CNC Programming and Operations.
                        </p>
                    </div>

                    <div id="labs" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">State-of-the-Art Laboratories</h2>
                        <p>
                            The department boasts a CAD Lab equipped with 36 systems featuring the latest design tools such as AutoCAD, Solidworks, CATIA, and MasterCAM, enabling hands-on training for industry readiness. Additionally, an advanced Automobile Workshop offers exposure to cutting-edge automotive technologies through live demonstrations.
                        </p>
                    </div>

                    <div id="clubs" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Technical Clubs</h2>
                        <p>
                            The department is home to two vibrant technical clubs: DESIGNERS Club and AUTOTRACK Club. These clubs enhance technical skills through industrial training, workshops, and seminars held beyond regular college hours.
                        </p>
                    </div>

                    <div id="projects" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Student Projects</h2>
                        <p>
                            Students engage in automotive design and development projects such as Go-karts, Quad Bikes, Effy Vehicles, and F1 Cars, guided by expert trainers like Mr. Sambit Mohanty. These projects provide hands-on experience with real-world applications.
                        </p>
                    </div>

                    <div id="innovations" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Innovations</h2>
                        <p>
                            The faculty have developed and installed three 6-ton Heat Pumps to recycle heat from cooking zones for kitchen water heating. Additionally, a hybrid 5kW windmill integrated with a 15kW solar model has been fabricated and installed on campus for educational purposes.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default MechanicalEngineering;
