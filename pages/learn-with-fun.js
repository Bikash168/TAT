import Layout from '../components/Layout';
import Footer from '../components/Footer';

const LearnWithFun = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/learn-with-fun-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Learn with Fun
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
                        <a href="/best-practices" className="hover:underline">
                            Best Practices
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/learn-with-fun" className="hover:underline">
                            Learn with Fun
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Fostering Innovation and Creativity Through Student Clubs
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        At Trident Academy of Technology, we believe in 'Learning with Fun,' fostering an environment where students can explore their passions through various clubs. These clubs enhance creativity, skills, and leadership qualities, extending learning beyond the classroom.
                    </p>
                </section>

                {/* Clubs List Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Active Student Clubs</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        We have 18 student clubs, each designed to help students gain expertise in technical, cultural, and leadership areas. The clubs play a pivotal role in shaping students' skills to meet industry requirements.
                    </p>
                    <ol className="list-decimal pl-8 text-lg text-gray-700 space-y-2">
                        <li><a href="/clubs/data-science" className="hover:underline">Data Science Club</a></li>
                        <li><a href="/clubs/ioe" className="hover:underline">IoE Club (Internet of Everything)</a></li>
                        <li><a href="/clubs/mad" className="hover:underline">MAD Club</a></li>
                        <li><a href="/clubs/robo" className="hover:underline">Robo Club</a></li>
                        <li><a href="/clubs/mocnet" className="hover:underline">MOCNET Club</a></li>
                        <li><a href="/clubs/micron" className="hover:underline">Micron Club</a></li>
                        <li><a href="/clubs/energy-audit" className="hover:underline">Energy Audit Club</a></li>
                        <li><a href="/clubs/hetnet" className="hover:underline">HetNET Club</a></li>
                        <li><a href="/clubs/autozoomer" className="hover:underline">AutoZoomer Club</a></li>
                        <li><a href="/clubs/renewable-energy" className="hover:underline">Renewable Energy Club</a></li>
                        <li><a href="/clubs/sigmage" className="hover:underline">SigMage Club</a></li>
                        <li><a href="/clubs/plm" className="hover:underline">PLM Club</a></li>
                        <li><a href="/clubs/electrical-design" className="hover:underline">Electrical Design Club</a></li>
                        <li><a href="/clubs/aadishya" className="hover:underline">AADISHYA Club</a></li>
                        <li><a href="/clubs/mobility" className="hover:underline">Mobility Club</a></li>
                        <li><a href="/clubs/english-literary" className="hover:underline">English Literary Club</a></li>
                        <li><a href="/clubs/pyramid" className="hover:underline">PYRAMID Club</a></li>
                        <li><a href="/clubs/programming" className="hover:underline">Programming Club</a></li>
                    </ol>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default LearnWithFun;
