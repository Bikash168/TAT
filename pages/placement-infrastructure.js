import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const PlacementInfrastructure = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/placement-infrastructure-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Placement Infrastructure at Trident Group of Institutions
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
                        <Link href="/placement" className="hover:underline">
                            Placement
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Placement Infrastructure</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="placement-infrastructure" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">
                            Excellent Infrastructure for Placement Drives
                        </h2>
                        <p className="text-xl text-gray-700 mb-8">
                            The college boasts outstanding infrastructure to conduct placement drives, attracting prestigious National and Multinational Corporate recruiters. We are equipped with state-of-the-art facilities to ensure smooth and effective placement processes for our students.
                        </p>

                        {/* Infrastructure List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">AC Auditorium</h4>
                                <p className="text-lg text-gray-700">
                                    Capacity: 500
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Examination Halls</h4>
                                <p className="text-lg text-gray-700">
                                    2 Halls for written tests, each with a capacity of 150
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">AC Rooms for GD</h4>
                                <p className="text-lg text-gray-700">
                                    4 Rooms for Group Discussions
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">AC Cabins for Interviews</h4>
                                <p className="text-lg text-gray-700">
                                    6 Cabins for Personal Interviews
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Online Test Facility</h4>
                                <p className="text-lg text-gray-700">
                                    Facility for Online Tests with 1000 Mbps Connectivity
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default PlacementInfrastructure;
