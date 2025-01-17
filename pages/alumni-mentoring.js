import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const AlumniMentoring = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/alumni-mentoring-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Alumni Mentoring: Building Your Future with Trident’s Alumni Network
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
                        <Link href="/placement" className="hover:underline">
                            Placement
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Alumni Mentoring Program</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="alumni-mentoring" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">
                            Building Your Future with Trident’s Alumni Network
                        </h2>
                        <p className="text-xl text-gray-700 mb-8">
                            At Trident, we’re committed to fostering lifelong connections with our alumni. Our robust Alumni Mentoring program goes beyond annual reunions. It creates a dynamic space where experienced professionals guide and inspire our current students.
                        </p>

                        {/* Benefits List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Quarterly Mentorship Sessions</h4>
                                <p className="text-lg text-gray-700">
                                    Connect with industry experts – Trident alumni working in your field of interest or a related one – for personalized career guidance.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Annual Alumni Meet</h4>
                                <p className="text-lg text-gray-700">
                                    Network with a diverse group of alumni, gain valuable insights into various industries, and build lasting connections.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Industry Talks & Workshops</h4>
                                <p className="text-lg text-gray-700">
                                    Learn practical skills and industry trends directly from alumni working at top companies.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Mock Interviews & Resume Reviews</h4>
                                <p className="text-lg text-gray-700">
                                    Gain confidence and polish your interview skills with the help of experienced alumni mentors.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Career Exploration Panels</h4>
                                <p className="text-lg text-gray-700">
                                    Hear from alumni about different career paths within your field, helping you make informed decisions about your future.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-2xl font-semibold text-blue-600 mb-4">Exclusive Online Community</h4>
                                <p className="text-lg text-gray-700">
                                    Connect with alumni for ongoing support, mentorship, and networking opportunities beyond scheduled events.
                                </p>
                            </div>
                        </div>

                        {/* Empowering Students Section */}
                        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold text-blue-600 mb-6">
                                The Trident Alumni Mentoring Program Empowers You to:
                            </h3>
                            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
                                <li>Develop your professional network by building relationships with influential alumni who can provide career advice and open doors to future opportunities.</li>
                                <li>Gain industry insights, get real-world knowledge about your chosen field, workplace expectations, and the latest industry trends.</li>
                                <li>Refine your career goals, receive guidance on crafting your resume, acing interviews, and navigating the job search process.</li>
                                <li>Boost your confidence by learning from mentors who have walked in your shoes and gain the confidence to excel in your future career.</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-2xl font-bold text-blue-600">Join the Trident Alumni Network</h3>
                            <p className="text-lg text-gray-700 mt-4">
                                Take your first step towards a successful future by connecting with our vibrant alumni network!
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default AlumniMentoring;
