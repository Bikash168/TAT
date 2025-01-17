import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const SportsAndGames = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/sports.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Sports and Games
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
                    <li className="text-gray-600">Sports and Games</li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                <section className="text-center mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Sports and Games at Trident Academy of Technology
                    </h2>
                    <p className="text-xl text-gray-600">
                        Trident Academy of Technology offers students ample opportunities to participate in various sports and games,
                        both indoors and outdoors. Alongside, we encourage participation in extracurricular activities such as quizzes,
                        GDs, paper presentations, software contests, and mock interviews. We also provide holistic health support through
                        Yoga classes.
                    </p>
                </section>

                {/* About the Sports Committee Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        About the Sports Committee
                    </h2>
                    <p className="text-gray-600 mb-4">
                        The Sports and Games Committee at Trident Academy of Technology oversees the organization of intra-college and
                        inter-college sporting events. Their goal is to enhance student development by promoting teamwork, discipline,
                        leadership, and physical fitness. The committee organizes a wide range of events in both indoor and outdoor
                        categories, offering all students equal opportunities to participate.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800">Committee Members</h3>
                    <ul className="space-y-4 mt-4 text-gray-600">
                        <li>Dr. Chandan Kumar Das, Chairman</li>
                        <li>Mrs. Rina Mohakud, Member</li>
                        <li>Sandeep Kumar Rath, Member</li>
                        <li>Sashi Bhusan Parida, Member</li>
                        <li>Mr. Pratap Kumar Rath, Sports Officer, Member</li>
                    </ul>
                </section>

                {/* Sports Activities Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Sports Activities for the Session 2023-24
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Indoor Events */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Indoor Events</h3>
                            <ul className="space-y-4">
                                <li>
                                    <p className="font-semibold text-gray-700">Carom (Singles, Boys & Girls)</p>
                                    <p className="text-gray-600">Venue: Activity Room (Block-04)</p>
                                    <p className="text-gray-600">Date: 24.02.2024 (Sunday)</p>
                                    <p className="text-gray-600">No. of Participants: 80 (Boys), 30 (Girls)</p>
                                </li>
                                <li>
                                    <p className="font-semibold text-gray-700">Chess (Singles, Boys & Girls)</p>
                                    <p className="text-gray-600">Venue: Activity Room (Block-04)</p>
                                    <p className="text-gray-600">Date: 24.02.2024 (Sunday)</p>
                                    <p className="text-gray-600">No. of Participants: 60 (Boys), 20 (Girls)</p>
                                </li>
                            </ul>
                        </div>
                        {/* Outdoor Events */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Outdoor Events</h3>
                            <ul className="space-y-4">
                                <li>
                                    <p className="font-semibold text-gray-700">Cricket (Inter-branch, Boys)</p>
                                    <p className="text-gray-600">Venue: Trident College Ground</p>
                                    <p className="text-gray-600">Date: 11.02.2024 - 12.02.2024 (Monday and Tuesday)</p>
                                    <p className="text-gray-600">No. of Participants: 90</p>
                                </li>
                                <li>
                                    <p className="font-semibold text-gray-700">Football (Inter-branch, Boys)</p>
                                    <p className="text-gray-600">Venue: Trident College Ground</p>
                                    <p className="text-gray-600">Date: 14.02.2024 (Thursday)</p>
                                    <p className="text-gray-600">No. of Participants: 90</p>
                                </li>
                                <li>
                                    <p className="font-semibold text-gray-700">Volleyball (Inter-branch, Boys)</p>
                                    <p className="text-gray-600">Venue: Trident College Ground</p>
                                    <p className="text-gray-600">Date: 18.02.2024 (Monday)</p>
                                    <p className="text-gray-600">No. of Participants: 90</p>
                                </li>
                                <li>
                                    <p className="font-semibold text-gray-700">Basketball (Inter-branch, Boys)</p>
                                    <p className="text-gray-600">Venue: Trident College Ground</p>
                                    <p className="text-gray-600">Date: 19.02.2024 (Tuesday)</p>
                                    <p className="text-gray-600">No. of Participants: 90</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Achievements Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Achievements
                    </h2>
                    <ul className="list-disc pl-5 text-gray-600 space-y-4">
                        <li>Our volleyball team bagged five successive championships in the 2023-24 inter-college volleyball tournaments organized by CUTM, Sri Sri University, Trident, IMI, and CV Raman.</li>
                        <li>Our cricket team won the championship in the inter-college cricket tournament organized by Red Bull held at Kalinga Stadium.</li>
                    </ul>
                </section>

                {/* Sports Facilities Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Sports Facilities
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Indoor Facilities */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Indoor Sports Facility</h3>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Table Tennis - 1</li>
                                <li>Carom - 6</li>
                                <li>Chess - 6</li>
                            </ul>
                        </div>
                        {/* Outdoor Facilities */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Outdoor Sports Facility</h3>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Basketball Court - 1</li>
                                <li>Volleyball Court - 1</li>
                                <li>Cemented Cricket Pitch - 1</li>
                                <li>Badminton Court - 1</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Outside Participation Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Outside Participation
                    </h2>
                    <ul className="list-disc pl-5 text-gray-600 space-y-4">
                        <li>Our basketball team participated in inter-college basketball tournaments organized by CUTM and CET.</li>
                        <li>Our college participated in volleyball tournaments held at HIT, BBSR.</li>
                        <li>Our college participated in volleyball, football, and cricket intercollegiate tournaments held at CUTM, BBSR.</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </Layout>
    );
};

export default SportsAndGames;
