import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';


const QualityAccreditation = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/quality-accreditation-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Quality & Accreditation
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
                        <a href="/quality-accreditation" className="hover:underline">
                            Quality & Accreditation
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Quality & Accreditation at Trident Academy of Technology
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        At Trident Academy of Technology, we are committed to ensuring the highest standards of education, accreditation, and continuous quality improvement. We strive to deliver the best technical education and support students in achieving excellence in their careers.
                    </p>
                </section>

                {/* Accreditation Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Accreditation</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        Accreditation is a voluntary, independent review of educational programs to determine that the education provided is of uniform and sound quality. Accreditation is also essential for determining eligibility for participation in government and state funding programs. In many cases, accreditation may be deemed compulsory for graduate programs. Trident Academy of Technology (TAT), with its valued and quality education, is confident of receiving accreditation from the following esteemed organizations:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700">
                        <li>ISO 45001:2018</li>
                        <li>ISO/IEC 17025:2017</li>
                        <li>ISO 9001:2015 Certified</li>
                    </ul>
                </section>

                {/* Quality Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Quality</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        The vision, mission, and values of Trident Academy of Technology (TAT) are built with a strong sense of trust and commitment to ensuring quality technical education. The institution has developed sustainable educational strategies, focusing on infrastructure, professionalization, internships, publications, learning resources, and personal development.
                    </p>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Emphasis on Improving Teaching and Learning Quality</h4>
                    <p className="text-lg text-gray-700 mb-4">
                        TAT has placed a significant emphasis on improving the quality of teaching and learning, which includes adherence to academic calendars and the introduction of various instructional methods. Below are some of the core practices:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
                        <li>Adherence to BPUT academic calendar and developmental activities such as campus placement drives, co-curricular activities, and cultural events.</li>
                        <li>Use of diverse instructional methods including Chalk and Talk, Presentations, Experimental Laboratory Work, Group Projects, and eLearning.</li>
                        <li>Implementation of the Proctorial system to encourage student development and address their personal or academic issues.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Classroom and Laboratory Environment</h4>
                    <p className="text-lg text-gray-700 mb-4">
                        TAT provides state-of-the-art facilities, such as smart classrooms, fully equipped laboratories, and modern amenities like LCD projectors, smartboards, and microphones. These resources ensure that students have a conducive environment for both learning and experimentation.
                    </p>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Student Projects and Industry Interactions</h4>
                    <p className="text-lg text-gray-700 mb-4">
                        The projects undertaken by students at TAT are application-oriented and are assessed through regular guidance and presentations. TAT also fosters strong industry interactions to align academic activities with real-world industry requirements.
                    </p>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-2">Implementation of Quality Practices</h4>
                    <p className="text-lg text-gray-700 mb-4">
                        Since the 2014-2015 academic session, TAT has introduced Six Sigma practices to enhance the quality of education and student performance. These practices aim to optimize learning outcomes and ensure continuous improvement in academic processes.
                    </p>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default QualityAccreditation;
