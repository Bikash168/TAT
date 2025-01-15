import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const AnalyticalReasoning = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/analytical-reasoning-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Analytical Reasoning: Ace Your Aptitude Test
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
                        <Link href="/training" className="hover:underline">
                            Training
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Analytical Reasoning</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="analytical-reasoning" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">Ace Your Aptitude Test: Mastering the Gateway to Success</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            At Trident, we understand that the aptitude test is your first step towards landing your dream job. In today’s competitive job market, companies rely on these tests to identify candidates with the sharp analytical skills and problem-solving abilities they need.
                        </p>

                        <p className="text-lg text-gray-700 mb-4">
                            That’s why we offer a robust and comprehensive Analytical Reasoning training program designed to:
                        </p>

                        <ul className="list-disc text-left text-lg text-gray-700 mb-4 pl-10">
                            <li>Equip you with the knowledge and skills to excel in various aptitude test formats.</li>
                            <li>Boost your confidence through practice and familiarity with the testing process.</li>
                            <li>Develop critical thinking and problem-solving abilities – valuable assets for any career path.</li>
                        </ul>

                        <p className="text-lg text-gray-700 mb-4">
                            Here’s what sets our program apart:
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Our Program Approach</h3>
                        <ul className="list-decimal text-left text-lg text-gray-700 mb-4 pl-10">
                            <li><strong>Early Start, Strong Foundation:</strong> We begin your training in the pre-final year, providing ample time to master key concepts.</li>
                            <li><strong>Expert-Led Instruction:</strong> Our team comprises experienced trainers with a proven track record of success.</li>
                            <li><strong>Regular Assessments:</strong> Monitor your progress and identify areas for improvement through frequent assessments.</li>
                            <li><strong>Seamless Integration:</strong> Training is incorporated into your regular schedule, minimizing stress and maximizing convenience.</li>
                            <li><strong>Practice Makes Perfect:</strong> We simulate real-world testing environments with online and offline assessments.</li>
                        </ul>

                        <p className="text-lg text-gray-700 mb-4">
                            By the time you reach your final year, you’ll be well-equipped to conquer the aptitude test with confidence. Our program empowers you to showcase your true potential and unlock a bright future in your chosen field.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Join Us</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Join Trident and take control of your career success!
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default AnalyticalReasoning;
