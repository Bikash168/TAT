import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const ResearchConsultancyPolicy = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/research-consultancy-policy.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Research and Consultancy Policy
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
                    <li className="text-gray-600">Research and Consultancy Policy</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                {/* Research and Consultancy Policy Content */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Introduction
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The Research and Consultancy Policy of Trident Academy of Technology aims to foster innovative research and provide a platform for consultancy services to industries, government bodies, and other organizations. The policy outlines the framework for conducting research, collaboration with external entities, and the involvement of faculty and students in industry-driven projects.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Objectives
                    </h2>
                    <ul className="list-disc pl-6 mb-8 text-lg text-gray-600">
                        <li>To promote high-quality research that addresses real-world challenges.</li>
                        <li>To engage faculty and students in consultancy projects for industry and government bodies.</li>
                        <li>To ensure the ethical conduct of research and consultancy activities.</li>
                        <li>To create an environment for interdisciplinary research collaborations.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Research and Consultancy Areas
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our focus areas for research and consultancy span across various domains such as:
                    </p>
                    <ul className="list-disc pl-6 mb-8 text-lg text-gray-600">
                        <li>Sustainable Energy</li>
                        <li>Environmental Protection</li>
                        <li>Information Technology and Artificial Intelligence</li>
                        <li>Manufacturing and Production Systems</li>
                        <li>Health and Medicine</li>
                        <li>Business and Management</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Collaboration and Industry Partnerships
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Trident Academy of Technology encourages collaboration with national and international industries, research organizations, and government agencies. Faculty and students are actively involved in industry projects, internships, and consultancies, enhancing their exposure and practical experience.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Funding and Resources
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The institution provides the necessary funding and infrastructure for research and consultancy initiatives. Faculty members can apply for internal grants, and external funding opportunities are actively pursued through collaborations with industry partners and government bodies.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Research Ethics and Compliance
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Trident Academy of Technology follows ethical standards in conducting research and consultancy. This includes adhering to norms related to research integrity, intellectual property rights, and confidentiality agreements with industry partners.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Intellectual Property and Commercialization
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The institution promotes the protection of intellectual property developed during research activities. Faculty and students are encouraged to patent their innovations and seek commercialization opportunities in collaboration with industry.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Conclusion
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The Research and Consultancy Policy at Trident Academy of Technology supports the development of impactful research and consultancy projects. By fostering industry-academic collaboration, we aim to drive innovation and contribute to the growth of knowledge and society.
                    </p>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default ResearchConsultancyPolicy;
