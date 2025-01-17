import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const AttitudeIsEverything = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/attitude-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Attitude is Everything
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
                    <li className="text-gray-600">Attitude is Everything</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="attitude-is-everything" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">Attitude is Everything</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            “Your thoughts form your world.”
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            One of the most important steps one can take toward achieving their greatest potential in life is to learn to monitor their attitude and its impact on work performance, relationships, and everyone around them.
                        </p>

                        <p className="text-lg text-gray-700 mb-4">
                            We believe that the mind is a computer that can be programmed with the right software to make it productive or not. One's inner dialogue is the software that programs the attitude, which ultimately determines how one presents themselves to the world around them. The individual has control over the programming—what goes in is reflected in what comes out.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Our Philosophy</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Keeping this in mind, we at Trident strongly believe that “Attitude is Everything.” Therefore, we focus on helping our students tune their attitude to achieve long-term success. We begin our academic sessions with motivational talks to orient them towards their goals.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Our Past Sessions</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            In the last academic session, we were honored to have eminent motivational speaker Dr. Mangesh Dash, and industry HR expert Dr. Panduranga Rao from IVRCL. Their sessions were enriching and included numerous activities and visual demos designed to build a positive attitude and guide students towards preparing for their ultimate goals.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Dr. Mangesh Dash conducted an insightful session on "Goal Setting & Working towards It," which encouraged students to set clear objectives and work diligently towards achieving them. Dr. Panduranga Rao led a seminar titled "Attitude Is Everything," where he emphasized the importance of cultivating the right mindset for success in both personal and professional life.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Looking Forward</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            These motivational sessions are just a starting point in our journey of shaping students' attitudes for success. At Trident, we continue to focus on empowering students with the tools and mindset needed to achieve their greatest potential.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default AttitudeIsEverything;
