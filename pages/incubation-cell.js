import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const IncubationCell = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/incubation.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Incubation Cell
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
                    <li className="text-gray-600">Incubation Cell</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="incubation-cell" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">Incubation Cell Overview</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            The Ministry of Micro, Small, and Medium Enterprises (MSME), a branch of the Government of India, is the apex body for the formulation and administration of rules, regulations, and laws relating to micro, small, and medium enterprises in India.
                        </p>
                        <p className="text-xl text-gray-700 mb-4">
                            MSME has been pleased to set up the MSME Business Incubator Cell (Trident – BI) in the year 2015 at Trident Academy of Technology, to facilitate, handhold, and promote entrepreneurs/students with creative, innovative ideas that have commercial value.
                        </p>
                        <p className="text-xl text-gray-700 mb-4">
                            A local selection committee has been constituted as per the guidelines of MSME, consisting of eminent persons from industry, banks, IITs, NGOs, and the government. This committee will assess, select, and recommend projects to the final selection committee of MSME New Delhi, which can grant seed funding up to 6.25 Lakhs based on the merit of the project.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Objectives of the Incubation Cell</h3>
                        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                            <li>To create massive awareness and sensitize the students and unemployed youth about micro, small, and medium enterprises as a career option.</li>
                            <li>To identify, nurture, and support potential entrepreneurs and transform them into self-sustaining entrepreneurs.</li>
                            <li>To function as a main hub for entrepreneurship promotion and development, providing support to grassroots organizations.</li>
                            <li>To foster linkages between the institution, industries, R&D institutions, and NGOs involved in promoting Small and Medium Enterprises (SMEs).</li>
                            <li>To catalyze and promote the development of S&T-based enterprises, enhancing employment opportunities.</li>
                            <li>To create a strong entrepreneurial ecosystem and a platform for commercialization of research and technologies developed within the institution.</li>
                            <li>To support the development, piloting, and scaling-up of innovative social impact initiatives.</li>
                            <li>To provide training to entrepreneurs in skill development, technology, and business management.</li>
                            <li>To provide a platform for IPR protection, technology transfer, and commercialization for innovators.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Major Outcomes</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            The Incubation Cell aims to produce successful entrepreneurs who contribute to the state's and nation’s economic growth. It will create new businesses, help transform ideas into commercial ventures, and develop sustainable businesses that can positively impact society and the economy.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Monitoring & Evaluation Mechanism</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            The monitoring process includes regular progress assessments, financial oversight, and evaluation of projects by both local and MSME committees. The progress of each incubated project is closely tracked to ensure the proper execution of business plans.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Process of Business Incubation</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            The incubation process starts with the identification of potential entrepreneurs, followed by project evaluation, selection by the local committee, and approval by MSME. Once selected, entrepreneurs receive mentorship, training, and funding support to develop their business ideas into sustainable enterprises.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Local Selection Committee Members</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            The committee includes eminent personalities from industry, banking, academia, and government. The committee members play a crucial role in evaluating and selecting innovative projects that have the potential to succeed and contribute to the economy.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default IncubationCell;
