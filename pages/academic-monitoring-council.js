import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const AcademicMonitoringCouncil = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/academic-monitoring-council.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Academic Monitoring Council
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
                    <li className="text-gray-600">Academic Monitoring Council</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                {/* Introduction Section */}
                <section className="text-center mb-10">
                    <p className="text-xl text-gray-600 mb-8">
                        Academic Monitoring System is a diagnostic approach, cross-referencing between curriculum & instructional elements. It is expected to provide guidance & support in improving the curriculum implementation at the institute level. High-quality monitoring programs can help the institute & faculty maintain enthusiasm. If teaching is not systematically planned, learning may not occur.
                    </p>
                </section>

                {/* Vision and Mission Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision and Mission of the Council</h2>
                    <p className="text-gray-600 mb-6">
                        <strong>Vision:</strong> To ensure systematic implementation of the curriculum to enhance learning outcomes and faculty engagement.
                    </p>
                    <p className="text-gray-600">
                        <strong>Mission:</strong> To provide a structured academic monitoring system that fosters excellence in education through collaboration, planning, and regular evaluation.
                    </p>
                </section>

                {/* Key Parameters Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Parameters</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Alignment of teaching plans with the curriculum.</li>
                        <li>Regular feedback from students and faculty.</li>
                        <li>Evaluation of teaching methodologies and their effectiveness.</li>
                        <li>Periodic review meetings to assess progress and challenges.</li>
                    </ul>
                </section>

                {/* Members of the Council */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Members of the Council</h2>

                    {/* Members Table */}
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 p-2 text-left">Designation</th>
                                <th className="border border-gray-300 p-2 text-left">Name</th>
                                <th className="border border-gray-300 p-2 text-left">Contact</th>
                                <th className="border border-gray-300 p-2 text-left">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">Academic Monitoring Committee</td>
                                <td className="border border-gray-300 p-2">Dr. A. Baral</td>
                                <td className="border border-gray-300 p-2">9337779181</td>
                                <td className="border border-gray-300 p-2">deanssh@tat.ac.in</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">English Department</td>
                                <td className="border border-gray-300 p-2">Manoj Kumar Rath</td>
                                <td className="border border-gray-300 p-2">9937171553</td>
                                <td className="border border-gray-300 p-2">manoj.rath@tat.ac.in</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">CSE Department</td>
                                <td className="border border-gray-300 p-2">Sudhansu Ranjan Lenka</td>
                                <td className="border border-gray-300 p-2">9937245866</td>
                                <td className="border border-gray-300 p-2">sudhansu.lenka@tat.ac.in</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">ETC Department</td>
                                <td className="border border-gray-300 p-2">Minu Samantaray</td>
                                <td className="border border-gray-300 p-2">9692304848</td>
                                <td className="border border-gray-300 p-2">minu.samantaray@tat.ac.in</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default AcademicMonitoringCouncil;
