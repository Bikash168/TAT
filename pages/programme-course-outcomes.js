import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const ProgrammeAndCourseOutcomes = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/programme-outcomes.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Programme & Course Outcomes
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
                        <Link href="/academics" className="hover:underline">
                            Academics
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Programme & Course Outcomes</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Program Outcomes (POs) Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Program Outcomes (POs)</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Engineering Graduates will be able to:
                    </p>
                    <ul className="list-decimal list-inside text-left mx-auto max-w-4xl text-gray-700 space-y-4">
                        <li>Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                        <li>Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
                        <li>Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health, safety, and environmental considerations.</li>
                        <li>Conduct investigations of complex problems: Use research-based knowledge and methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.</li>
                        <li>Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools to complex engineering activities with an understanding of the limitations.</li>
                        <li>The engineer and society: Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues relevant to professional engineering practice.</li>
                        <li>Environment and sustainability: Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of sustainable development.</li>
                        <li>Ethics: Apply ethical principles and commit to professional ethics and responsibilities in engineering practice.</li>
                        <li>Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams and multidisciplinary settings.</li>
                        <li>Communication: Communicate effectively on complex engineering activities with the engineering community and society at large through reports, presentations, and clear instructions.</li>
                        <li>Project management and finance: Demonstrate knowledge and understanding of engineering and management principles to manage projects in multidisciplinary environments.</li>
                        <li>Life-long learning: Recognize the need for, and engage in independent and life-long learning in the context of technological change.</li>
                    </ul>
                </section>

                {/* Course Outcomes (COs) Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Course Outcomes (COs)</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Course Outcomes (COs) are designed to ensure that students achieve the desired learning outcomes for each course. These outcomes are aligned with the Program Outcomes (POs) to prepare students for their professional careers.
                    </p>
                    <p className="text-lg text-gray-600">
                        Each course specifies measurable outcomes, such as the ability to apply theoretical concepts to practical problems, analyze data effectively, and design solutions considering societal and environmental aspects. Detailed COs are provided in individual course syllabi.
                    </p>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default ProgrammeAndCourseOutcomes;
