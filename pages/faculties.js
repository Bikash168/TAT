import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Faculty = () => {
    const facultyMembers = [
        {
            name: "Dr. Sanjay Kumar Behera",
            email: "hodce@tat.ac.in",
            designation: "Associate Professor",
        },
        {
            name: "Dr. Roma Sahoo",
            email: "roma.sahoo@tat.ac.in",
            designation: "Assistant Professor",
        },
        {
            name: "Mr. Sibananda Rout",
            email: "sibananda.rout@tat.ac.in",
            designation: "Assistant Professor",
        },
        {
            name: "Mr. Biswajit Nayak",
            email: "biswajit.nayak@tat.ac.in",
            designation: "Assistant Professor",
        },
        {
            name: "Mr. Tapan Kumar Nayak",
            email: "tapan.nayak@tat.ac.in",
            designation: "Assistant Professor",
        },
        {
            name: "Ms. Sagarika Swain",
            email: "sagarika.swain@tat.ac.in",
            designation: "Assistant Professor",
        },
        {
            name: "Ms. Nillema Baisakhi",
            email: "nillema.baisakhi@tat.ac.in",
            designation: "Assistant Professor",
        },
        {
            name: "Mr. J. Nihar Ranjan",
            email: "nihar.ranjan@tat.ac.in",
            designation: "Assistant Professor",
        },
        {
            name: "Ms. Ankita Bohidar",
            email: "ankita.bohidar@tat.ac.in",
            designation: "Assistant Professor",
        },
        {
            name: "Ms. Smruti Saswati Das",
            email: "smrutisaswati.das@tat.ac.in",
            designation: "Assistant Professor",
        },
        {
            name: "Mr. Sarbajit Panda",
            email: "sarbajit.panda@tat.ac.in",
            designation: "Assistant Professor",
        },
    ];

    return (
        <Layout title="Faculty | Civil Engineering | Trident Academy of Technology">
            {/* Background Image Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Academics.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Faculty Members of Civil Engineering Department
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-8">
                <ul className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg space-x-2">
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
                    <li>
                        <Link href="/civil-engineering" className="hover:underline">
                            Civil Engineering
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Faculty</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Faculty Cards */}
                    {facultyMembers.map((faculty, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">{faculty.name}</h3>
                            <p className="text-base sm:text-lg mb-2">{faculty.designation}</p>
                            <p className="text-base sm:text-lg mb-4">
                                <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline">
                                    {faculty.email}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default Faculty;
