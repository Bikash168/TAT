import Layout from '../components/Layout';
import Footer from '../components/Footer';

const AttendanceMonitoring = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/attendance-monitoring-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Attendance Monitoring
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
                        <a href="/attendance-monitoring" className="hover:underline">
                            Attendance Monitoring
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Monitoring Attendance & Student Performance
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        At Trident Academy of Technology, the attendance of all theory classes is updated and regularly monitored through our e-governance system. Attendance plays a crucial role in internal assessments and is rewarded with recognition for top performers.
                    </p>
                </section>

                {/* Attendance Rewards Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Attendance Rewards</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Since 2005, Trident Academy has been rewarding top attendance achievers. Each semester, five students who secure the highest attendance in their respective classes (semester/branch/section) receive a cash prize of Rs 5000/-.
                    </p>
                    <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                        <li>Top 5 students in each Class/Semester/Branch/Section awarded Rs 5000/- each.</li>
                        <li>Continuous monitoring of attendance for each student through e-governance system.</li>
                        <li>SMS notifications sent to parents of students with less than 70% attendance every month.</li>
                    </ul>
                </section>

                {/* Attendance Monitoring Committee Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Attendance Monitoring Committee</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        A dedicated committee oversees the entire attendance monitoring process and ensures that students are encouraged to maintain consistent attendance. The committee also takes necessary actions for students falling short of attendance requirements.
                    </p>
                    <h4 className="text-2xl font-semibold text-blue-600 mb-4">Committee Members</h4>
                    <ul className="list-none pl-0 text-lg text-gray-700 space-y-2">
                        <li><strong>Aditya Narayan Das</strong> (CSE)</li>
                        <li><strong>Dhirendra Prasad Pattanayak</strong> (Math)</li>
                        <li><strong>Madan Mohan Swain</strong> (Office)</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default AttendanceMonitoring;
