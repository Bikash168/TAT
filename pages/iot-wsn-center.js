import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';

const IoTWSNCenter = () => {
    const [openTab, setOpenTab] = useState(null);

    const toggleTab = (tabIndex) => {
        setOpenTab(openTab === tabIndex ? null : tabIndex);
    };

    return (
        <Layout title="IoT & WSN Center | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/research-hubs.jpg')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    IoT & WSN Center
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-2 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
                <ul className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
                    <li>
                        <Link href="/" className="hover:underline flex items-center">
                            <span className="mr-1">🏠</span> Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/research" className="hover:underline">
                            Research
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">IoT & WSN Center</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-6">IoT & WSN Center</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        The IoT & WSN Center is a domain of excellence aimed at promoting explorative research in the field of software technology. Trident Academy of Technology has set up this center with a state-of-the-art IoT-WSN Lab as part of its high-end infrastructure. This initiative, guided by the Chief Mentor, is designed to contribute to Odisha's technological advancement and active involvement in Smart City projects.
                    </p>
                    <section className="mb-8">
                        <h2 className="text-3xl font-semibold mb-4">Core Objectives</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To train a technically proficient workforce to handle WSN setups and small wireless sensor devices.</li>
                            <li>Provide infrastructure to study and simulate wireless sensor networks under various conditions.</li>
                            <li>Enable faculty and students to explore WSN configurations, geographical simulations, and terrain-specific behavior.</li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-3xl font-semibold mb-4">Team Members</h2>
                        <ul className="space-y-2">
                            <li><strong>Abhaya Kumar Samal:</strong> Coordinator, Professor (ARG), Dept. of Computer Science & Engineering</li>
                            <li><strong>Santosh Kumar Sahoo:</strong> Co-Coordinator, Asst. Professor, Dept. of Computer Science & Engineering</li>
                            <li><strong>Padmavati Chand:</strong> Co-Coordinator, Asst. Professor, Dept. of Computer Science & Engineering</li>
                            <li><strong>Dayal Kumar Behera:</strong> Member, Asst. Professor, Dept. of Computer Science & Engineering</li>
                            <li><strong>Sudhansu Ranjan Lenka:</strong> Member, Asst. Professor, Dept. of Computer Science & Engineering</li>
                        </ul>
                    </section>

                    {/* Tabs */}
                    <div className="space-y-4">
                        {[
                            {
                                title: 'Scopes and Facilities',
                                content: `The IoT-WSN Center enables experimentation with various sensor technologies for societal applications. Students and researchers can simulate ‘smart’ gadgets, study node behavior, and measure network-related metrics such as energy consumption, end-to-end delay, and throughput. The infrastructure supports quick experimental setups and real-world use case simulations.`,
                            },
                            {
                                title: 'Experiment Scopes',
                                content: `Experiment with heterogeneous platforms, mobility scenarios, and IoT application development using state-of-the-art tools like Arduino, Raspberry Pi, and ZigBee.`,
                            },
                            {
                                title: 'Training Programs',
                                content: `Training sessions on processor-based SBCs, WSN setups with programmable coordinators, gateways, and end devices, as well as embedded programming for IoT application development.`,
                            },
                            {
                                title: 'B.Tech/M.Tech Projects & Publications',
                                content: `The IoT-WSN Center supports students in carrying out end-semester projects and publishing experimental findings.`,
                            },
                            {
                                title: 'Seminars and Workshops',
                                content: `Regularly organized seminars and workshops on emerging technologies for students and faculties.`,
                            },
                            {
                                title: 'Contact Persons',
                                content: `
                                Dr. A. K. Samal: Coordinator, Professor (ARG), Dept. of Comp. Sc. &Engg., Cell: +91-9437141314, Email: abhaya@tat.ac.in
                                Mr. S. K. Sahoo: Co-Coordinator, Asst. Professor, Dept. of Comp. Sc. &Engg., Cell: +91-9861387561, Email: santosh.sahoo@tat.ac.in
                                Dr. (Ms.) P. Chand: Co-Coordinator, Asst. Professor, Dept. of Comp. Sc. &Engg., Cell: +91-9437961032, Email: padmabati.chand@tat.ac.in
                            `,
                            },
                        ].map((tab, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden">
                                <button
                                    className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold"
                                    onClick={() => toggleTab(index)}
                                >
                                    {openTab === index ? '➖ ' : '➕ '} {tab.title}
                                </button>
                                {openTab === index && (
                                    <div className="px-4 py-3 bg-white">
                                        <p className="leading-relaxed">{tab.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default IoTWSNCenter;
