import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Transport = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/transport.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Transport Facility
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
                    <li className="text-gray-600">Transport Facility</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Transport Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Transport Overview</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The college provides a dedicated transport facility through a fleet of buses. The buses cover five routes across the city to pick up students from designated bus stops. The transport service is outsourced to ensure a reliable and smooth commute for all students.
                    </p>
                </section>

                {/* Routes Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Transport Routes</h3>
                    <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
                        <li>Route I: Description of the route.</li>
                        <li>Route II: Description of the route.</li>
                        <li>Route III: Description of the route.</li>
                        <li>Route IV: Description of the route.</li>
                        <li>Route V: Description of the route.</li>
                        <li>Route VI: Description of the route.</li>
                    </ul>
                    <p className="text-lg text-gray-600 mb-6">
                        You can view or download the detailed PDF of all transport routes by clicking the link below:
                    </p>
                    <Link
                        href="/path/to/transport-routes.pdf" // Provide the path to the PDF
                        className="text-lg text-blue-600 hover:underline"
                        download
                    >
                        Download Transport Routes (PDF)
                    </Link>
                </section>

                {/* Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Transport Facility Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/bus1.jpg" alt="Bus 1" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/bus2.jpg" alt="Bus 2" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/bus3.jpg" alt="Bus 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/bus4.jpg" alt="Bus 4" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default Transport;
