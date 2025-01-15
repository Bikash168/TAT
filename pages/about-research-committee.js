import Layout from '../components/Layout';
import Footer from '../components/Footer';

const AboutResearchCommittee = () => {
    return (
        <Layout title="About Research Committee | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/Research-Committee2.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    About Research Committee
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-8">
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
                    <li>
                        <a href="/research-committee" className="hover:underline">
                        Research-Committee
                        </a>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">About Committee</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Research and Development Journey</h2>
                    <p className="text-base sm:text-lg mb-4">
                        Through a creative visualization and understanding of the significance of research in technical institutions, our Chief Mentor—a visionary with a passion for setting up a world-class technical institution and a strong inclination for societal and industrial research—initiated the R&D movement at Trident Group of Institutions (TGI) in 1991 with the establishment of Trident Software Pvt. Ltd. (TSPL).
                    </p>
                    <p className="text-base sm:text-lg mb-4">
                        Over the years, the desire for R&D evolved, culminating in the establishment of the Spatial Planning & Analysis Research Centre (SPARC) in 1997. Recognizing education as an integral component of technological advancement, TGI took a bold step by forming a dedicated Research Committee to drive its R&D goals. Today, the Research Committee operates under the banner of Trident Research (TR), offering world-class research, development, consultancy, and extension services to achieve excellence in education and innovation.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Core Philosophy</h2>
                    <p className="text-base sm:text-lg mb-4">
                        <strong>"Holism holds that the whole is greater than the sum of its parts."</strong>
                    </p>
                    <p className="text-base sm:text-lg mb-4">
                        Holism, ambition, networking, and realism form the foundation of Trident Research’s philosophy. Despite infrastructural constraints, our technical manpower adopts networking as a core strategy for excellence, collaborating with experts and organizations worldwide. The Research Committee comprises various Research Groups working in harmony to:
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg mb-4 space-y-2">
                        <li>Identify and initiate fundamental interdisciplinary research.</li>
                        <li>Propose and execute multidisciplinary projects promoting industry-academic collaboration.</li>
                        <li>Create and combine patentable Intellectual Property (IP) components.</li>
                        <li>Design and develop prototypes and proof of concepts.</li>
                        <li>Manage and market products through incubated companies.</li>
                        <li>Deliver funded research projects in diverse application fields.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Vision for the Future</h2>
                    <p className="text-base sm:text-lg mb-4">
                        TGI is committed to fostering innovation in education through research, achieving quality and excellence as part of its academic mission. By working in small, focused groups, we aim to bridge academic learning and practical impact, ensuring that our research benefits industries, communities, and the broader society.
                    </p>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default AboutResearchCommittee;
