import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const FoodCenters = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/food-center.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Food Centers
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
                    <li className="text-gray-600">Food Centers</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Food Centers Inside College */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Food Centers Inside College</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The centralized food court of Trident Group of Institutions provides round-the-clock breakfast, lunch, and other refreshments and dinner. Separate canteen and cafeteria facilities are available for TAT and TACT. 
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        The TAT canteen serves South Indian snacks and breakfast along with Oriya-style lunch, while the cafeteria provides dry snacks.
                    </p>
                </section>

                {/* Nearby Food Centers */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nearby Food Centers</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The college is situated in the Infocity area. There are many nearby cafes and hanging out places available, like Cafe Coffee Day, Barista, and Berrys, to name a few.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/food-court.jpg" alt="Food Court" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/cafe.jpg" alt="Cafe" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/canteen.jpg" alt="Canteen" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/nearby-cafe.jpg" alt="Nearby Cafe" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default FoodCenters;
