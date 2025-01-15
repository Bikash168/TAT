import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const PeerAudits = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/peer-audits-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Peer Audits
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
                        <span className="text-gray-500">Peer Audits</span>
                    </li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">Peer Audit Framework</h2>
                    <p className="text-xl text-gray-700 mb-8">
                        At TAT, we believe in continual improvement through external assessments. Our peer-audit framework involves experts from other institutions inspecting our facilities and providing actionable recommendations.
                    </p>
                </section>

                {/* Audit Details Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Key Objectives of Peer Audits</h3>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>Identify areas for upgradation in laboratory and library facilities.</li>
                        <li>Suggest improvements in engineering automation and instrumentation.</li>
                        <li>Ensure compliance with industry standards and best practices.</li>
                    </ul>
                </section>

                {/* Collaborating Institutions */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Collaborating Institutions</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        We have collaborated with leading institutions to conduct these audits and provide valuable insights:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>
                            <strong>College of Engineering and Technology (CET), Bhubaneswar:</strong> Experts from CET visited our campus to inspect our laboratories and workshops.
                        </li>
                        <li>
                            <strong>Veer Surendra Sai University of Technology (VSSUT), Burla:</strong> Faculty from VSSUT provided recommendations for upgrading our engineering instruments and automation systems.
                        </li>
                    </ul>
                </section>

                {/* Outcomes and Recommendations */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Outcomes and Recommendations</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        The insights gained from these audits have been instrumental in elevating the quality of our facilities. Key recommendations include:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>Upgrading laboratory equipment to align with cutting-edge technology.</li>
                        <li>Enhancing library resources with a focus on digital and open-access materials.</li>
                        <li>Integrating advanced engineering instruments for real-world applications.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">A Commitment to Excellence</h3>
                    <p className="text-lg text-gray-700">
                        The peer-audit framework is a testament to TAT's commitment to continuous improvement. By embracing external evaluations, we aim to maintain the highest standards of quality and innovation in education.
                    </p>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default PeerAudits;
