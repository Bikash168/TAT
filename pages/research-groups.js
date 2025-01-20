import Layout from '../components/Layout';
import Footer from '../components/Footer';

const ResearchGroups = () => {
    return (
        <Layout title="Research Groups | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/research-groups.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Research Groups
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
                    <li>
                        <a href="/research-committee" className="hover:underline">
                        Research-Committee
                        </a>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Research Groups</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                {/* Introduction Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-base sm:text-lg mb-4">
                        Trident Group of Institutions (TGI) research initiative aims to position the R&D Cell to foster engineering research within the group. This is achieved through various research activities, including funded projects from government agencies, IEDC activities, student technical clubs, and investments made through the Trident Intramural Funded Research Schemes. Additionally, the cell promotes faculty and student participation in national and international conferences and research publications.
                    </p>
                    <p className="text-base sm:text-lg mb-4">
                        To solve numerous intricate and challenging industrial problems, multidisciplinary research is essential. Designated research groups carry out collaborative activities, with plans for international collaborations actively under consideration.
                    </p>
                </div>

                {/* Objective Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Objective</h2>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>Create a culture of excellence for research and offer the best facilities for it.</li>
                        <li>Serve as a platform for teachers and students to engage in knowledge-sharing, strong multidisciplinary collaborations, and solution-driven social research.</li>
                        <li>Publish high-standard research articles in reputed international publications.</li>
                        <li>Create scientifically profound human resources for academic and industrial research.</li>
                        <li>Promote industrial collaborations involving active and mutually beneficial R&D projects.</li>
                        <li>Establish Trident Research as a well-known and reputable brand in advanced technical research.</li>
                    </ul>
                </div>

                {/* Core Team Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">The Core R&D Team</h2>
                    <p className="text-base sm:text-lg mb-4">
                        The following professors make up the main R&D team:
                    </p>
                    <div className="mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold">Dr. Sakuntala Mohapatra</h3>
                        <p className="text-base sm:text-lg mb-2">Professor Dean Research</p>
                        <p className="text-base sm:text-lg mb-4">
                            Her emphasis on leadership enabled us to put research investments on a notable trajectory that made knowledge resources for research available and generated creative solutions.
                        </p>
                        <a
                            href="/profiles/dr-sakuntala-mohapatra"
                            className="text-blue-500 hover:underline"
                        >
                            View Profile
                        </a>
                    </div>
                </div>

                {/* Research Groups Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Research Groups</h2>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>Computer Sciences Research (CSR) Group</li>
                        <li>Electrical Sciences Research (ESR) Group</li>
                        <li>Infrastructure Science Research (ISR) Group</li>
                        <li>Science & Humanities Research (SHR) Group</li>
                    </ul>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ResearchGroups;
