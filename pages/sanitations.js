import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Sanitations = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/sanitations.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Sanitation and Cleanliness
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
                    <li className="text-gray-600">Sanitation and Cleanliness</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Sanitation Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sanitation and Cleanliness</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Trident campus is renowned for its commitment to cleanliness and sanitation, which has been maintained since its inception. The college has engaged an outside contractor for cleaning and sanitation services at a cost of approximately Rs. 30 lakhs per year. This ensures the highest standards of cleanliness within the academic and hostel buildings.
                    </p>
                </section>

                {/* Cleaning and Maintenance */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cleaning and Maintenance</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Regular cleaning is carried out in all parts of the academic buildings, including toilets and corridors of the hostels. The cleaning contractor ensures that the common areas are maintained on a daily basis. In addition, students are responsible for cleaning their rooms on a daily basis, with the cleaning contractor performing a thorough cleaning once a week.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        Every room on campus is provided with a dustbin, which is emptied and cleaned daily to maintain hygiene and cleanliness. This system ensures a consistently clean environment for all students and staff.
                    </p>
                </section>

                {/* Toilet Cleaning */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Toilet Cleaning</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The toilets in both the academic buildings and hostels are cleaned twice a day using appropriate disinfecting materials. This ensures that the facilities remain hygienic and safe for use at all times, maintaining high standards of cleanliness and sanitation across the campus.
                    </p>
                </section>

                {/* Sewerage Treatment */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sewerage Treatment</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The campus is equipped with a 100 KL per day (KLD) sewerage treatment plant using bio-film technology. This plant treats the wastewater generated on campus, and the treated water is then recycled and used for gardening purposes. This eco-friendly solution helps conserve water and supports the campus’s sustainability efforts.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/toilet-cleaning.jpg" alt="Toilet Cleaning" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/clean-campus.jpg" alt="Clean Campus" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/sewerage-treatment.jpg" alt="Sewerage Treatment Plant" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default Sanitations;
