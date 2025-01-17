import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const GeneralGrievance = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/grievance.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    General Grievance Redressal
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
                        <Link href="/grievance" className="hover:underline">
                            Grievance
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">General Grievance Redressal</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* About Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">About General Grievance Redressal Committee</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The fundamental purpose for which the General Grievance Redressal Committee has been constituted is to address grievances and issues reported by the members of the community other than women or SC/ST aggrieved entities.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        The Grievance Redressal committee is formed with members from diverse sectors of the institution to ensure fairness and transparency.
                    </p>
                </section>

                {/* Structure Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Structure of the Committee</h3>
                    <ul className="list-disc pl-5 text-lg text-gray-600">
                        <li>One member from the top of the administration</li>
                        <li>One member from the level of professor</li>
                        <li>Senior faculty members from the college</li>
                        <li>One member from the non-teaching group</li>
                        <li>One member from the student committee</li>
                    </ul>
                </section>

                {/* Committee Members Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Members of the Committee</h3>
                    <table className="table-auto w-full text-lg text-gray-600 mb-6">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Sl. No</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">Prof(Dr) A Baral</td>
                                <td className="px-4 py-2">Dean (Student Affairs), Chairman</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">2</td>
                                <td className="px-4 py-2">Dr. S. S. Mohapatra</td>
                                <td className="px-4 py-2">Head, Cultural Affairs, Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">3</td>
                                <td className="px-4 py-2">Mr. Aditya Narayan Das</td>
                                <td className="px-4 py-2">Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">4</td>
                                <td className="px-4 py-2">Mr. Rahul Ranjan</td>
                                <td className="px-4 py-2">Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">5</td>
                                <td className="px-4 py-2">Mrs. Monalisa Rout</td>
                                <td className="px-4 py-2">Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">6</td>
                                <td className="px-4 py-2">Dr. Sonam Subhadarshini</td>
                                <td className="px-4 py-2">Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">7</td>
                                <td className="px-4 py-2">Mr. A. K. Pattanaik</td>
                                <td className="px-4 py-2">A.O., Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">8</td>
                                <td className="px-4 py-2">Mr. Soumya Samal</td>
                                <td className="px-4 py-2">Member</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Types of Grievances Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Grievances</h3>
                    <ul className="list-disc pl-5 text-lg text-gray-600">
                        <li>Physical or mental harassment of staff/student</li>
                        <li>Delay/non-receipt of salary of any staff</li>
                        <li>Working culture of staff/student</li>
                        <li>Welfare measure of staff/student</li>
                        <li>Feedback in both academic and non-academic</li>
                        <li>Safety measure of staff/student</li>
                    </ul>
                </section>

                {/* Grievance Lodging and Redressal Procedure Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Lodging and Redressal Procedure</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Steps to Lodge Complaints</h4>
                    <ul className="list-disc pl-5 text-lg text-gray-600">
                        <li>All staff and students may feel free to put up a grievance in the college.</li>
                        <li>The complaint must understand their grievance before reporting it to the authority.</li>
                        <li>All complaints must have identification (ID No).</li>
                        <li>The complaint must abide by the terms of privacy before lodging it.</li>
                        <li>The complaint must write grievances in the prescribed format and drop it in the box provided at the office.</li>
                        <li>The complaint can be lodged either in person, in writing, or by telephone.</li>
                        <li>The complaint can be lodged either offline or online.</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-gray-700 mb-2 mt-6">Redressal Procedure</h4>
                    <ul className="list-disc pl-5 text-lg text-gray-600">
                        <li>All grievances received by the Grievance Cell will act upon those cases which have been forwarded along with necessary documents.</li>
                        <li>All grievances received by the Grievance Cell will be registered in a register.</li>
                        <li>The committee will meet at least once a month to resolve the received grievances.</li>
                        <li>The Grievance Cell will ensure that the grievance has been properly solved in a stipulated time limit.</li>
                        <li>The result of the grievance will be conveyed to the concerned complainant.</li>
                    </ul>
                </section>

                {/* Download and Online Grievance Form Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Download Grievance Form</h3>
                    <p className="text-lg text-gray-600 mb-6">You can download the grievance form here:</p>
                    <a href="/forms/grievance-form.pdf" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Download Grievance Form
                    </a>

                    <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Online Grievance Form</h3>
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label htmlFor="date" className="block text-gray-700 font-semibold">Date of Complaint (required)</label>
                            <input type="date" id="date" name="date" required className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold">Your Name (required)</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="designation" className="block text-gray-700 font-semibold">Your Designation (required)</label>
                            <input type="text" id="designation" name="designation" required className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="department" className="block text-gray-700 font-semibold">Your Department (required)</label>
                            <input type="text" id="department" name="department" required className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="person-against" className="block text-gray-700 font-semibold">Name, Designation, and Department of the person(s) against whom the complaint is lodged (required)</label>
                            <input type="text" id="person-against" name="person-against" required className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold">Your Email (required)</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="contact-number" className="block text-gray-700 font-semibold">Your Contact Number (required)</label>
                            <input type="tel" id="contact-number" name="contact-number" required className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-gray-700 font-semibold">Description of the Incident(s) of Alleged Harassment (required)</label>
                            <textarea id="description" name="description" required className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md" rows="4"></textarea>
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Submit Complaint</button>
                        </div>
                    </form>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default GeneralGrievance;
