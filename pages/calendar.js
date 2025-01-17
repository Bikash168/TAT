import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const Calendar = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/calendar.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Academic Calendar
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
                    <li className="text-gray-600">Academic Calendar</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                        Academic Calendars
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 text-center">
                        Browse through the academic calendars for various semesters and academic years.
                    </p>
                    <ul className="list-disc list-inside text-left mx-auto max-w-4xl text-gray-700 space-y-4">
                        <li><Link href="/calendars/even-semester-2023-24" className="text-blue-600 hover:underline">Academic Calendar for Even Semester 2023-24</Link></li>
                        <li><Link href="/calendars/odd-semester-2023-24" className="text-blue-600 hover:underline">Academic Calendar for Odd Semester 2023-24</Link></li>
                        <li><Link href="/calendars/even-semester-2021-22" className="text-blue-600 hover:underline">Academic Calendar for Even Semester 2021-22</Link></li>
                        <li><Link href="/calendars/modified-odd-even-2021-22" className="text-blue-600 hover:underline">Modified Academic Calendar for 1st Sem. 2021 and Proposed Academic Calendar for 3rd, 5th Odd 2021 & Even – 2022 (8th and 10th Sem.)</Link></li>
                        <li><Link href="/calendars/even-2020-odd-2021" className="text-blue-600 hover:underline">Academic Calendar for the Even-2020 (2nd & 4th Sem) and Odd Semester-2021 (1st Sem, 7th Sem) Activities</Link></li>
                        <li><Link href="/calendars/tentative-even-2021" className="text-blue-600 hover:underline">Tentative Academic Calendar for the Even Semester – 2021 Activities</Link></li>
                        <li><Link href="/calendars/revised-odd-2020" className="text-blue-600 hover:underline">Revised Academic Calendar for the Odd Semester – 2020 Activities</Link></li>
                        <li><Link href="/calendars/tentative-odd-2020" className="text-blue-600 hover:underline">Tentative Academic Calendar for the Odd Semester – 2020 Activities</Link></li>
                        <li><Link href="/calendars/even-2019-20" className="text-blue-600 hover:underline">Academic Calendar Even Semester 2019-20</Link></li>
                        <li><Link href="/calendars/odd-2019" className="text-blue-600 hover:underline">Academic Calendar for the Odd Semester – 2019 Activities</Link></li>
                        <li><Link href="/calendars/even-2018-19" className="text-blue-600 hover:underline">Academic Calendar (Even) 2018-19</Link></li>
                        <li><Link href="/calendars/odd-2018-19" className="text-blue-600 hover:underline">Academic Calendar (Odd) 2018-19</Link></li>
                        <li><Link href="/calendars/2017-18" className="text-blue-600 hover:underline">Academic Calendar 2017-18</Link></li>
                        <li><Link href="/calendars/2016-17" className="text-blue-600 hover:underline">Academic Calendar 2016-17</Link></li>
                        <li><Link href="/calendars/2015-16" className="text-blue-600 hover:underline">Academic Calendar 2015-16</Link></li>
                    </ul>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default Calendar;
