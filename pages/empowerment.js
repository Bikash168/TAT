import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Empowerment() {
    return (
        <Layout title="Faculty Empowerment | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/empowerment-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Faculty Empowerment
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
                        <Link href="/research" className="hover:underline">
                            Research
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Empowerment</li>
                </ul>
            </nav>

            {/* Main Section */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 mt-[20px] sm:mt-[40px] lg:mt-[60px] mb-16">
                {/* Main Content */}
                <div className="w-full space-y-12">
                    {/* Introduction Section */}
                    <section id="introduction" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">About Faculty Empowerment</h2>
                        <p className="text-lg text-gray-700">
                            Empowerment of the faculty is essential for academic success. Trident Academy of Technology believes in a model for empowerment of faculty through professional development and by involving them in academic, industrial, and societal research. Faculty empowerment ensures that the institution continuously improves and fosters a high-quality educational experience for students.
                        </p>
                        <p className="text-lg text-gray-700">
                            The institution implements faculty empowerment initiatives through Trident Research and various programs that provide opportunities for skill development, knowledge sharing, and cross-industry collaboration.
                        </p>
                    </section>

                    {/* Faculty Development Programs Section */}
                    <section id="faculty-development" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">Faculty Development Programs</h2>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>Trident Research's Faculty Empowerment Programs</li>
                            <li>Collaboration with Academia and Industry for Knowledge Sharing</li>
                            <li>Workshops on Technical Skills, Research Methodologies, and Pedagogical Innovations</li>
                        </ul>
                    </section>

                    {/* Past Talks and Workshops Section */}
                    <section id="past-talks" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">Past Technical Talks and Workshops</h2>
                        <p className="text-lg text-gray-700">
                            Here are some notable talks delivered by experts from academia and industry, designed to enhance faculty skills and knowledge:
                        </p>
                        <ul className="space-y-6">
                            {/* List of sessions */}
                            {[  
                                { name: 'Prof. (Dr.) Samprat R. Sabat', topic: 'Art of Writing Technical Paper for Journal Publication', date: '28.08.2018', affiliation: 'Central University of Hyderabad & IIT – Bhubaneswar' },
                                { name: 'Dr. Priyadarshan Patra', topic: 'Current Trends in Technology', date: '27.05.2018', affiliation: 'Intel Corp, US' },
                                { name: 'Prof. (Dr.) S. K. S. Parashar', topic: 'New Trend in Research', date: '3rd May 2018', affiliation: 'KIIT' },
                                { name: 'Prof. (Dr.) Ajit Kumar Panda', topic: 'Funded Research Opportunities', date: '12th April 2018', affiliation: 'NIST' },
                                { name: 'Prof. (Dr.) Payodhar Padhy', topic: 'Sensitization Seminar on Research Project – Case Study', date: '5th April 2018', affiliation: 'KIST' },
                                // Add more entries as required
                            ].map((session, index) => (
                                <li key={index}>
                                    <h3 className="text-xl font-semibold text-[#004D73]">Resource Person: {session.name}</h3>
                                    <p className="text-lg">Topic: {session.topic}</p>
                                    <p className="text-sm text-gray-500">Date: {session.date}</p>
                                    <p className="text-sm text-gray-500">Affiliation: {session.affiliation}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </Layout>
    );
}
