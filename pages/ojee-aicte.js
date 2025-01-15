import Layout from '../components/Layout';
import Footer from '../components/Footer';

const OJEEAICTEPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/ojee-aicte.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    OJEE & AICTE
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
                    <li>OJEE & AICTE Documents</li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        OJEE & AICTE Documents
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Below are the important documents related to OJEE and AICTE for students applying for various courses at Trident Group of Institutions. Click on the links to download the corresponding PDF files.
                    </p>
                </section>

                {/* Document List */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Important Documents</h3>
                    <ul className="list-none space-y-4 text-lg text-gray-700">
                        <li>
                            <a
                                href="/files/OJEE_Counseling_Brochure.pdf"
                                download
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">OJEE Counseling Brochure</span> (Download PDF)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/files/Deficiency_Report_2019_20.pdf"
                                download
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Deficiency Report 2019-20</span> (Download PDF)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/files/Deficiency_Report_2020_21.pdf"
                                download
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Deficiency Report 2020-21</span> (Download PDF)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/files/Deficiency_Report_2021_22.pdf"
                                download
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Deficiency Report 2021-22</span> (Download PDF)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/files/Deficiency_Report_2022_23.pdf"
                                download
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Deficiency Report 2022-23</span> (Download PDF)
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default OJEEAICTEPage;
