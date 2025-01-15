import Layout from '../components/Layout';
import Footer from '../components/Footer';

const TCSR = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/tcsr-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Trident Center for Sustainability Research (TCSR)
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
                        <a href="/tcsr" className="hover:underline">
                            Trident Center for Sustainability Research (TCSR)
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Empowering Sustainability through Research and Innovation
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        The Trident Center for Sustainability Research (TCSR) is dedicated to developing innovative and practical solutions for a sustainable future. Through interdisciplinary collaborations, we aim to address the challenges posed by climate change and environmental harm.
                    </p>
                </section>

                {/* TCSR Overview Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">About TCSR</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        TCSR is home to the SACRED department, along with other sustainability-focused units like Decarb Climate Action Research LLP and WWS Energy LLP. We work towards a unified goal—addressing the global climate crisis through capacity building, innovations, and research.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Our approach is interdisciplinary, integrating expertise from diverse faculties to develop sustainable solutions that are both practical and equitable. We aim to create a learning ecosystem that enables all stakeholders to understand their roles in combating the climate crisis.
                    </p>
                </section>

                {/* SDG Goals Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Commitment to the SDGs</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        We align our initiatives with the United Nations Sustainable Development Goals (SDGs), focusing on the following key goals:
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Goal 4: Ensure inclusive and equitable quality education</li>
                        <li>Goal 5: Achieve gender equality</li>
                        <li>Goal 6: Ensure availability and sustainable management of water and sanitation</li>
                        <li>Goal 7: Ensure access to affordable, renewable energy</li>
                        <li>Goal 13: Climate Action</li>
                        <li>Goal 17: Partnerships for the Goals</li>
                    </ul>
                </section>

                {/* TCSR Initiatives Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Initiatives</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        At TCSR, we are taking measurable actions to meet the SDGs and contribute to a sustainable future. Some of our key initiatives include:
                    </p>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-4">Energy Efficient Measures</h4>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Replacing old energy-consuming FTLs with energy-efficient LED bulbs</li>
                        <li>Upgrading to energy-efficient BLDC fans</li>
                        <li>Instituting an energy audit and transitioning to a smart energy grid with IoT and Wireless Sensor Network (WSN)</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-4">Renewable Energy Projects</h4>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Installing a rooftop 250 KWP solar PV plant</li>
                        <li>Developing a hybrid canal-top solar PV and wind energy farm</li>
                        <li>Converting our fleet of transport vehicles to hybrid and full EV types</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-4">Water and Waste Management</h4>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Implementing circular economy models for daily kitchen waste and sewage water management</li>
                        <li>Introducing water harvesting and recharge systems to sustain groundwater levels</li>
                    </ul>

                    <h4 className="text-2xl font-semibold text-blue-600 mb-4">Plastic Reduction</h4>
                    <p className="text-lg text-gray-700 mb-6">
                        We have strictly prohibited the use of single-use plastics and non-biodegradable packaging items on campus as part of our environmental responsibility efforts.
                    </p>
                </section>

            </div>

            <Footer />
        </Layout>
    );
};

export default TCSR;
