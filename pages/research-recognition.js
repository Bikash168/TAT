import Layout from '../components/Layout';
import Footer from '../components/Footer';

const ResearchRecognition = () => {
    return (
        <Layout title="Research Recognition | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/Researcher-Recognition.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Research Recognition
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
                    <li className="text-gray-600">Recognition</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">SIRO Recognized</h2>
                    <p className="text-base sm:text-lg mb-4">
                        The Scientific and Industrial Research Organizations (SIROs), which are part of the Department of Scientific and Industrial Research (DSIR), Ministry of Science and Technology, Government of India, have recognized the Trident Group of Institutions in Bhubaneswar. Its main goal is to unite non-profit organizations that operate on a volunteer basis in order to support their initiatives in the fields of scientific and industrial research, design, and development of homegrown technology in order to achieve technological self-reliance and reduce the use of foreign inputs. This acknowledgment enables us to increase our expertise in the sphere of cutting-edge science and engineering.
                    </p>
                    <p className="text-base sm:text-lg mb-4">
                        The Trident Group was able to build in-house research and development on new technologies, products, processes, designs, quality, ranges, etc., thanks to this important accreditation. Additionally, it makes it possible for us to obtain financial Research and Development grants from numerous funding organizations, including DST, CSIR, DBT, TDB, ICMR, and ICAR.
                    </p>
                    <a
                        href="/pdfs/11-750-2017-TU-V-Recognition-Letter-1.pdf"
                        className="text-blue-500 hover:underline"
                        download
                    >
                        SIRO RECOGNITION LETTER 2023
                    </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">BPUT NCR</h2>
                    <p className="text-base sm:text-lg mb-4">
                        Trident has been recognized to be the Nodal Centre for Research by Biju Patnaik University of Technology for two Departments:
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg mb-4">
                        <li>Department of Electronics and Telecommunication Engineering</li>
                        <li>Department of Computer Science and Engineering</li>
                    </ul>
                    <p className="text-base sm:text-lg mb-4">
                        The main objective of this centre is:
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
                        <li>To promote and facilitate collaborative and interdisciplinary research and enhancement of research networking capacity and infrastructure under the umbrella of BPUT in the state of Odisha.</li>
                        <li>To increase and effectively manage the resources and research support for its stakeholders.</li>
                        <li>To provide education and training in research and related skills especially for PG and UG students.</li>
                        <li>To contribute to the University strategic educational and research missions and to support synergies between research, teaching, learning, and consultancy services.</li>
                        <li>To promote and enhance the reputation of faculty members in academic as well as quality of research.</li>
                    </ul>
                    <a
                        href="/pdfs/List-of-approved-BPUT-NCR-for-the-year-2022-232023-24-2024-25.pdf"
                        className="text-blue-500 hover:underline"
                        download
                    >
                        BPUT NCR LETTER
                    </a>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ResearchRecognition;
