import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const PlacementStatistics = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/placement-statistics-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Placement Statistics: 2936 Campus Placements During the Last 5 Years
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
                    <li className="text-gray-600">Placement Statistics</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="placement-statistics" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">
                            2936 Campus Placements During the Last 5 Years
                        </h2>
                        <p className="text-xl text-gray-700 mb-8">
                            At Trident, we pride ourselves on the strong placement support provided to our students. Over the last five years, we’ve successfully facilitated 2936 campus placements across various industries, empowering our graduates to secure rewarding career opportunities.
                        </p>

                        {/* Placement Statistics Overview */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Total Placements</h4>
                                <p className="text-3xl font-bold text-gray-800">2936+</p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Companies Visited</h4>
                                <p className="text-3xl font-bold text-gray-800">200+</p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Highest Package</h4>
                                <p className="text-3xl font-bold text-gray-800">₹50 LPA</p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Average Package</h4>
                                <p className="text-3xl font-bold text-gray-800">₹8 LPA</p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Top Recruiters</h4>
                                <ul className="list-disc pl-6 text-lg text-gray-700">
                                    <li>Amazon</li>
                                    <li>TCS</li>
                                    <li>Infosys</li>
                                    <li>Wipro</li>
                                    <li>Accenture</li>
                                    <li>Cognizant</li>
                                </ul>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Placement Rate</h4>
                                <p className="text-3xl font-bold text-gray-800">95%</p>
                            </div>
                        </div>

                        {/* Key Placement Highlights */}
                        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold text-blue-600 mb-6">
                                Key Placement Highlights
                            </h3>
                            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
                                <li>High placement rate with 95% of students placed in top companies</li>
                                <li>Over 200+ companies visited the campus for recruitment drives</li>
                                <li>Highest salary package offered: ₹50 LPA</li>
                                <li>Averaging ₹8 LPA as the salary package for most students</li>
                                <li>Well-established relationships with industry giants like Amazon, Infosys, and Accenture</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-2xl font-bold text-blue-600">Ready to be a part of our success story?</h3>
                            <p className="text-lg text-gray-700 mt-4">
                                At Trident, we are committed to shaping the future of our students. Join us to start your journey toward a successful career with excellent placement opportunities.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default PlacementStatistics;
