import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const ICTEnabledClassroom = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/ict-classroom.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    ICT Enabled Classroom
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
                    <li className="text-gray-600">ICT Enabled Classroom</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Classroom Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Smart Classroom Features</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The ICT-enabled classrooms are designed to provide students with an immersive and engaging learning experience. Equipped with smart boards, projectors, and digital whiteboards, these classrooms are tailored for interactive learning.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        The classrooms are supported by high-speed internet, multimedia systems, and advanced audio-visual technologies, ensuring seamless learning and efficient collaboration.
                    </p>
                </section>

                {/* Learning Management System */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Learning Management System (LMS)</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The classrooms are integrated with a powerful Learning Management System (LMS) that allows teachers to upload course material, conduct live sessions, share notes, and assess student performance online.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        The LMS fosters real-time collaboration and communication between students and faculty, enhancing the overall educational experience.
                    </p>
                </section>

                {/* Interactive Tools */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Interactive Learning Tools</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Interactive tools such as live polls, quizzes, and instant feedback systems are incorporated into the classroom setup to facilitate active participation and enhance student engagement.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        These tools encourage collaborative learning and help students grasp complex concepts more effectively.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/smart-classroom.jpg" alt="Smart Classroom" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/projector.jpg" alt="Projector Setup" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/ict-classroom-setup.jpg" alt="ICT Classroom Setup" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/interactive-tools.jpg" alt="Interactive Tools" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default ICTEnabledClassroom;
