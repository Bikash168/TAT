import Layout from '../components/Layout';
import Footer from '../components/Footer';

const ISRPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/community-outreach.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Institutional Social Responsibility (ISR)
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
                    <li>ISR</li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Institutional Social Responsibility (ISR) at Trident Group of Institutions
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Trident Group of Institutions is committed to fostering a culture of social responsibility by actively engaging with local communities and addressing socio-economic challenges through various initiatives. Our goal is to promote sustainable growth and community development through knowledge sharing, volunteerism, and collaborative efforts with local organizations and communities.
                    </p>
                </section>

                {/* Vision Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Vision of ISR</h3>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Develop Community Knowledge systems for bridging the gap between theory and practice.</li>
                        <li>Encourage interactions between students and local communities for better understanding of problems faced by them.</li>
                        <li>Democratization of knowledge by facilitating partnerships and associations with industries, NGOs, community welfare groups, etc.</li>
                        <li>Promote and carry out activities for attaining the goal of Faster, Inclusive, and Sustainable Growth as outlined in the Twelfth Five Year Plan (2012-17).</li>
                        <li>Promote knowledge sharing by undertaking need-based and community-oriented research projects.</li>
                    </ul>
                </section>

                {/* ISR Initiatives Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">ISR Initiatives</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Trident Group of Institutions emphasizes the all-round development of students by instilling good human values, self-confidence, personality development, teamwork, volunteerism, and a willingness to serve society. Below are some of the major ISR initiatives undertaken by the institution:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Personality development and soft skills training programs along with Yoga, meditation, and motivational speaking sessions.</li>
                        <li>Encouragement to students for extracurricular activities and charity work to broaden their horizons and motivate them to become responsible citizens.</li>
                        <li>Active participation with various NGOs, CBOs, youth clubs, and social workers to promote social welfare activities.</li>
                        <li>The NSS wing that provides opportunities for students to engage in activities of social importance, with Trident Academy of Technology being the only technical institute under BPUT to have permission to open NSS units by the Government of India.</li>
                        <li>INDEVIN, a social development wing that works with vulnerable sections of society to address socio-economic challenges.</li>
                        <li>Skill-EM initiative aimed at creating awareness regarding Skill India Mission, Digital India, and Make in India among students in colleges and schools across Odisha.</li>
                        <li>Various programs such as Kartavya, Manan, E-Abhiyan, Blood donation camps, Aids Awareness Programs, Relief and rescue operations during natural calamities, Free Health Check-up camps, Educating on Safe Drinking Water practices in slum areas, and Plantation Drives for environmental awareness.</li>
                    </ul>
                </section>

                {/* Collaborations Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Collaborations & Partnerships</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The institution has partnered with a wide range of organizations and social groups to effectively carry out these ISR initiatives:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Collaboration with local NGOs and CBOs for the successful implementation of various welfare activities.</li>
                        <li>Associations with social workers and companies for large-scale community development projects.</li>
                        <li>Partnerships with government organizations for organizing blood donation camps and providing medical aid during emergencies.</li>
                    </ul>
                </section>

            </div>

            <Footer />
        </Layout>
    );
};

export default ISRPage;
