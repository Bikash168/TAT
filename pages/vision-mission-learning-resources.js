import Layout from '../components/Layout';
import Footer from '../components/Footer';

const VisionMission = () => {
    return (
        <Layout title="Vision & Mission | Learning Resources">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Library-Vision.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Vision & Mission of Learning Resources
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
                        <a href="/learning-resources" className="hover:underline">
                            Learning Resources
                        </a>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Vision & Mission</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Vision</h2>
                    <p className="text-base sm:text-lg mb-4">
                        Library aims to be the best among engineering college libraries in the country. It intends to incorporate the latest technology and adopt a user-friendly approach towards students and faculty. The Library strives to offer comprehensive services related to the dissemination of knowledge.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Mission</h2>
                    <p className="text-base sm:text-lg mb-4">
                        The Library serves as a resource center and aims to develop a comprehensive collection of documents useful for faculty and students of the institute. It provides efficient dissemination of knowledge through modern services and technologies.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Goals</h2>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>To serve the academic needs of all students and faculty members.</li>
                        <li>To collect books and journals on all related subjects for teaching and reference purposes.</li>
                        <li>To organize and maintain information resources to meet current and future needs.</li>
                        <li>
                            The database of books available in the Library is updated daily with details of recently acquired books.
                        </li>
                        <li>To continually improve and expand Library resources and services.</li>
                    </ul>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default VisionMission;
