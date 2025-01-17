import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const InnovationEntrepreneurship = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/innovation-entrepreneurship.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Innovation & Entrepreneurship
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
                        <Link href="/activities" className="hover:underline">
                            Activities
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Innovation & Entrepreneurship</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section className="text-center mb-8">
                    <p className="text-xl text-gray-600 mb-8">
                        The journey of innovation is fueled by creative thinking, risk-taking, and problem-solving. At Trident Academy of Technology, we are committed to fostering a culture of innovation and entrepreneurship. Our students are encouraged to embrace the entrepreneurial spirit, create groundbreaking products, and explore their ideas to contribute to the future of technology and business.
                    </p>
                </section>

                {/* Innovation Boosters Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        10 Ways to Boost Innovations
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Have a vision for change</li>
                        <li>Fight the fear of change</li>
                        <li>Think like a venture capitalist</li>
                        <li>Have a dynamic suggestion scheme</li>
                        <li>Break the rules</li>
                        <li>Give everyone two jobs</li>
                        <li>Collaborate</li>
                        <li>Welcome failure</li>
                        <li>Build prototypes</li>
                        <li>Be passionate</li>
                    </ul>
                </section>

                {/* TAT Innovation Ecosystem Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Innovation Ecosystem at TAT
                    </h2>
                    <p className="text-gray-600 mb-4">
                        At Trident Academy of Technology, innovation is at the heart of what we do. Our Innovation and Entrepreneurship Development Centre (IEDC), supported by the Department of Science & Technology (DST), Government of India, New Delhi, plays a pivotal role in encouraging students to engage in innovative activities. The centre provides students with the necessary facilities, guidance, and resources to turn their ideas into reality.
                    </p>
                </section>

                {/* ED Cell Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Entrepreneurship Development Cell (ED Cell)
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Our Entrepreneurship Development Cell (ED Cell) is dedicated to nurturing the entrepreneurial mindset among students. The cell supports students in their entrepreneurial journey through mentorship, skill-building workshops, and access to resources. It serves as a platform for students to launch startups and innovative ventures.
                    </p>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default InnovationEntrepreneurship;
