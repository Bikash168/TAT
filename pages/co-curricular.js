import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const CoCurricular = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/co-curricular.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Co-Curricular Activities
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
                        <Link href="/activities" className="hover:underline">
                            Activities
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Co-Curricular Activities</li>
                </ul>
            </nav>
            <div className="container mx-auto p-8">
                <section className="text-center">
                    <p className="text-xl text-gray-600 mb-8">
                        The technical and cultural clubs at Trident Academy of Technology offer students the chance to develop skills outside of the classroom and engage in various extracurricular activities. With multiple clubs formed under the "TECHNOVATION" scheme, students can explore their interests in diverse fields.
                    </p>
                </section>

                {/* Co-Curricular Clubs Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        College Level Clubs
                    </h2>

                    {/* Clubs List */}
                    <ul className="space-y-6">
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Machine Learning</h3>
                            <p className="text-gray-600">Teacher Guides: Mohini Prasad Mishra (I/C)</p>
                            <p className="text-gray-600">Purpose: Prepare students through hands-on learning experience to pursue careers in the field.</p>
                            <p className="text-gray-600">Activities: Seminars, Workshops, Project and Quiz competitions</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Hackathon</h3>
                            <p className="text-gray-600">Teacher Guides: Aditya Das (I/C)</p>
                            <p className="text-gray-600">Purpose: Do-</p>
                            <p className="text-gray-600">Activities: Do-</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">IoT</h3>
                            <p className="text-gray-600">Teacher Guides: Shuvhendra Tripathi (I/C), S.M. Ali</p>
                            <p className="text-gray-600">Purpose: Do-</p>
                            <p className="text-gray-600">Activities: Do-</p>
                        </li>
                        {/* Add more clubs in similar structure */}
                    </ul>
                </section>

                {/* Departmental Clubs Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Departmental Clubs
                    </h2>

                    {/* Departmental Clubs List */}
                    <ul className="space-y-6">
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Mechatronics</h3>
                            <p className="text-gray-600">Teacher Guides: S.M. Ali (I/C), Shuvendra Tripathy</p>
                            <p className="text-gray-600">Purpose: Do-</p>
                            <p className="text-gray-600">Activities: Do-</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-xl text-gray-700">Cyber Security Club</h3>
                            <p className="text-gray-600">Teacher Guides: Dakshya Prasad Pati</p>
                            <p className="text-gray-600">Purpose: Do-</p>
                            <p className="text-gray-600">Activities: Do-</p>
                        </li>
                        {/* Add more departmental clubs here */}
                    </ul>
                </section>

                {/* Membership and Club Relaunch Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Membership and Relaunch
                    </h2>
                    <p className="text-gray-600 mb-4">
                        A student is free to become a member of both departmental and college clubs, subject to a maximum of 3 (Three) memberships in one academic session. After a club closes its membership (Minimum 20 members and maximum 60 members), the relaunch date will be intimated to the member-students by the concerned teacher-guides.
                    </p>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default CoCurricular;
