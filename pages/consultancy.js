import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Consultancy = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/consultancy.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Consultancy Projects
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
                        <Link href="/research" className="hover:underline">
                            Research
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Consultancy Projects</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section className="text-center">
                    <p className="text-xl text-gray-600 mb-8">
                        Trident Academy of Technology's consultancy projects span a wide range of industries, from skill development and sustainable energy to financial planning. Below are the highlights of some of our prominent consultancy projects.
                    </p>
                </section>

                {/* Consultancy Projects List */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Consultancy Projects (2021-22)
                    </h2>

                    {/* List of Consultancy Projects */}
                    <ul className="space-y-6">
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Dr. R. N. Satapathy - OSDA, Govt. of Odisha</h3>
                            <p className="text-gray-600"><strong>Title:</strong> PMKVY 3.0 CSSM</p>
                            <p className="text-gray-600"><strong>Amount received:</strong> ₹252,399</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Dr. R. N. Satapathy - OTDS, Govt. of Odisha</h3>
                            <p className="text-gray-600"><strong>Title:</strong> PRAYAS</p>
                            <p className="text-gray-600"><strong>Amount received:</strong> ₹4,809,249</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Dr. R. N. Satapathy - ORMAS, Govt. of Odisha</h3>
                            <p className="text-gray-600"><strong>Title:</strong> MASON</p>
                            <p className="text-gray-600"><strong>Amount received:</strong> ₹699,864</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Dr. Sonam Subhadarshini - INLAND ENGINEERS</h3>
                            <p className="text-gray-600"><strong>Title:</strong> A study on Value Management of Employees</p>
                            <p className="text-gray-600"><strong>Amount received:</strong> ₹524,870</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Dr. Nargis Begum - SPARC</h3>
                            <p className="text-gray-600"><strong>Title:</strong> A Study on the Employees of SPARC in Financial Planning and Wellness</p>
                            <p className="text-gray-600"><strong>Amount received:</strong> ₹512,000</p>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-12">
                        Consultancy Projects (2020-21)
                    </h2>
                    <ul className="space-y-6">
                        {/* Repeat the same structure for the 2020-21 list */}
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Dr. R. N. Satapathy - ORMAS, Govt. of Odisha</h3>
                            <p className="text-gray-600"><strong>Title:</strong> MASON</p>
                            <p className="text-gray-600"><strong>Amount received:</strong> ₹572,616</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Dr. Sakuntala Mohapatra - INLAND ENGINEERS</h3>
                            <p className="text-gray-600"><strong>Title:</strong> 120KW Solar Installation (EPC)</p>
                            <p className="text-gray-600"><strong>Amount received:</strong> ₹1,978,608</p>
                        </li>
                        {/* Repeat for other projects... */}
                    </ul>

                    {/* You can continue adding more consultancy project data in similar fashion */}
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default Consultancy;
