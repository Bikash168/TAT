import Layout from '../components/Layout';
import Footer from '../components/Footer';

const CollegeCommittees = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/college-committees-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    College Committees
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
                        <a href="/college-committees" className="hover:underline">
                            College Committees
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Transparent and Participative Governance
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        At Trident Academy of Technology, we ensure participative and transparent institutional governance through a structured framework of college committees.
                    </p>
                </section>

                {/* Committees List Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">List of College Committees</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        The college functions through 25 decentralised committees comprising faculty members, ensuring effective and transparent management.
                    </p>
                    <ol className="list-decimal pl-8 text-lg text-gray-700 space-y-2">
                        <li>Academic Monitoring (Including Lesson-plan monitoring)</li>
                        <li>Alumni Coordination</li>
                        <li>Anti-Ragging and Disciplinary</li>
                        <li>Canteen Committee</li>
                        <li>Scholarship Committee</li>
                        <li>Cultural Committee</li>
                        <li>E-Governance & System Coordinator Committee</li>
                        <li>Faculty Development & Performance Appraisal Committee</li>
                        <li>Grievance Redressal Committee (General)</li>
                        <li>Grievance Redressal Committee (Women)</li>
                        <li>Grievance Redressal (SC/ST)</li>
                        <li>Entrepreneurship and Innovation Promotion</li>
                        <li>Industry Interface (MoU, COE, Corporate Relations & Student Internship)</li>
                        <li>DST-Inspire</li>
                        <li>Medical and Community Service</li>
                        <li>Library</li>
                        <li>Proctorial</li>
                        <li>Student and Staff Welfare</li>
                        <li>Revenue</li>
                        <li>Hostel Committee</li>
                        <li>Sports & Games Committee</li>
                        <li>Attendance & Performance Monitoring Committee</li>
                        <li>I.S.R. Committee</li>
                        <li>Career Guidance Committee</li>
                        <li>Finance Committee</li>
                    </ol>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default CollegeCommittees;
