import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const WaterQuality = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/water-quality.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Water Quality
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
                    <li className="text-gray-600">Water Quality</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Water Quality Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Water Quality Overview</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The institute is committed to ensuring a constant supply of safe drinking water to all its students and staff. To maintain high water quality standards, various systems like Aquaguards, borewells, overhead tanks, and submersible pumps are in place.
                    </p>
                </section>

                {/* Aquaguard Systems */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Aquaguard Systems</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        The institute is equipped with 35 Aquaguard AG 200 units and 4 Aquaguard Cooler cum Purifiers (AGCCP) for providing purified drinking water. These systems are regularly maintained under an Annual Maintenance Contract with Forbes Pro Water Solutions to ensure optimal performance.
                    </p>
                </section>

                {/* Borewells and Overhead Tanks */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Borewells and Overhead Tanks</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        The institute has multiple borewells and overhead tanks spread across the campus, including the college buildings and hostels. These tanks are thoroughly cleaned twice a year by Aqua Clean representatives to ensure water remains safe and free from contaminants.
                    </p>
                </section>

                {/* Water Quality Testing */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Water Quality Testing</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        To ensure the quality of drinking water, the water stored in overhead tanks is sent to the Odisha Government Water Testing Facility twice a year. These tests include microbiological analysis and other essential quality checks to meet health and safety standards.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/aquaguard.jpg" alt="Aquaguard System" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/borewell.jpg" alt="Borewell" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/overhead-tank.jpg" alt="Overhead Tank" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/water-testing.jpg" alt="Water Testing" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default WaterQuality;
