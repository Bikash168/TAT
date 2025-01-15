import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const CiscoThingQbator = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/cisco-thingqbator-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Cisco thingQbator: Empowering Innovation and Entrepreneurship
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
                    <li className="text-gray-600">Cisco thingQbator</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section id="cisco-thingqbator" className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">Cisco thingQbator: A Platform for Digital Innovation</h2>
                        <p className="text-xl text-gray-700 mb-4">
                            Cisco’s thingQbator program is a global initiative aimed at building digital skills, fostering local solutions to local problems, and encouraging student entrepreneurship.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Through thingQbator, Cisco has established a network of makerspaces worldwide, helping students learn about digital technologies in a hands-on environment and turn their ideas into working prototypes.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">ThingQbator Origins</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            The name “thingQbator” is derived from the combination of ‘Internet of Things’ (IoT) and ‘Incubator.’ Initially, thingQbator was an internal incubator within Cisco, but its success has led to its global expansion to university campuses, where it fosters innovation and entrepreneurship.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Our Vision and Objectives</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Cisco’s thingQbator in India has set up 18 makerspaces, empowering students to develop solutions for local challenges through digital innovation. The key objectives include:
                        </p>
                        <ul className="text-lg text-gray-700 mb-4 list-inside list-disc">
                            <li>Building digital skills through hands-on learning.</li>
                            <li>Enabling local solutions to local problems.</li>
                            <li>Connecting innovation with markets through cohorts.</li>
                            <li>Accelerating student entrepreneurship, helping them transition from job seekers to job creators.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">ThingQbator Makerspace</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Each Cisco thingQbator makerspace is equipped with the latest IoT and digital technologies, such as development boards, 3D printing tools, sensors, edge routers, and cloud infrastructure. These resources enable students to rapidly prototype their ideas.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">The Innovation Model</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            The thingQbator program follows an innovation cycle, with cohorts of students who join every 6 months. During this period, students have 24/7 access to the makerspace and resources, with mentorship and training to help them turn their prototypes into reality. At the end of the cycle, a demo-day showcases the best projects.
                        </p>

                        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Teams from Trident Academy of Technology</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            The following teams from Trident Academy of Technology were selected for Cohort-4 of Cisco thingQbator:
                        </p>
                        <ul className="text-lg text-gray-700 mb-4 list-inside list-disc">
                            <li>**Daksha edu-tech**: Ashutosh Routaray, Ashutosh Mohapatra, Subhakanta Satapath</li>
                            <li>**Making emergency services accessible to the differently abled**: Simrita Mishra, Amanrajaku@gmail.com, Aryanabhinav168@gmail.com</li>
                            <li>**Replacement for highly expensive air purifier**: Simrita Mishra, Amanrajaku@gmail.com, Aryanabhinav168@gmail.com</li>
                            <li>**Apps that aid college students**: Pratik Sahu, pratikshyagochhayat@gmail.com, pratikjena488@gmail.com, Piyush Kumar Prusty</li>
                            <li>**Decentralized feed customizer and collector**: Abhishek Ranjan, bs5157891@gmail.com</li>
                        </ul>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default CiscoThingQbator;
