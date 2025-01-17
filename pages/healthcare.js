import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Healthcare = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/healthcare.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Healthcare
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
                    <li className="text-gray-600">Healthcare</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Healthcare Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Healthcare Overview</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Since the session 2014-2015, Trident Group of Institutions has prioritized the health and well-being of its students and staff. A dedicated doctor’s chamber is located on the ground floor of the Administrative Block to cater to immediate medical needs.
                    </p>
                </section>

                {/* Medical Visits */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Medical Visits</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Twice a week, a medicine specialist and a lady doctor visit the campus to take care of health issues. These visits ensure that students and staff have easy access to medical consultation without having to leave the campus.
                    </p>
                </section>

                {/* Health Checkups */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Regular Health Checkups</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        The college management recommends regular health checkups for all hostel inmates to ensure that students are in good health. This proactive approach helps in identifying and addressing health concerns early on.
                    </p>
                </section>

                {/* Emergency Health Services */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Health Services</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        In the case of emergency health-related issues, students are directed to specialty and super-specialty hospitals in the city, including KIIMS, Kalinga Hospitals, CARE Hospitals, AYUSH Hospitals, Kar Clinic, and others. While the immediate treatment costs are covered by the college, the student or their parents are responsible for the ongoing medical expenses.
                    </p>
                </section>

                {/* Ambulance Services */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">24/7 Ambulance Services</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        To ensure prompt medical assistance, the college provides 24/7 ambulance services. This service is available for any medical emergencies that may arise, ensuring the safety and health of all students and staff.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/healthcare-facility.jpg" alt="Healthcare Facility" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/doctor.jpg" alt="Doctor" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/ambulance.jpg" alt="Ambulance Service" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/hospital.jpg" alt="Nearby Hospital" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default Healthcare;
