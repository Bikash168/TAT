import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Courses = () => {
    const courseCards = [
        {
            title: "Course for First Year",
            description: "Details of the courses offered in the first year.",
            pdf: "/pdfs/Civil-Engineering-1ST-YEAR.pdf",  // PDF path in the public folder
        },
        {
            title: "Course for Second Year",
            description: "Details of the courses offered in the second year.",
            pdf: "/pdfs/Civil-Engineering-2ND-YEAR.pdf",  // PDF path in the public folder
        },
        {
            title: "Course for Third Year",
            description: "Details of the courses offered in the third year.",
            pdf: "/pdfs/Civil-Engineering-3RD-YEAR.pdf",  // PDF path in the public folder
        },
        {
            title: "Course for Fourth Year",
            description: "Details of the courses offered in the fourth year.",
            pdf: "/pdfs/Civil-Engineering-4TH-YEAR.pdf",  // PDF path in the public folder
        },
        {
            title: "Add-On Course - Auto-Cad",
            description: "Additional courses that enhance students' skills.",
            pdf: "/pdfs/Auto-Cad.pdf",  // PDF path in the public folder
        },
        {
            title: "Add-On Course - Revit",
            description: "Additional courses that enhance students' skills.",
            pdf: "/pdfs/Revit.pdf",  // PDF path in the public folder
        },
        {
            title: "Add-On Course - Land-Surveying",
            description: "Additional courses that enhance students' skills.",
            pdf: "/pdfs/Land-Surveying.pdf",  // PDF path in the public folder
        },
        {
            title: "Add-On Course - staad-pro",
            description: "Additional courses that enhance students' skills.",
            pdf: "/pdfs/staad-pro.pdf",  // PDF path in the public folder
        },
    ];
    
    return (
        <Layout title="Courses | Trident Academy of Technology">
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
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Courses Offered at Trident Academy of Technology
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
                    <li className="text-gray-600">Courses</li>
                </ul>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Course Cards */}
                    {courseCards.map((card, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-base sm:text-lg mb-4">{card.description}</p>
                            <Link href={card.pdf} target="_blank">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                    View Summary (PDF)
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </Layout>
    );
};

export default Courses;
