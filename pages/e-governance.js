import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const EGovernance = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/e-governance-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    E-Governance
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
                        <Link href="/best-practices" className="hover:underline">
                            Best Practices
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <span className="text-gray-500">E-Governance</span>
                    </li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                {/* Introduction Section */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">E-Governance System</h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Our institute firmly believes in fostering participative management and encouraging diverse ideas from professionals, academicians, and students to ensure the growth and excellence of educational values.
                    </p>
                </section>

                {/* Philosophy Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Governance Philosophy</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The institute follows a participative management culture by forming committees composed of faculty members, academicians, administrative executives, industry experts, alumni, and sometimes student representatives and support staff. This approach allows innovative ideas to be welcomed and implemented through collaborative decision-making processes.
                    </p>
                </section>

                {/* E-Governance Features Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Features of the E-Governance System</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        To monitor and control academic and administrative activities while maintaining quality, the institute has implemented an in-house developed e-governance system. Key features include:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>Online Attendance</li>
                        <li>Course Coverage</li>
                        <li>Online Tests</li>
                        <li>Accounts Details</li>
                        <li>Academic Performances</li>
                        <li>Library Management</li>
                    </ul>
                    <p className="text-lg text-gray-700">
                        The system is accessible to faculty, staff, students, parents, and visitors. For instance, students can check their attendance, class test marks, sessional marks, and notices through the platform.
                    </p>
                </section>

                {/* E-Governance Committee Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">E-Governance Committee</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The E-Governance Cell is supported by management, faculty, and students. The committee members contribute to the development and future direction of the system while raising awareness among stakeholders. The current committee includes:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>Nani Gopal Das (CSE) - Coordinator</li>
                        <li>Aditya Narayan Das (CSE)</li>
                        <li>Rina Mahakud (ETC)</li>
                        <li>Sidhartha Sankar Mohapatra (Eng.)</li>
                        <li>Sumanta Kumar Mohapatra (ETC)</li>
                        <li>SK. Mohammed Ali (ETC)</li>
                        <li>Ashish Kumar Barik (Mech.)</li>
                        <li>Ashok Kumar Sahoo (Math)</li>
                        <li>Swetashree Pattanayak (Chem)</li>
                        <li>Sumanta Sahoo (CSE)</li>
                    </ul>
                </section>

                {/* Conclusion Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Commitment to Excellence</h3>
                    <p className="text-lg text-gray-700">
                        The E-Governance system reflects the institute's commitment to leveraging technology for efficient and transparent management, ensuring a seamless experience for all stakeholders.
                    </p>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default EGovernance;
