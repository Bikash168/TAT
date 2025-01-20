import Layout from '../components/Layout';
import Footer from '../components/Footer';

const ResearchObjectives = () => {
    return (
        <Layout title="Research Objectives | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Research.jpeg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Research Objectives
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
                <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
                    <li>
                        <a href="/" className="hover:underline flex items-center">
                            <span className="mr-1">🏠</span> Home
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/research" className="hover:underline">
                            Research
                        </a>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Objectives</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[1 px] sm:mt-[2.5px] lg:mt-[5px] mb-16">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Core Objectives of Trident Research</h2>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-4">
                        <li>To achieve excellence in academic, industrial, and societal research and innovation.</li>
                        <li>Conduct and promote interdisciplinary research and share knowledge and research outcomes through publishing papers in reputed journals and conferences.</li>
                        <li>Conduct and organize sensitization programs, seminars, and workshops by inviting guest experts in the areas of upcoming technologies to address needs for handling problems of society and industry.</li>
                        <li>Conduct research through collaboration and networking with industry partners and other research institutions for knowledge sharing.</li>
                        <li>Teaching and supervising postgraduate and undergraduate courses in the upcoming areas of technology and their application.</li>
                        <li>Providing technical expertise and consultancy support services to address issues of society and community.</li>
                        <li>
                            Promote and lead funded research projects in various domains, such as:
                            <ul className="list-disc pl-6">
                                <li>High-performance embedded systems</li>
                                <li>Conventional and non-conventional energy systems</li>
                                <li>Intelligent and autonomous systems</li>
                                <li>Biotechnology</li>
                                <li>MEMS</li>
                                <li>Wireless sensor networks</li>
                                <li>Internet of Things</li>
                                <li>Big data and information security</li>
                            </ul>
                        </li>
                        <li>Build up state-of-the-art modern research equipment to promote high-end sustainable industrial and societal research.</li>
                        <li>Host visits of distinguished scholars and industry experts, build partnerships with leading international experts and research centers.</li>
                    </ul>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ResearchObjectives;
