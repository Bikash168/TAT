import Layout from '../components/Layout';
import Footer from '../components/Footer';

const GuardiansMeet = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/guardians-meet-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Guardians Meet
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-10">
                <ul className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
                    <li>
                        <a href="/" className="hover:underline flex items-center">
                            <span className="mr-1">🏠</span> Home
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/best-practices" className="hover:underline">
                            Best Practices
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/guardians-meet" className="hover:underline">
                            Guardians Meet
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Importance of Guardians Meet
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Guardians play a crucial role in the academic success and personal development of their children. The Guardians Meet offers a platform for communication, feedback, and guidance for students' growth.
                    </p>
                </section>

                {/* Guardians Meet Details */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Why is it Necessary?</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Parents are the ultimate guides to their child’s success. Regular meetings with faculty members help in assessing the student's academic progress and addressing any issues related to their performance and discipline.
                    </p>
                </section>

                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">What We Do?</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The Guardians Meet provides an opportunity for parents to have one-on-one interactions with the Director of Academics and the Departmental Heads to discuss concerns about their children’s academic and personal progress.
                    </p>
                </section>

                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">What We Have Done!</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        In 2020-21, the Guardians Meet was held from 06-01-2021 to 11-01-2021, with 126 guardians attending the sessions. Below is a detailed report of the meetings held for various departments:
                    </p>
                    <table className="table-auto w-full text-left mb-8">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">Department</th>
                                <th className="px-4 py-2 border">Date of Meetings</th>
                                <th className="px-4 py-2 border">No. of Parents</th>
                                <th className="px-4 py-2 border">Total Strength</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border">Civil Engineering</td>
                                <td className="px-4 py-2 border">06-01-2021</td>
                                <td className="px-4 py-2 border">14</td>
                                <td className="px-4 py-2 border">32</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">EEE & EE</td>
                                <td className="px-4 py-2 border">07-01-2021</td>
                                <td className="px-4 py-2 border">24</td>
                                <td className="px-4 py-2 border">46</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">ETC</td>
                                <td className="px-4 py-2 border">08-01-2021</td>
                                <td className="px-4 py-2 border">11</td>
                                <td className="px-4 py-2 border">24</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Mechanical</td>
                                <td className="px-4 py-2 border">09-01-2021</td>
                                <td className="px-4 py-2 border">28</td>
                                <td className="px-4 py-2 border">64</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">CSE, CST, CSIT, CS(AIML)</td>
                                <td className="px-4 py-2 border">11-01-2021</td>
                                <td className="px-4 py-2 border">49</td>
                                <td className="px-4 py-2 border">116</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Important Inputs from Guardians</h3>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>Individual guidance for students</li>
                        <li>PTM should be conducted once a year</li>
                        <li>Handling of student complaints</li>
                        <li>Proper communication with parents</li>
                        <li>More technical training for students</li>
                        <li>Helping students with training and internships</li>
                        <li>More focus on overall development</li>
                        <li>Extra classes for weaker students</li>
                        <li>Arranging placements for pass-out students</li>
                    </ul>
                </section>

                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Advice to Guardians</h3>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>Encourage children to attend all classes regularly</li>
                        <li>Monitor your child's activities beyond the curriculum hours</li>
                        <li>Be aware of your child's friends and social circle</li>
                        <li>Ensure proper utilization of funds provided for expenses</li>
                        <li>Look out for any bad habits and guide them away from them</li>
                        <li>Encourage open communication about personal and academic matters</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default GuardiansMeet;
