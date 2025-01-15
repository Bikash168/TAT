import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const CommunicationConfidence = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/communication-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Communication Confidence: Speak Your Way to Success
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
                    <li className="text-gray-600">Communication Confidence</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="communication-confidence" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">Communication Confidence: Speak Your Way to Success</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            Effective communication is more than just good grammar; it’s about expressing yourself clearly, confidently, and persuasively. At Trident, we understand that strong communication skills are essential for career success in any field.
                        </p>

                        <p className="text-lg text-gray-700 mb-4">
                            That’s why we offer a comprehensive Communication Augmentation Program, designed to empower you to:
                        </p>

                        <ul className="list-disc text-left text-lg text-gray-700 mb-4 pl-10">
                            <li>Become a confident speaker: Develop the fluency and poise to communicate effectively in any situation.</li>
                            <li>Articulate your ideas clearly: Master the art of presenting your thoughts and arguments with clarity and structure.</li>
                            <li>Master the art of active listening: Learn to effectively listen, understand, and respond to others.</li>
                            <li>Project a powerful presence: Harness the power of nonverbal communication to make a positive impact.</li>
                        </ul>

                        <p className="text-lg text-gray-700 mb-4">
                            Our program offers a unique blend of approaches:
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Our Program Approach</h3>
                        <ul className="list-decimal text-left text-lg text-gray-700 mb-4 pl-10">
                            <li><strong>Engaging Workshops:</strong> Interactive workshops led by experienced trainers make learning fun and effective. (Previously offered in semesters 3 & 4)</li>
                            <li><strong>Expert Guidance:</strong> Benefit from personalized coaching and feedback from our in-house faculty or qualified external trainers. (5th semester onwards)</li>
                            <li><strong>Trident Communication Club (TCC):</strong> Join a vibrant community dedicated to honing communication skills through discussions, activities, and workshops.</li>
                            <li><strong>Focus on Specific Needs:</strong> Address weaknesses and refine strengths through targeted training modules covering:
                                <ul className="list-inside list-disc text-left">
                                    <li>Developing Language Skills</li>
                                    <li>Building Confidence for Effective Communication</li>
                                    <li>Structured Thinking</li>
                                    <li>The Importance of Body Language</li>
                                </ul>
                            </li>
                        </ul>

                        <p className="text-lg text-gray-700 mb-4">
                            By investing in your communication skills, you’ll gain a competitive edge in the job market and excel in your professional career.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Join Us</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Join Trident and unlock the power of effective communication!
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default CommunicationConfidence;
