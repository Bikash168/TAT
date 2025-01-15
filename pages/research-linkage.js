// pages/research-linkage.js

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const ResearchLinkage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/research-linkage.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Research Linkage
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
                        <Link href="/research" className="hover:underline">
                            Research
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Research Linkage</li>
                </ul>
            </nav>
            <div className="container mx-auto p-8">
                <section className="text-center">

                    <p className="text-xl text-gray-600 mb-8">
                        Off late, many engineering colleges have realized the significance of industry-academia linkages as a key ingredient for the empowerment of the faculties and students through collaborative involvement and coordinated efforts. Trident Academy of Technology has always played a lead role through Trident Research in establishing linkage with frontline industries, institutions of repute, and research organizations to provide intellectual inputs to its faculties and students.
                    </p>
                    <p className="text-xl text-gray-600 mb-8">
                        Trident Research provides one of the best working environments to motivate faculty and students to work towards the accomplishment of the targeted R&D vision of the organization.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Noteworthy Research Linkages
                    </h2>

                    {/* Research Linkages List */}
                    <ul className="space-y-6">
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Indian Institute of Science, Bangalore</h3>
                            <p className="text-gray-600">Dr. Sakuntala Mahapatra coordinated the setup of the National MEMS Design Centre (NMDC) – a Center of Excellence established in the institute in collaboration with IISc, Bangalore under NPMASS Programme.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Institute for Plasma Research (IPR), Gandhinagar</h3>
                            <p className="text-gray-600">Dr. Sakuntala Mahapatra was the Principal Investigator (PI) for a project funded by Board of Research in Fusion Science and Technology (BRFST), Gandhinagar.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Berhampur University</h3>
                            <p className="text-gray-600">Dr. Sakuntala Mahapatra is associated with Berhampur University as External Examiner and Evaluator. She is also associated with the University as a Research Advisor and guide for Ph.D. Scholars.</p>
                        </li>
                        {/* Repeat similar structure for other organizations */}

                        {/* Example with multi-level involvement */}
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">University of Lubeck, Germany; Doyen Diagonositic& Research Foundation, Kolkata</h3>
                            <p className="text-gray-600">
                                Being a principal investigator in an Indo-German project (DFG-ICMR), Dr. Arup Sarkar has taken a collaborative research initiative to establish a linkage with other international academic institutes (University of Lubeck) and a health industry (Doyen Diagnostic & Research Foundation).
                            </p>
                            <p className="text-gray-600"><strong>Industry Partner:</strong> Mr. Subir Roy, CEO, Doyen Diagonositic& Research Foundation, Kolkata</p>
                            <p className="text-gray-600"><strong>International Academic Partner:</strong> Prof. Tamas Laskay, University of Lubeck, Germany</p>
                        </li>

                        {/* You can add more such entries here for each of the linkages */}

                    </ul>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default ResearchLinkage;
