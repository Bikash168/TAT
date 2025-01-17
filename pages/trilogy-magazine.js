import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const TrilogyMagazine = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/sports.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                Trilogy Magazine
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
                        <Link href="/activities" className="hover:underline">
                            Activities
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Trilogy Magazine</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="trilogy-magazine" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">TRILOGY: The Annual Magazine</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            Dear Staff/Student Members,
                            <br />
                            Please provide your views for improvement by filling up the form below by 24/9/2024.
                        </p>

                        {/* Feedback Form */}
                        <form action="#" method="POST" className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-lg">
                            <div className="mb-4">
                                <label for="name" className="block text-gray-700">Your Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div className="mb-4">
                                <label for="feedback" className="block text-gray-700">Your Feedback</label>
                                <textarea id="feedback" name="feedback" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                            </div>
                            <div className="flex justify-center mb-4">
                                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                                    Submit Feedback
                                </button>
                            </div>
                        </form>

                        <div className="my-12">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Download the Latest Editions of TRILOGY:</h3>
                            <div className="flex justify-center gap-8">
                                {/* PDF Download Buttons */}
                                <div className="text-center">
                                    <a href="/path/to/edition1.pdf" className="block mb-4">
                                        <img src="/path/to/image1.jpg" alt="TRILOGY Edition 1" className="h-48 w-48 mx-auto rounded-md shadow-md hover:shadow-lg transition duration-300" />
                                    </a>
                                    <a href="/path/to/edition1.pdf" className="block text-blue-600 font-medium">Download PDF</a>
                                </div>

                                <div className="text-center">
                                    <a href="/path/to/edition2.pdf" className="block mb-4">
                                        <img src="/path/to/image2.jpg" alt="TRILOGY Edition 2" className="h-48 w-48 mx-auto rounded-md shadow-md hover:shadow-lg transition duration-300" />
                                    </a>
                                    <a href="/path/to/edition2.pdf" className="block text-blue-600 font-medium">Download PDF</a>
                                </div>

                                <div className="text-center">
                                    <a href="/path/to/edition3.pdf" className="block mb-4">
                                        <img src="/path/to/image3.jpg" alt="TRILOGY Edition 3" className="h-48 w-48 mx-auto rounded-md shadow-md hover:shadow-lg transition duration-300" />
                                    </a>
                                    <a href="/path/to/edition3.pdf" className="block text-blue-600 font-medium">Download PDF</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default TrilogyMagazine;
