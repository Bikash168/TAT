import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const TimeTable = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/time-table-banner.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Time Table
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
                    <li className="text-gray-600">Time Table</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                <section className="text-center mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Time Table for Odd Semester 2023-2024
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Below you can find the time tables for different semesters. Click on the links to download the PDFs.
                    </p>

                    <ul className="list-disc list-inside text-left mx-auto max-w-4xl text-gray-700 space-y-4">
                        <li>
                            <Link href="/documents/2nd-semester-btech.pdf" target="_blank" className="text-blue-600 hover:underline">
                                2nd Semester B.Tech.
                            </Link>
                        </li>
                        <li>
                            <Link href="/documents/4th-semester-btech.pdf" target="_blank" className="text-blue-600 hover:underline">
                                4th Semester B.Tech.
                            </Link>
                        </li>
                        <li>
                            <Link href="/documents/6th-semester-btech.pdf" target="_blank" className="text-blue-600 hover:underline">
                                6th Semester B.Tech.
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default TimeTable;
