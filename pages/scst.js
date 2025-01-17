import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const SCSTGrievance = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/scst-grievance.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    SC/ST Grievance Redressal
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
                    <li className="text-gray-600">SC/ST Grievance Redressal</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* About Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">About SC/ST Grievance Redressal Committee</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The SC/ST Grievance Redressal Committee (SCSTGRC) addresses grievances faced by students and employees from the Scheduled Castes and Scheduled Tribes communities. The committee ensures that complaints are handled with confidentiality, fairness, and promptness.
                    </p>
                </section>

                {/* Committee Structure Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Committee Structure</h3>
                    <ul className="list-disc pl-5 text-lg text-gray-600">
                        <li>One member from the top of the Management</li>
                        <li>One member from the top of the Administration (Male)</li>
                        <li>One Legal Advisor as a member</li>
                        <li>One Social Worker as a member</li>
                        <li>One faculty member from the SC/ST community</li>
                        <li>One faculty member from each department</li>
                        <li>One member from the non-teaching staff</li>
                        <li>One student representative from the SC/ST community</li>
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
                                <td className="px-4 py-2">Prof. (Dr.) Suresh Kumar</td>
                                <td className="px-4 py-2">Chairperson</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">2</td>
                                <td className="px-4 py-2">Dr. Raghunath Patra</td>
                                <td className="px-4 py-2">Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">3</td>
                                <td className="px-4 py-2">Dr. Manju Mishra</td>
                                <td className="px-4 py-2">Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">4</td>
                                <td className="px-4 py-2">Dr. Rani Devi</td>
                                <td className="px-4 py-2">Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">5</td>
                                <td className="px-4 py-2">Ms. Sarita Rao</td>
                                <td className="px-4 py-2">Member</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">6</td>
                                <td className="px-4 py-2">Mr. Vikas Kumar</td>
                                <td className="px-4 py-2">Convener</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Types of Grievances Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of SC/ST Grievances</h3>
                    <ul className="list-disc pl-5 text-lg text-gray-600">
                        <li>Discrimination based on caste</li>
                        <li>Harassment due to caste-based issues</li>
                        <li>Social exclusion or isolation</li>
                        <li>Unequal opportunities in work or academics</li>
                        <li>Violation of affirmative action policies</li>
                    </ul>
                </section>

                {/* Lodging and Redressal Procedure Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Lodging and Redressal Procedure</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Any SC/ST student or employee who feels aggrieved can submit a written complaint to any member of the SCSTGRC. The complaint should be made in the prescribed format within 7 days of the incident, but no later than 90 days.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        A grievance box is also provided in key areas, and complaints will be addressed in a timely manner, in line with institutional policies.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        The SCSTGRC will annually review and publish a report on the grievances addressed and actions taken.
                    </p>
                </section>

                {/* Download Grievance Form Section */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Download Grievance Form</h3>
                    <p className="text-lg text-gray-600 mb-6">You can download the grievance form here:</p>
                    <a href="/forms/scst-grievance-form.pdf" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Download SC/ST Grievance Form
                    </a>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Online Grievance Form</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="complaintDate" className="block text-lg text-gray-600">Date of Complaint</label>
                            <input type="date" id="complaintDate" className="w-full p-2 border border-gray-300 rounded-lg" required />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-lg text-gray-600">Your Name</label>
                            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" required />
                        </div>

                        <div>
                            <label htmlFor="designation" className="block text-lg text-gray-600">Your Designation</label>
                            <input type="text" id="designation" className="w-full p-2 border border-gray-300 rounded-lg" required />
                        </div>

                        <div>
                            <label htmlFor="accused" className="block text-lg text-gray-600">Accused Details</label>
                            <input type="text" id="accused" className="w-full p-2 border border-gray-300 rounded-lg" required />
                        </div>

                        <div>
                            <label htmlFor="incident" className="block text-lg text-gray-600">Incident Description</label>
                            <textarea id="incident" className="w-full p-2 border border-gray-300 rounded-lg" rows="4" required></textarea>
                        </div>

                        <div>
                            <label htmlFor="witnesses" className="block text-lg text-gray-600">Witnesses (if any)</label>
                            <input type="text" id="witnesses" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>

                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit Grievance</button>
                    </form>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default SCSTGrievance;
