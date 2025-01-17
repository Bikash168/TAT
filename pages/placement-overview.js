import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const TheDepartment = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/placement-department-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Welcome to the Department of Career Development
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
                    <li className="text-gray-600">The Department</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="department-overview" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">Welcome to the dynamic hub of career development at Trident Group of Institutions</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            Our revamped Training & Placement Cell is here to empower you for success in the dynamic corporate world. We’re passionate about providing comprehensive training that equips you with the skills and confidence to thrive.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Our dedicated team stays ahead of the industry curve, identifying current job market demands and tailoring our programs accordingly.
                        </p>

                        <h3 className="text-3xl font-semibold text-blue-600 mb-6">Sharpen Your Skills, Gain the Edge</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Industry-Specific Training</h4>
                                <p className="text-lg text-gray-700">
                                    Master the in-demand skills companies are looking for.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Confidence-Building Workshops</h4>
                                <p className="text-lg text-gray-700">
                                    Conquer interviews and leave a lasting impression.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Personality Development Programs</h4>
                                <p className="text-lg text-gray-700">
                                    Polish your communication and presentation skills.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-3xl font-semibold text-blue-600 mb-6 mt-12">Meet Our Team</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Our success is driven by a team of passionate professionals:
                        </p>

                        {/* Team Table */}
                        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                            <table className="min-w-full table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xl font-semibold text-blue-600">Name</th>
                                        <th className="px-4 py-2 text-left text-xl font-semibold text-blue-600">Designation</th>
                                        <th className="px-4 py-2 text-left text-xl font-semibold text-blue-600">Mail</th>
                                        <th className="px-4 py-2 text-left text-xl font-semibold text-blue-600">Mobile Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Team Members List */}
                                    <tr>
                                        <td className="px-4 py-2">Mr. Jaydev Das</td>
                                        <td className="px-4 py-2">Executive Director</td>
                                        <td className="px-4 py-2">edp@tat.ac.in</td>
                                        <td className="px-4 py-2">9437555123</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Mr. Rudra Pratap Mohanty</td>
                                        <td className="px-4 py-2">Joint Director</td>
                                        <td className="px-4 py-2">jd@tat.ac.in</td>
                                        <td className="px-4 py-2">9776462430</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Mr. Pradipta Kr Nanda</td>
                                        <td className="px-4 py-2">Joint Director</td>
                                        <td className="px-4 py-2">jdtrg@tat.ac.in</td>
                                        <td className="px-4 py-2">9861237415</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Mr. Bharat Bhusan Pati</td>
                                        <td className="px-4 py-2">Associate Director</td>
                                        <td className="px-4 py-2">assodir1@tat.ac.in</td>
                                        <td className="px-4 py-2">7008272255</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Mr. Sarbeswar Panda</td>
                                        <td className="px-4 py-2">Associate Director</td>
                                        <td className="px-4 py-2">assodir2@tat.ac.in</td>
                                        <td className="px-4 py-2">9438486627</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Mr. Sujit Kr Das</td>
                                        <td className="px-4 py-2">Deputy Director</td>
                                        <td className="px-4 py-2">dydir1@tat.ac.in</td>
                                        <td className="px-4 py-2">7873100791</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Mr. Akshya Kumar Das</td>
                                        <td className="px-4 py-2">Deputy Director</td>
                                        <td className="px-4 py-2">dydir2@tat.ac.in</td>
                                        <td className="px-4 py-2">9437229972</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Mr. Rajesh Parida</td>
                                        <td className="px-4 py-2">Deputy Director</td>
                                        <td className="px-4 py-2">dydir3@tat.ac.in</td>
                                        <td className="px-4 py-2">8100392269</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Mr. Biplab Kumar Patra</td>
                                        <td className="px-4 py-2">Assistant Director</td>
                                        <td className="px-4 py-2">asstdir@tat.ac.in</td>
                                        <td className="px-4 py-2">7894123941</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Ms. NangTrisangi Changmai</td>
                                        <td className="px-4 py-2">Placement Executive</td>
                                        <td className="px-4 py-2">pe@tat.ac.in</td>
                                        <td className="px-4 py-2">7002419799</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-semibold text-blue-600 mt-12 mb-4">Ready to take the first step towards your dream career?</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Contact our Training & Placement Cell today and let’s unlock your full potential!
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default TheDepartment;
