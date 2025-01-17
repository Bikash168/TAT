import Layout from '../components/Layout';
import Footer from '../components/Footer';

const ResearchCommittee = () => {
    return (
        <Layout title="Research Committee Members | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/research-committee3.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Research Committee Members
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
                    <li className="text-gray-600">Research Committee Members</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                {/* Introduction Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-base sm:text-lg mb-4">
                        The core R&D team in the form of Research Committee working behind the Trident Research is composed of a group of individuals talented in a broad array of areas ranging from the ICT spectrum to core branches of engineering, biotechnology, and management science. Collectively, they bring the capability to see the problems as opportunities and possibilities for advancement and the expertise to realize a creative vision, tasked with turning ideas into reality.
                    </p>
                    <p className="text-base sm:text-lg mb-4">
                        The core R&D team shoulders the responsibility of managing the development of innovative products, supporting software and ICT product development, and building research drive at Trident Research. The core R&D team comprises the following professors:
                    </p>
                </div>

                {/* Core Team Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Core R&D Team</h2>
                    <div className="mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold">Prof. (Dr.) Sakuntala Mahapatra</h3>
                        <p className="text-base sm:text-lg mb-2">Dean (R&D), Professor & HOD (ETC)</p>
                    </div>
                </div>

                {/* Research Committee Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Research Committee</h2>
                    <p className="text-base sm:text-lg mb-4 font-semibold">Convenor:</p>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>Bimal Prasad Mohapatra</li>
                    </ul>
                    <p className="text-base sm:text-lg mb-4 font-semibold">Members:</p>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>Dr. Abhaya Kumar Samal (HOD, CSE)</li>
                        <li>Dr. Prabhat Mohanty (Dean, MBA)</li>
                        <li>Dr. Arup Sarkar (Professor, Biotech)</li>
                        <li>Dr. Manas Ranjan Senapati (HOD, Chem)</li>
                        <li>Dr. Ajay Kumar Sahoo (HOD, Mech)</li>
                        <li>Dr. Nargis Begum (HOD, MBA)</li>
                        <li>Dr. Subhra Swetanisha (Asso. Prof. CSE)</li>
                    </ul>
                </div>

                {/* Advisory Board Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Advisory Board Members</h2>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>Prof. P.K. Meher (Professor, NTU, Singapore)</li>
                        <li>Prof. Ganapati Panda (Emeritus Professor, IIT Bhubaneswar)</li>
                        <li>Prof. Rajib Mall (Professor, IIT Kharagpur)</li>
                        <li>Prof. Raju Daniel (Scientist, IPR, Ahmedabad)</li>
                        <li>Prof. Subhankar Bedanta (Associate Professor, NISER, Bhubaneswar)</li>
                    </ul>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ResearchCommittee;
