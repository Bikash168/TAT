import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const ImplementationOfSDGs = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/implementation-sdgs-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Implementation of SDGs
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
                        <a href="/implementation-of-sdgs" className="hover:underline">
                            Implementation of SDGs
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Advancing Sustainable Development Goals (SDGs)
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        At Trident Academy of Technology, we are committed to aligning our practices and policies with the United Nations' Sustainable Development Goals (SDGs), creating a foundation for a sustainable future.
                    </p>
                </section>

                {/* SDGs Initiatives Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Commitment to the SDGs</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        We are actively embedding the SDGs across various aspects of our campus and community engagements. These initiatives serve as a blueprint for fostering positive transformations.
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>
                            <strong>Quality Education (SDG 4):</strong> Innovating teaching methodologies and ensuring equitable learning opportunities for all.
                        </li>
                        <li>
                            <strong>Gender Equality (SDG 5):</strong> Promoting inclusive policies and empowering all genders through education and awareness.
                        </li>
                        <li>
                            <strong>No Poverty (SDG 1) & Zero Hunger (SDG 2):</strong> Supporting students from disadvantaged backgrounds with scholarships and essential resources.
                        </li>
                        <li>
                            <strong>Climate Action (SDG 13):</strong> Implementing renewable energy solutions and fostering environmental awareness across campus.
                        </li>
                        <li>
                            <strong>Affordable and Clean Energy (SDG 7):</strong> Reducing carbon emissions through sustainable energy sources.
                        </li>
                        <li>
                            <strong>Responsible Consumption and Production (SDG 12):</strong> Promoting waste management practices and reducing our environmental footprint.
                        </li>
                        <li>
                            <strong>Partnerships for the Goals (SDG 17):</strong> Collaborating with industries, organizations, and educational institutions for community-driven solutions.
                        </li>
                    </ul>
                </section>

                {/* Community Initiatives Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Community Engagement and Outreach</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        Our outreach programs demonstrate our commitment to the well-being of the community and the environment.
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>Plantation drives to promote Life on Land (SDG 15).</li>
                        <li>Health awareness campaigns supporting Good Health and Well-being (SDG 3).</li>
                        <li>Educational seminars and workshops addressing sustainable development and climate action.</li>
                    </ul>
                </section>

                {/* Impact Rankings Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Aiming for THE Impact Rankings</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        As Trident Academy of Technology applies for the Times Higher Education (THE) Impact Rankings for the first time, we are proud to showcase our contributions to the global sustainability agenda. Our initiatives reflect our mission to produce responsible, future-ready graduates and establish TAT as a leader in social impact and environmental stewardship in higher education.
                    </p>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default ImplementationOfSDGs;
