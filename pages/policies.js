import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const PoliciesPage = () => {
    const policies = [
        {
            title: 'Code of Conduct Policy',
            description: 'This policy outlines the standards of behavior expected from all members of the institution.',
            pdf: '/policies/code-of-conduct.pdf',
        },
        {
            title: 'Anti-Ragging Policy',
            description: 'Guidelines and measures to prevent and address ragging incidents within the campus.',
            pdf: '/policies/anti-ragging-policy.pdf',
        },
        {
            title: 'Environmental Policy',
            description: 'Our commitment to environmental sustainability and responsible resource usage.',
            pdf: '/policies/environmental-policy.pdf',
        },
        {
            title: 'Grievance Redressal Policy',
            description: 'Procedures for addressing grievances of students, faculty, and staff.',
            pdf: '/policies/grievance-redressal-policy.pdf',
        },
        {
            title: 'Research Integrity Policy',
            description: 'Ensuring integrity and ethical standards in research activities.',
            pdf: '/policies/research-integrity-policy.pdf',
        },
        {
            title: 'Diversity and Inclusion Policy',
            description: 'Fostering an inclusive and equitable environment for all.',
            pdf: '/policies/diversity-inclusion-policy.pdf',
        },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/policies-hero.jpg')",
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Policies
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
                        <a href="/policies" className="hover:underline">
                            Policies
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Policies List Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <section>
                    <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">Institutional Policies</h2>
                    <p className="text-lg text-gray-700 mb-12 text-center">
                        Explore our comprehensive policies designed to uphold integrity, inclusivity, and excellence within our institution.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {policies.map((policy, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{policy.title}</h3>
                                <p className="text-gray-600 mb-6">{policy.description}</p>
                                <a
                                    href={policy.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Download PDF
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default PoliciesPage;
