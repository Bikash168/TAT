import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const IEDCProjects = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/iedc.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    IEDC Projects
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
                    <li className="text-gray-600">IEDC Projects</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="iedc-projects" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">IEDC Projects Overview</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            In recognition of the institute’s relentless efforts in finding the founders of future companies from amongst students, the Department of Science and Technology (DST), Govt. of India has sanctioned the only IEDC (Innovation & Entrepreneurship Development Center) in the state of Odisha in 2013 with funding support for 5(Five) years. This enables the college to act as an angel investor for 5 student innovative projects every year for 5 years continuously.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Projects Under IEDC</h3>

                        {/* Table of IEDC Projects */}
                        <table className="min-w-full bg-white shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-blue-600 text-white text-sm sm:text-base lg:text-lg">
                                    <th className="px-4 py-2">Sl.No</th>
                                    <th className="px-4 py-2">Project Name</th>
                                    <th className="px-4 py-2">Student Name</th>
                                    <th className="px-4 py-2">Guide Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* 2017-18 */}
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-2">1</td>
                                    <td className="px-4 py-2">Energy Meter Monitoring using IoT</td>
                                    <td className="px-4 py-2">Satyajit Mahapatra, Md Rizwan Khan</td>
                                    <td className="px-4 py-2">Shital Mohapatra, Asst. Prof., Dept of ETC</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-2">2</td>
                                    <td className="px-4 py-2">Garbage Monitoring System for Smart Cities using IoT</td>
                                    <td className="px-4 py-2">Abhirup Shankar</td>
                                    <td className="px-4 py-2">Ananya Singh, Shuvendra Ku Tripathi, Asst. Prof., Dept. of ETC</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-2">3</td>
                                    <td className="px-4 py-2">A Real-Time Foot Pressure Measurement For Early Detection of Ulcer Formation in Diabetics Using LabVIEW</td>
                                    <td className="px-4 py-2">Ankita Kumari</td>
                                    <td className="px-4 py-2">Amrita Sahoo, Sk. MD Ali, Asst. Prof., Dept of ETC</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-2">4</td>
                                    <td className="px-4 py-2">Collision Avoidance Self-Flying Drone</td>
                                    <td className="px-4 py-2">Sonu Kumar Gadewar, Ashutosh Panda, Banita Jaipuria, Ved Prakash</td>
                                    <td className="px-4 py-2">Dayal Kumar Behera, Asst. Prof., Dept. of CSE</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-2">5</td>
                                    <td className="px-4 py-2">Air conditioning with water as refrigerant</td>
                                    <td className="px-4 py-2">MD. Mehetab Alam, Hitesh Ku Mahato, Chandan Kumar, Kalim Khan</td>
                                    <td className="px-4 py-2">Rabiteja Patra, Asst. Prof., Dept. of MECH</td>
                                </tr>

                                {/* Other years (2016-17, 2015-16, etc.) can be added similarly */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default IEDCProjects;
