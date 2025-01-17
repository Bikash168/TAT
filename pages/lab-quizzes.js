import Layout from '../components/Layout';
import Footer from '../components/Footer';

const LabQuizzes = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/lab-quizzes-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Lab QUIZZES
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
                        <a href="/lab-quizzes" className="hover:underline">
                            Lab QUIZZES
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Enhancing Knowledge through Lab Quizzes
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        At Trident Academy of Technology, lab quizzes play a crucial role in reinforcing theoretical knowledge and enhancing practical skills. These quizzes help students assess their understanding of the experiments conducted in the laboratory classes.
                    </p>
                </section>

                {/* Lab Quiz Details Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Lab Quiz Structure</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The lab quizzes are organized regularly across all departments and cover topics related to experiments conducted in previous laboratory classes. This allows students to gauge their understanding and knowledge retention.
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Lab quizzes are conducted for each department's laboratory sessions.</li>
                        <li>Topics of the quizzes are derived from experiments conducted in prior classes.</li>
                        <li>The results of the quizzes contribute to 40% of the total lab marks.</li>
                        <li>Quizzes are designed to enhance students' knowledge in their respective subjects.</li>
                    </ul>
                </section>

                {/* Impact of Lab Quizzes Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Impact on Students' Knowledge</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The implementation of lab quizzes has significantly improved the overall knowledge and comprehension of students in their respective subjects. Regular participation in quizzes enhances the learning experience and reinforces theoretical concepts.
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Students gain deeper insights into the subject matter through regular assessments.</li>
                        <li>The quizzes help identify areas where students need further understanding, encouraging proactive learning.</li>
                        <li>They foster a competitive spirit among students, motivating them to perform better in lab sessions.</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default LabQuizzes;
