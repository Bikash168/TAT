import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const PeerEvaluation = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/peer-evaluation.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Peer Evaluation
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
                    <li className="text-gray-600">Peer Evaluation</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Introduction Section */}
                <section className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Peer Evaluation of Teaching
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Trident Academy of Technology’s policy on Evaluation, Monitoring and Review of Academic Programs and Teaching includes a requirement for teaching staff to undergo regular peer evaluation of their teaching, which also includes:
                    </p>
                    <ul className="list-disc list-inside text-left mx-auto max-w-4xl text-gray-700 mb-8">
                        <li>Course Reviews</li>
                        <li>Topic Evaluation</li>
                        <li>Student Evaluation of Teaching (SET)</li>
                    </ul>
                </section>

                {/* What is Peer Evaluation Section */}
                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        What is Peer Evaluation?
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Peer evaluation is a process of collegial feedback on quality of teaching. It is a purposeful process of gathering information and evidence about the effectiveness of teaching processes and the educational environment with a view to subjecting it to constructive critical scrutiny. It usually begins with people identifying what areas they would like feedback on, and works best where the process is reciprocal between peers. A key component of peer evaluation is peer review of current practice often based on peer observation of teaching interactions. It should always be viewed as an opportunity, not a threat, for both parties.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        Besides, all the labs are regularly assessed by external professors and industry experts from reputed organizations to augment the implementation of quality processes.
                    </p>
                </section>

                {/* Peer Evaluation Process Section */}
                <section>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Peer Evaluation Process
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                        The peer evaluation process is outlined in brief below:
                    </p>
                    <ul className="list-decimal list-inside text-left mx-auto max-w-4xl text-gray-700 space-y-4">
                        <li>Identification of areas requiring feedback by teaching staff.</li>
                        <li>Observation of teaching practices by peers or external reviewers.</li>
                        <li>Documentation of findings and recommendations for improvement.</li>
                        <li>Discussion and reflection on feedback to foster improvement.</li>
                        <li>Follow-up reviews to ensure implementation of suggested changes.</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default PeerEvaluation;
