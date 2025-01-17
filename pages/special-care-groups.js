import Layout from '../components/Layout';
import Footer from '../components/Footer';

const SpecialCareGroups = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/special-care-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Special Care Groups
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
                        <a href="/special-care-groups" className="hover:underline">
                            Special Care Groups
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Nurturing Growth with Special Care Groups
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        At Trident Academy of Technology, we identify and support advanced learners and struggling students through targeted efforts to ensure academic success and holistic development.
                    </p>
                </section>

                {/* Advanced Learner Support Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Support for Advanced Learners</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Faculty members identify advanced learners based on classroom interactions and performance in seminars, projects, or research works. The institution takes a collaborative approach to provide specialized support for these students.
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Special classes are organized departmentally to cater to advanced learners.</li>
                        <li>Advanced learners are encouraged to spend more time in the digital library, exploring e-books, journals, research papers, and NPTEL video lectures.</li>
                        <li>They are encouraged to participate in seminars and present papers at in-house events and external conferences, both inside and outside the state.</li>
                    </ul>
                </section>

                {/* Support for Struggling Students Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Support for Struggling Students</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Students who struggle in the initial stages of practical coursework are provided additional support to help improve their skills and knowledge.
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Students who perform poorly in the initial experiments receive special care to improve their practical knowledge.</li>
                        <li>These students are given additional lab sessions and extra practice to ensure they catch up with the required skill level.</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default SpecialCareGroups;
