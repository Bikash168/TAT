import Layout from '../components/Layout';
import Footer from '../components/Footer';

const StudentCouncil = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/student-council-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Student Council
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
                        <a href="/student-council" className="hover:underline">
                            Student Council
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Participative Campus Governance
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        The Student Council serves as an interface between the student community and the college administration, ensuring participative discipline and smooth campus operations.
                    </p>
                </section>

                {/* Formation of Student Council */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Formation of Student Council</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Each year, student members from the final year are nominated to the council based on their career orientation, discipline, leadership qualities, and positive attitude. Both men and women are equally represented, and members receive special ID cards for recognition.
                    </p>
                </section>

                {/* Purpose of Student Council */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Purpose of Student Council</h3>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Ensure smooth administration and present student grievances effectively.</li>
                        <li>Maintain discipline during events like TechFest and TriFest.</li>
                        <li>Guide and mentor junior students at various levels.</li>
                        <li>Communicate management policies to the student community.</li>
                    </ul>
                </section>

                {/* Members of Student Council */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Members of Student Council</h3>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300 text-left text-gray-700">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">Sl. No</th>
                                    <th className="border border-gray-300 px-4 py-2">BPUT Regd. No</th>
                                    <th className="border border-gray-300 px-4 py-2">Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Branch</th>
                                    <th className="border border-gray-300 px-4 py-2">Phone Nos</th>
                                    <th className="border border-gray-300 px-4 py-2">Email-ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { no: 1, reg: "1901289062", name: "Arpita Nayak", branch: "CSE-A", phone: "7978857225", email: "arpitanayak256@gmail.com" },
                                    { no: 2, reg: "1901289052", name: "Animesh Pattnaik", branch: "CSE-A", phone: "9853943827", email: "patnaikanimesh123@gmail.com" },
                                    // Add remaining members similarly
                                ].map((member, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2">{member.no}</td>
                                        <td className="border border-gray-300 px-4 py-2">{member.reg}</td>
                                        <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                                        <td className="border border-gray-300 px-4 py-2">{member.branch}</td>
                                        <td className="border border-gray-300 px-4 py-2">{member.phone}</td>
                                        <td className="border border-gray-300 px-4 py-2">{member.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default StudentCouncil;
