import Layout from '../components/Layout';
import Footer from '../components/Footer';

const BestPractice1 = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/teaching-learning.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Best Practice – 1: Teaching, Learning and Continuous Monitoring of Academic Standards
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
                    <li>Best Practice – 1</li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Teaching, Learning and Continuous Monitoring of Academic Standard
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        At Trident Academy of Technology, we prioritize excellence in teaching, learning, and continuous monitoring of academic standards. Our approach combines student-centered methodologies, rigorous curriculum, and regular assessments to ensure academic growth and quality outcomes.
                    </p>
                </section>

                {/* Objectives Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Objectives of the Practice</h3>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Ability to apply knowledge of mathematics, science, and engineering.</li>
                        <li>Ability to identify, formulate, and solve engineering problems.</li>
                        <li>Ability to design systems and processes to meet needs within constraints like economic, environmental, and social factors.</li>
                        <li>Ability to function on multidisciplinary teams.</li>
                        <li>Use of modern engineering tools and equipment for problem analysis.</li>
                        <li>Understanding professional and ethical responsibility.</li>
                        <li>Knowledge of the impact of engineering solutions on society.</li>
                        <li>Engagement in lifelong learning and self-education.</li>
                        <li>Ability to use engineering tools for competitive exams and professional practices.</li>
                    </ul>
                </section>

                {/* Context Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">The Context</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Trident Academy of Technology boasts a highly talented faculty, committed to academic excellence. The Academic Council oversees institutional strategies for planning, upgrading, and creating the necessary infrastructure to enhance teaching, learning, and monitoring. The following strategies have been implemented:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Adoption of student-centric teaching methodology.</li>
                        <li>Preparation of extensive course material.</li>
                        <li>Projects undertaken by students in their final year.</li>
                        <li>Development of semester lab manuals.</li>
                        <li>Regular feedback from students, parents, and employers.</li>
                        <li>Frequent student-led seminars.</li>
                    </ul>
                </section>

                {/* The Practice Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">The Practice</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The institution takes comprehensive steps to improve teaching, learning, and academic monitoring:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Quality and methods of lectures vary according to topics (lectures, group discussions, quizzes, assignments, etc.).</li>
                        <li>Courses include practical sessions, projects, seminars, and viva-voce components in addition to classroom learning.</li>
                        <li>Departments provide instructional materials to students to aid understanding.</li>
                        <li>Regular feedback and evaluation through student surveys and stakeholder meetings.</li>
                        <li>Faculty members undergo monthly self-appraisal and department meetings to review progress and activities.</li>
                        <li>IQAC monitors and applies quality benchmarks for academic plans and policies.</li>
                    </ul>
                </section>

                {/* Evidence of Success Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Evidence of Success</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The impact of these practices is reflected in various positive outcomes:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Enviable university results.</li>
                        <li>Notable student placements.</li>
                        <li>Parents' appreciation for academic quality.</li>
                        <li>Increasing admissions and demand for courses.</li>
                        <li>Growing student interest in research and innovation.</li>
                        <li>High footfall in the library and academic resources.</li>
                        <li>Successful MoUs with organizations for academic collaboration, training, and placements.</li>
                        <li>High faculty retention rates.</li>
                    </ul>
                </section>

                {/* Problems Encountered Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Problems Encountered and Resources Required</h3>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>The syllabus, which is prepared by the university, is sometimes not updated in a timely manner.</li>
                        <li>The challenge of maintaining a uniform teaching level due to the heterogeneous academic backgrounds of students in the same class.</li>
                    </ul>
                </section>

                {/* Notes Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Notes</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Due to the excellent practices in teaching and learning, the institute attracts students not only from Odisha but also from neighboring states.
                    </p>
                </section>

            </div>

            <Footer />
        </Layout>
    );
};

export default BestPractice1;
