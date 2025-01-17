import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const ResearchDevelopmentPolicy = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/research-development-policy.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Research and Development Policy 2024
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
                    <li className="text-gray-600">Research and Development Policy 2024</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                {/* Research and Development Policy Content */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Introduction
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The Research and Development Policy 2024 of Trident Academy of Technology aims to facilitate and enhance research and innovation through structured R&D activities that contribute to societal development, technological advancement, and the betterment of industry practices. The policy establishes a framework for fostering a culture of inquiry and providing resources to carry out impactful research.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Objectives
                    </h2>
                    <ul className="list-disc pl-6 mb-8 text-lg text-gray-600">
                        <li>To promote innovative research that addresses real-world challenges and creates societal impact.</li>
                        <li>To foster collaboration between academia, industry, and government in R&D initiatives.</li>
                        <li>To encourage interdisciplinary research across diverse fields of study.</li>
                        <li>To ensure ethical practices in research and development activities.</li>
                        <li>To enhance the capacity of students and faculty through hands-on research experience and development projects.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Focus Areas of Research and Development
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Trident Academy of Technology focuses on various domains for R&D activities, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 mb-8 text-lg text-gray-600">
                        <li>Sustainable Energy Systems and Clean Technologies</li>
                        <li>Advanced Manufacturing and Automation</li>
                        <li>Artificial Intelligence and Machine Learning</li>
                        <li>Robotics and Automation Systems</li>
                        <li>Biomedical Engineering and Healthcare Innovations</li>
                        <li>Environmental Protection and Waste Management</li>
                        <li>Smart Cities and IoT</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        R&D Funding and Support
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The institution offers funding opportunities and infrastructural support to faculty, students, and research teams to promote and sustain R&D activities. Faculty members can apply for internal research grants, while collaborations with external agencies, such as government bodies and industry, will further increase research funding.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Collaboration and Industry Engagement
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Trident Academy of Technology encourages faculty, students, and research teams to collaborate with industries, government bodies, and international research organizations. These collaborations enable practical, real-world problem-solving through research and the application of innovations.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Research Ethics and Compliance
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Ethical considerations are central to the Research and Development Policy. Trident Academy of Technology ensures that all R&D projects adhere to guidelines for responsible conduct, intellectual property protection, confidentiality, and research integrity.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Intellectual Property and Commercialization
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The policy emphasizes the importance of protecting intellectual property generated from research activities. Faculty and students are encouraged to seek patents, copyrights, and trademarks for innovations and explore commercialization avenues to bring research outcomes to market.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Capacity Building and Training
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Trident Academy of Technology actively invests in the professional development of its faculty and students through training programs, workshops, and seminars on the latest research methodologies, technologies, and industry trends.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Conclusion
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The Research and Development Policy 2024 at Trident Academy of Technology lays down the guidelines and practices to ensure that the institution's research activities are both innovative and impactful. By fostering a collaborative, interdisciplinary, and ethically responsible research environment, we aim to contribute to technological advancements, societal development, and the improvement of industry practices.
                    </p>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default ResearchDevelopmentPolicy;
