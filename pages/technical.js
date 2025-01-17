import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const TechnicalAugmentation = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/technical-augmentation-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Level Up Your Tech Skills: Trident’s 3-Step Technical Augmentation
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
                    <li className="text-gray-600">Technical Augmentation</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="technical-augmentation" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">Level Up Your Tech Skills: Trident’s 3-Step Technical Augmentation</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            In today’s dynamic tech landscape, staying ahead of the curve is crucial. At Trident, we offer a comprehensive 3-step approach to augment your technical skills and prepare you for industry success.
                        </p>

                        <p className="text-lg text-gray-700 mb-4">
                            Our 3-step program is designed to help you:
                        </p>

                        <div className="space-y-12">
                            {/* Step 1: Building a Strong Foundation */}
                            <div className="step-container bg-white shadow-lg p-6 rounded-lg">
                                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 1: Building a Strong Foundation</h3>
                                <ul className="list-disc text-left text-lg text-gray-700 mb-4 pl-10">
                                    <li><strong>Expert-led classroom training:</strong> Gain a solid understanding of core concepts in programming languages like C, C++, Data Structures, Java, and Python through interactive sessions.</li>
                                    <li><strong>Practice makes perfect:</strong> Hone your coding skills through online and offline tests, solidifying your grasp of fundamental principles.</li>
                                </ul>
                            </div>

                            {/* Step 2: Deepen Your Expertise Through Clubs */}
                            <div className="step-container bg-white shadow-lg p-6 rounded-lg">
                                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 2: Deepen Your Expertise Through Clubs</h3>
                                <ul className="list-disc text-left text-lg text-gray-700 mb-4 pl-10">
                                    <li><strong>Join our vibrant Tech Clubs:</strong> Over 20 specialized clubs cater to diverse interests, from Big Data and Programming to IoT and Circuit Designing.</li>
                                    <li><strong>Hands-on learning:</strong> Take on real-world projects, collaborate with peers, and explore cutting-edge technologies in a fun and engaging environment.</li>
                                </ul>
                            </div>

                            {/* Step 3: Industry-Ready Specialization */}
                            <div className="step-container bg-white shadow-lg p-6 rounded-lg">
                                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 3: Industry-Ready Specialization</h3>
                                <ul className="list-disc text-left text-lg text-gray-700 mb-4 pl-10">
                                    <li><strong>Specialized Industry-Fit Training:</strong> Partner with esteemed organizations like ISTD to access advanced training programs tailored to specific industry needs.</li>
                                    <li><strong>Become job-ready:</strong> Graduate with the skills and certifications highly sought-after by top employers, maximizing your career potential.</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 mb-4">
                            This structured, yet dynamic approach empowers you to build a strong foundation, explore your passions, and acquire industry-specific expertise.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Trident’s Technical Augmentation Program</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Trident’s Technical Augmentation Program equips you to not only graduate with a degree, but also with the confidence and skills to excel in your chosen field.
                        </p>

                        <p className="text-lg text-gray-700 mb-4">
                            Start your journey today and be ready for tomorrow's tech industry!
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default TechnicalAugmentation;
