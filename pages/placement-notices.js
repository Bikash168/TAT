import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const PlacementNotices = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/placement-notices-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Placement Notices: Stay Updated with Latest Opportunities
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
                    <li>
                        <Link href="/placement-notices" className="hover:underline">
                            Placement Notices
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Placement Notices: Latest Updates for Students
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Stay informed about upcoming placement events, drives, and announcements. Our Placement Notices section provides you with all the essential information you need to take the next step toward securing your career.
                    </p>
                </section>

                {/* Notices List */}
                <div className="space-y-6">
                    {/* Notice 1 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xl font-semibold text-blue-600">Tata Consultancy Services (TCS) Campus Recruitment Drive</div>
                            <div className="text-sm text-gray-500">Date: 20th February 2025</div>
                        </div>
                        <p className="text-lg text-gray-700 mb-4">
                            TCS is conducting a campus recruitment drive for fresh graduates from various engineering disciplines. Interested candidates must register by 18th February 2025. Please follow the instructions provided in the notice for registration.
                        </p>
                        <Link href="/placement-notices/tcs-drive" className="text-blue-600 hover:underline">
                            Read more
                        </Link>
                    </div>

                    {/* Notice 2 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xl font-semibold text-blue-600">Persistent Systems Recruitment Drive</div>
                            <div className="text-sm text-gray-500">Date: 5th March 2025</div>
                        </div>
                        <p className="text-lg text-gray-700 mb-4">
                            Persistent Systems is inviting applications for the role of Software Engineer. Interested students should attend the placement pre-registration session on 3rd March 2025. Only pre-registered candidates will be allowed to participate.
                        </p>
                        <Link href="/placement-notices/persistent-systems" className="text-blue-600 hover:underline">
                            Read more
                        </Link>
                    </div>

                    {/* Notice 3 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xl font-semibold text-blue-600">Hexaware Technologies Recruitment Drive</div>
                            <div className="text-sm text-gray-500">Date: 15th March 2025</div>
                        </div>
                        <p className="text-lg text-gray-700 mb-4">
                            Hexaware Technologies will be recruiting for roles in their IT and Software Development teams. All interested candidates must submit their CVs to the placement office before the registration deadline.
                        </p>
                        <Link href="/placement-notices/hexaware-technologies" className="text-blue-600 hover:underline">
                            Read more
                        </Link>
                    </div>

                    {/* Notice 4 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xl font-semibold text-blue-600">Exilant Technologies Campus Recruitment</div>
                            <div className="text-sm text-gray-500">Date: 25th March 2025</div>
                        </div>
                        <p className="text-lg text-gray-700 mb-4">
                            Exilant Technologies is looking for talented engineering graduates for multiple roles. Students interested in the recruitment drive must attend the pre-placement talk on 23rd March 2025 for further details.
                        </p>
                        <Link href="/placement-notices/exilant-technologies" className="text-blue-600 hover:underline">
                            Read more
                        </Link>
                    </div>

                    {/* Notice 5 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xl font-semibold text-blue-600">NTT DATA Global Delivery Services Placement Drive</div>
                            <div className="text-sm text-gray-500">Date: 10th April 2025</div>
                        </div>
                        <p className="text-lg text-gray-700 mb-4">
                            NTT DATA is recruiting for various positions in the IT sector. Pre-registration is mandatory, and students must register online by 8th April 2025 to participate in the placement drive.
                        </p>
                        <Link href="/placement-notices/ntt-data" className="text-blue-600 hover:underline">
                            Read more
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    );
};

export default PlacementNotices;
