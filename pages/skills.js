import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const SkillUpYourBreak = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/winter-summer-training-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Skill Up Your Break: Winter & Summer Training Extravaganza
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
                    <li className="text-gray-600">Skill Up Your Break</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="winter-summer-training" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">Skill Up Your Break: Winter & Summer Training Extravaganza</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            The tech industry is dynamic, and so should your skillset. At Trident, we believe in empowering you to stay ahead of the curve. That’s why we offer intensive Winter & Summer Training Camps, designed to bridge the gap between theoretical knowledge and practical application.
                        </p>

                        <p className="text-lg text-gray-700 mb-4">
                            These focused programs are your chance to:
                        </p>

                        <ul className="list-disc text-left text-lg text-gray-700 mb-4 pl-10">
                            <li>Deep-dive into in-demand technologies: Master cutting-edge skills in areas like Cloud Computing, Android Development, Design Software (AutoCAD & Solidworks), and more.</li>
                            <li>Boost your employability: Gain a competitive edge in the job market by acquiring industry-relevant certifications (HP Certification on J2E, Core Java, PHP, Big Data).</li>
                            <li>Explore new horizons: Delve into emerging fields like Sustainability, equipping yourself for the future.</li>
                            <li>Sharpen your analytical edge: Hone your quantitative skills with an exclusive Finance Lab course.</li>
                        </ul>

                        <p className="text-lg text-gray-700 mb-4">
                            Here’s a glimpse into the exciting world of opportunities that await:
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Program Highlights</h3>
                        <ul className="list-decimal text-left text-lg text-gray-700 mb-4 pl-10">
                            <li><strong>Programming & Development:</strong> Cloud Computing (Fundamental & Advanced), Android (Fundamental), HP Certification on J2E, Core Java, PHP, Big Data.</li>
                            <li><strong>Design & Engineering:</strong> AutoCAD, Solidworks.</li>
                            <li><strong>Financial Analysis:</strong> Finance Lab (New!)</li>
                            <li><strong>Data & Analytics:</strong> Analytical Lab (New!)</li>
                            <li><strong>Sustainability:</strong> Sustainability for the Future (New!)</li>
                        </ul>

                        <p className="text-lg text-gray-700 mb-4">
                            These intensive training camps are meticulously designed to:
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Our Program Approach</h3>
                        <ul className="list-decimal text-left text-lg text-gray-700 mb-4 pl-10">
                            <li><strong>Maximize learning:</strong> Benefit from small class sizes and personalized attention from experienced instructors.</li>
                            <li><strong>Focus on practical application:</strong> Get hands-on experience through interactive projects and real-world case studies.</li>
                            <li><strong>Fit your schedule:</strong> Optimize your breaks with flexible program durations, allowing you to upskill without disrupting your academic commitments.</li>
                        </ul>

                        <p className="text-lg text-gray-700 mb-4">
                            Don’t just fill your breaks, fill them with purpose! Invest in your future with Trident’s Winter & Summer Training Camps.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Join Us</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Join Trident and unlock a world of skill-enhancing opportunities during your break!
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default SkillUpYourBreak;
