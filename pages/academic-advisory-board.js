import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const AcademicAdvisoryBoard = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/academic-advisory-board.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Academic Advisory Board
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
                    <li className="text-gray-600">Academic Advisory Board</li>
                </ul>
            </nav>
            <div className="container mx-auto p-8">
                <section className="text-center mb-10">
                    <p className="text-xl text-gray-600 mb-8">
                        There is an Academic Advisory Board of Trident Group, consisting of the following dignitaries, who meet half-yearly in the college to take stock of the routine running of the institutions and its future vision and endeavor towards excellence. Their valuable guidance has been a tremendous help for Trident Group to achieve a fast-paced success in operation.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Academic Advisory Board Members
                    </h2>

                    {/* Members Table */}
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 p-2 text-left">Sl No.</th>
                                <th className="border border-gray-300 p-2 text-left">Designation</th>
                                <th className="border border-gray-300 p-2 text-left">Name</th>
                                <th className="border border-gray-300 p-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">1</td>
                                <td className="border border-gray-300 p-2">Principal, TAT, Bhubaneswar</td>
                                <td className="border border-gray-300 p-2">Dr. Deba Narayan Pattanayak</td>
                                <td className="border border-gray-300 p-2">Chairman</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">2</td>
                                <td className="border border-gray-300 p-2">Professor & Head, Dept. of CSE, TAT</td>
                                <td className="border border-gray-300 p-2">Dr. Abhaya Kumar Samal</td>
                                <td className="border border-gray-300 p-2">Convenor</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">3</td>
                                <td className="border border-gray-300 p-2">Academic Representative from IIT, Kharagpur</td>
                                <td className="border border-gray-300 p-2">Dr. Rajib Mall</td>
                                <td className="border border-gray-300 p-2">Ex officio Member</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">4</td>
                                <td className="border border-gray-300 p-2">Industry Representative from TCS, Bhubaneswar</td>
                                <td className="border border-gray-300 p-2">Dr. D. P Swain</td>
                                <td className="border border-gray-300 p-2">Ex officio Member</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">5</td>
                                <td className="border border-gray-300 p-2">Professor, Dept. of MBA, TAT, Bhubaneswar</td>
                                <td className="border border-gray-300 p-2">Dr. Pravat Kumar Mohanty</td>
                                <td className="border border-gray-300 p-2">Member</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">6</td>
                                <td className="border border-gray-300 p-2">Professor & Head, Dept. of ETC, TAT, Bhubaneswar</td>
                                <td className="border border-gray-300 p-2">Dr. Sakuntala Mahapatra</td>
                                <td className="border border-gray-300 p-2">Member</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">7</td>
                                <td className="border border-gray-300 p-2">Professor & Head, Dept. of Mathematics, TAT, Bhubaneswar</td>
                                <td className="border border-gray-300 p-2">Dr. Amarendra Baral</td>
                                <td className="border border-gray-300 p-2">Member</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default AcademicAdvisoryBoard;
