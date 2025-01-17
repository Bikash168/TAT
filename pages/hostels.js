import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Hostels = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/hostel.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Hostels
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
                        <Link href="/facilities" className="hover:underline">
                            Facilities
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Hostels</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Hostel Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hostel Overview</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The college has three in-campus hostels with a capacity of 1200 inmates. The rooms are spacious, well-furnished, and duly maintained. Mess facilities are provided with hygienic vegetarian and non-vegetarian foods at a nominal rate. Additionally, the hostel offers Wi-Fi coverage, a library, and a common room with TV facilities.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        The hostel also provides essential medical facilities with a consulting room, first aid kits, and a dedicated pharmacist. Students can access the Central Library and enjoy recreational facilities like indoor games and television.
                    </p>
                </section>

                {/* Mess Menu */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Mess Menu</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        The college offers a variety of meal options, ensuring students are provided with nutritious and balanced meals. The mess serves both vegetarian and non-vegetarian meals, catering to the diverse dietary preferences of the students.
                    </p>
                </section>

                {/* Management Committee */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Management Committee</h3>
                    <ul className="list-disc ml-6 text-lg text-gray-600 mb-6">
                        <li>P.K. Sahoo, H.O.D.(EEE), Chairman - 9437389129</li>
                        <li>Chandan Kumar Das, Asst. Professor(Physics) Superintendent – 9437435911</li>
                        <li>Sujata Mohanty, Asst. Professor(Physics), Superintendent - 8984669407</li>
                        <li>Soumayakant Samantsinghar, Asst. Professor(English), Superintendent - 9437308847</li>
                        <li>Mrs. Bandiata Swain, Asst. Professor(Biotech Sciences), Superintendent - 9437315290</li>
                    </ul>
                </section>

                {/* Support Staff */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Support Staff</h3>
                    <ul className="list-disc ml-6 text-lg text-gray-600 mb-6">
                        <li>Janaki Mohanty, Caretaker - 9438298457</li>
                        <li>Pankajini Das, Caretaker - 9238459704</li>
                        <li>Arunabala Patra, Caretaker - 9853394068</li>
                        <li>Ashok Kumar Samal, Caretaker - 9237084504</li>
                        <li>Bijay Kumar Barik, Caretaker - 8093711895</li>
                        <li>Kamalakanta Dalei, Caretaker - 9237321481</li>
                        <li>Soraj Kumar Kandi, Caretaker - 8908242819</li>
                    </ul>
                </section>

                {/* Mess Management */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Mess Management</h3>
                    <ul className="list-disc ml-6 text-lg text-gray-600 mb-6">
                        <li>Prassanna Kumar Mallick, Manager, Mess - 9861159360</li>
                        <li>Dushmanta Nayak, Asst. Manager, Mess - 9776718862</li>
                    </ul>
                </section>

                {/* Hostel Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/hostel1.jpg" alt="Hostel Room" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/hostel2.jpg" alt="Hostel Mess" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/hostel3.jpg" alt="Hostel Recreation" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default Hostels;
