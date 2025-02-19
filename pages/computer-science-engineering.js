import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const ComputerScienceEngineering = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Layout title="Computer Science & Engineering | Trident Academy of Technology">

            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Computer-Science-Engineering.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Computer Science & Engineering Department
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
                        <Link href="/academics" className="hover:underline">
                            Academics
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/departments" className="hover:underline">
                            Departments
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Computer Science & Engineering</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 mt-[1 px] sm:mt-[2.5px] lg:mt-[5px] mb-16">

                {/* Sidebar */}
                <aside className="lg:w-1/4 w-full bg-[#002147] text-white p-4 rounded-lg shadow-md">
                    <button
                        className="lg:hidden text-white mb-2 flex items-center"
                        onClick={toggleSidebar}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>

                    </button>

                    <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:w-full`}>
                        <ul className="space-y-3">
                            {[
                                { name: 'Overview', link: '/overview-computer-science-engineering' },
                                { name: 'Question Bank', link: '#question-bank' },
                                { name: 'Courses', link: '#courses' },
                                { name: 'Faculties', link: '#faculties' },
                                { name: 'Laboratories', link: '#laboratories' },
                                { name: 'BPUT Questions (PY)', link: '#bput-questions' },
                                { name: 'THE QUBIT – School of Computing Newsletter', link: '#newsletter' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.link}>
                                        <button className="w-full text-left bg-[#004D73] text-white p-2 rounded-lg transition hover:bg-[#003355]">
                                            {item.name}
                                        </button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </aside>


                {/* Main Content Section */}
                <div className="w-full lg:w-3/4 space-y-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 id="overview" className="text-xl font-bold mb-4">Overview</h2>
                        <p>
                            Department of Computer Science & Engineering (CSE) – one of the premier branches of undergraduate program in engineering was established in the year 2005 with the approval of AICTE and in affiliation with Biju Patnaik University of Technology (BPUT), Odisha. The B.Tech programme of Computer Science Engineering has been accredited by National Board of Accreditation (NBA) in the year 2016)  and National Assessment and Accreditation Council(NAAC). The field of Computer Science has been the most favoured area of the NRI promoters of Trident Group.
                        </p>
                        <p>
                            Since its inception, this branch has been producing hi-class computer professionals and technocrats with the support of available state-of-the-art corporate styled academic infrastructure and quality faculty members. The Department of CSE offers both undergraduate and postgraduate programs in Computer Science.
                        </p>
                        <p>
                            Initially, the Department was started with an intake capacity of 60 and subsequently escalated its intake capacity to meet the global requirement. The Department started M.Tech course in Computer Science Engineering with an annual intake of 18 students from the year 2012. The department has a good number of faculty members  with M.Tech/Ph.D qualification.
                        </p>
                        <p>
                            In order to cope up with the changing need of the industry as well as academia, the Department of CSE at present offers following programme variants with unique philosophies and objectives:
                        </p>
                    </div>

                    <div id="courses" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Courses Offered</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold">1. B.Tech. in Computer Science & Engineering - 180 Seats</h3>
                                <p>
                                    B.Tech. in Computer Science Engineering (CSE) is an academic programme of four years of duration which integrates a study on theoretical basis of the field of Computer Science as well as the technological basis of the field of Computer Science – the Computer Engineering from the industry perspective. The programme primarily emphasises on laying a strong theoretical background through imparting studies of the basics of computer programming, networking and computer organization and architecture while also comprising a plethora of other versatile topics. All the subjects and topics that are covered under B.Tech. in Computer Science Engineering are related to algorithms, computation, programming languages, theory of computing, theory of automata, programme design, computer hardware, computer software, software engineering, computer graphics, etc. It is a comprehensive course focusing on computer systems as well as computer applications. </p>

                                <h4>Beneficiaries</h4>

                                <p>Students pursuing this Bachelor’s program in Computer Science Engineering are taught about the design, implementation as well as management of computer software and computer hardware. Upon successful completion of this B.Tech.(CSE) degree, computer science engineers are engaged in a variety of fields of computing and computer engineering, ranging from the design of individual microprocessor and microcontroller based embedded</p>

                                <p>systems, real-time systems, supercomputers and personal computers to design and development of the software systems that powers them for managing and controlling their action, provides them artificial intelligence, supports them in decision making and exploring new avenues. Through B.Tech. in Computer Science Engineering, the students are taught to understand, learn and use the different programming languages, networking and telecommunications, digital and analogue electronics, etc. The use of computers has become an integral part of human life – a bare necessity in everyday life and therefore, its importance is inevitable, hence the course of Computer Science Engineering continues to hold its extreme popularity among all the stakeholders – students, parents and employers. Due to the increasing demand for the course and its importance in the industry sector, a career in Computer Science Engineering is highly lucrative.</p>

                            </div>
                            <div>
                                <h3 className="font-semibold">2. M.Tech. in Computer Science & Engineering - 18 Seats</h3>
                                <p>
                                    A postgraduate program emphasizing research and advanced skills in software development, network security, and data analytics.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="clubs" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Clubs</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Cyber Security Club:</strong> Dedicated to enhancing students' knowledge in ethical hacking, network security, and cryptography.</li>
                            <li><strong>Brain Logic Club:</strong> Focused on logical reasoning, problem-solving, and coding challenges.</li>
                            <li><strong>Hackathon Club:</strong> Organizes hackathons to promote innovation and creativity among students.</li>
                            <li><strong>Cloud Computing Club:</strong> Provides hands-on experience with cloud platforms like AWS, Azure, and Google Cloud.</li>
                        </ul>
                    </div>

                    <div id="faculties" className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Faculties</h2>
                        <p>
                            The department is supported by experienced faculty specializing in areas such as Artificial Intelligence, Machine Learning, Big Data, and Cybersecurity.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default ComputerScienceEngineering;
