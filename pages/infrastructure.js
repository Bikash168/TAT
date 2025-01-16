import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Infrastructure = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/infrastructure.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Infrastructure
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
                        <Link href="/facilities" className="hover:underline">
                            Facilities
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Infrastructure</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Infrastructure Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Infrastructure Overview</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        To ensure high-quality technical education for students, the college provides the best possible infrastructure facilities. Located in a serene atmosphere in the heart of Bhubaneswar near Infocity, the campus is designed to foster learning and innovation.
                    </p>
                </section>

                {/* Classrooms, Administration, and Laboratories */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Classrooms, Administration, and Laboratories</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        The college features spacious classrooms, well-equipped laboratories, and seminar halls for each department. Facilities include a central library, mini conference room, and English Language Proficiency Cell. A 400-capacity auditorium is available for institute-level presentations. Smart classrooms are located across six blocks, promoting a modern teaching-learning environment. 
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        Departments host technical clubs such as the Big Data Analytics Club, Robo Club, Solar Club, and Designer Club. Events like technical quizzes, paper presentations, software contests, and mock interviews are conducted as part of club activities.
                    </p>
                </section>

                {/* Library */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Library</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        The central library houses 60,000 book volumes, 274 e-journals, and 300+ articles from Science Direct and IEEE. It offers digital resources, e-learning, and a dedicated reading room. The library operations are fully computerized, featuring bar-coded records and an in-house developed Library Management Package accessible via the college intranet.
                    </p>
                </section>

                {/* Computing Facilities */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Computers, LAN, and Internet</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        The campus boasts state-of-the-art computer labs, a 1000 Mbps wireless backbone, and a student-to-computer ratio of 1:4 for undergraduates and 1:1 for postgraduates. The college website is dynamically maintained in-house by faculty members.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/classroom.jpg" alt="Classroom" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/library.jpg" alt="Library" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/laboratory.jpg" alt="Laboratory" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/computer-lab.jpg" alt="Computer Lab" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/auditorium.jpg" alt="Auditorium" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/campus.jpg" alt="Campus" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default Infrastructure;
