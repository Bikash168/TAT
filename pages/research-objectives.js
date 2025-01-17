import Layout from '../components/Layout';
import Footer from '../components/Footer';

const ResearchObjectives = () => {
    return (
        <Layout title="Research Objectives | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/research-objectives.jpg')", // Replace with your image path
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
                    <li className="text-gray-600">Objectives</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Objectives</h2>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-4">
                        <li>To achieve excellence in academic, industrial, and societal research and innovation.</li>
                        <li>Conduct and promote interdisciplinary research and share knowledge among the faculties and students.</li>
                        <li>Publish research outcomes through papers in reputable journals and conference proceedings.</li>
                        <li>Conduct and organize Faculty Development Programs (FDPs), seminars, and workshops in the areas of recent and upcoming technologies by inviting guest experts.</li>
                        <li>Conduct research through collaboration and networking with industry and other research institutions.</li>
                        <li>Provide technical expertise and consultancy support services.</li>
                        <li>Promote and lead funded research projects through extramural as well as intramural funding support.</li>
                        <li>Invite distinguished scholars and industry experts, build partnerships with international experts and research centers.</li>
                    </ul>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ResearchObjectives;
