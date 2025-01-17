import Layout from '../components/Layout';
import Footer from '../components/Footer';

const BestPractice2 = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/research-culture.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Best Practice – 2: Promotion of Research Culture in the College
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
                    <li>Best Practice – 2</li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Promotion of Research Culture in the College
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Trident Academy of Technology encourages a research-driven culture among faculty and students, facilitating opportunities to undertake research projects, present papers, and develop essential research skills.
                    </p>
                </section>

                {/* Objectives Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Objectives of the Practice</h3>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Encourage and inculcate a research culture among faculty and students.</li>
                        <li>Promote undertaking of major and minor research projects, as well as publishing research papers and books.</li>
                        <li>Develop a scientific temper and acquire research skills among the academic community.</li>
                        <li>Support faculty in pursuing Ph.D. programs and organizing seminars/workshops.</li>
                        <li>Provide the necessary support for faculty to attend and present research papers at national and international conferences.</li>
                    </ul>
                </section>

                {/* Context Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">The Context</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The institution focuses on providing necessary infrastructure and resources to facilitate research activities, while also supporting faculty members in their academic pursuits:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Updating faculty about available fellowships and assisting with the application process.</li>
                        <li>Ensuring the availability of required infrastructure for Major and Minor Research Projects.</li>
                        <li>Providing Duty Leave for faculty presenting research papers at seminars and conferences.</li>
                        <li>Providing computers with internet access, reprographic services, and access to research-oriented journals and e-journals.</li>
                    </ul>
                </section>

                {/* The Practice Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">The Practice</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The institution extends full support to faculty and students for research activities through the following measures:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Timely procurement of resources for research projects.</li>
                        <li>Provision of adequate infrastructure and human resources to support research efforts.</li>
                        <li>Autonomy for Principal Investigators to manage their projects effectively.</li>
                        <li>Providing Duty Leave to faculty for attending national/international conferences.</li>
                        <li>Ensuring access to computers and internet facilities across departments.</li>
                        <li>Maintaining subscriptions to books, journals, and e-journals as per research needs.</li>
                        <li>Offering financial assistance to faculty for attending conferences and presenting research papers.</li>
                        <li>Conducting workshops, seminars, and conferences at various levels (national, state, regional).</li>
                        <li>Encouraging faculty to pursue at least one minor/major research project annually.</li>
                    </ul>
                </section>

                {/* Evidence of Success Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Evidence of Success</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The success of the practice is reflected in the following outcomes:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Recognized as a research center by the affiliating university.</li>
                        <li>Most faculty members hold Ph.D. degrees and serve as Ph.D. supervisors.</li>
                        <li>The college receives grants from DST (Department of Science and Technology).</li>
                        <li>MoUs with various organizations for collaborative research activities.</li>
                        <li>A large number of faculty members are pursuing Ph.D. degrees.</li>
                        <li>Faculty members have published numerous research papers in journals.</li>
                        <li>The institution has its own research journal, "The Anweshan."</li>
                    </ul>
                </section>

                {/* Problems Encountered Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Problems Encountered and Resources Required</h3>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Time constraints due to teaching hours for UG programs impact the ability to write and publish papers.</li>
                        <li>Limited financial resources from government sources for research projects.</li>
                    </ul>
                </section>

            </div>

            <Footer />
        </Layout>
    );
};

export default BestPractice2;
