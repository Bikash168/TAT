import Layout from '../components/Layout';
import Footer from '../components/Footer';

const IQAC = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/iqac-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Internal Quality Assurance Cell (IQAC)
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
                        <a href="/iqac" className="hover:underline">
                            IQAC
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Enhancing Quality through Structured Planning and Execution
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        The Internal Quality Assurance Cell (IQAC) at Trident Academy of Technology (TAT) plays a pivotal role in ensuring the quality standards of education and research through a systematic process cycle. This process follows the stages of planning, developing, executing, monitoring, and analyzing to achieve the Institute's goals.
                    </p>
                </section>

                {/* IQAC Overview Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">About IQAC at TAT</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        IQAC at Trident Academy of Technology acts as the backbone of the academic and research processes, ensuring that the institution maintains high standards. The cell functions under the guidelines of NAAC (National Assessment and Accreditation Council) and continuously strives to meet the institution's vision and mission through a structured quality process cycle.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Established on 16th July 2015, IQAC focuses on improving academic quality and continuously enhancing the teaching-learning process. By analyzing data from previous academic years, it helps to identify areas of improvement and implement necessary steps to achieve excellence in education.
                    </p>
                </section>

                {/* IQAC Process Cycle Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">IQAC Process Cycle</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The IQAC follows a continuous process cycle that is designed to maintain and enhance the quality of academic and research activities at Trident Academy of Technology. The cycle includes the following key stages:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-blue-600">1. Planning</h4>
                            <p>
                                The first step involves setting goals and objectives based on the institution's vision, aligning them with national and international quality standards.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-blue-600">2. Developing</h4>
                            <p>
                                During this phase, strategic plans, systems, and policies are developed to achieve the set objectives. Faculty and administrative involvement are crucial for success.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-blue-600">3. Executing</h4>
                            <p>
                                This phase focuses on the implementation of planned activities and systems. Faculty and stakeholders work together to execute strategies to improve the quality of education and research.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-blue-600">4. Monitoring</h4>
                            <p>
                                IQAC ensures that all activities and processes are being executed as planned, monitoring progress, and identifying any deviations to make timely corrections.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-blue-600">5. Analyzing</h4>
                            <p>
                                The final phase focuses on analyzing the outcomes of executed activities and making data-driven decisions to further enhance the quality of the institution's processes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* IQAC Goals and Objectives Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">IQAC Objectives</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The primary objectives of the IQAC at Trident Academy of Technology are to:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Maintain and improve academic standards in all programs</li>
                        <li>Ensure continuous development of the teaching and learning process</li>
                        <li>Promote faculty development and innovation in teaching methodologies</li>
                        <li>Enhance research activities and collaborations with national and international institutions</li>
                        <li>Foster an environment of self-assessment and quality assurance across all departments</li>
                    </ul>
                </section>

                {/* Conclusion Section */}
                <section className="text-center py-12">
                    <p className="text-xl text-gray-700 mb-6">
                        IQAC at Trident Academy of Technology plays a crucial role in maintaining and enhancing quality through a structured process cycle. With a strong focus on continuous improvement, the cell strives to achieve excellence in education and research, ensuring that the institution remains a leader in academic quality.
                    </p>
                </section>

            </div>

            <Footer />
        </Layout>
    );
};

export default IQAC;
