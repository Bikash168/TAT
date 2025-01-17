import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const RecruitersSpeak = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/recruiters-speak-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Recruiters Speak: Hear From Our Esteemed Partners
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
                        <Link href="/placement" className="hover:underline">
                            Placement 
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/recruiters-speak" className="hover:underline">
                            Recruiters Speak
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Hear What Our Esteemed Recruiters Have to Say
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Trident Group of Institutions has earned its reputation as a premier hub for nurturing talent. Here’s what some of our esteemed corporate recruiters have to say about their experiences with us.
                    </p>
                </section>

                {/* Testimonials Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-lg text-gray-700 mb-6 italic">
                            "It’s a wonderful institute and I see it reflected in the students, their willingness to learn, their eagerness to benchmark themselves constantly with what’s happening amongst the best Engineering colleges."
                        </p>
                        <div className="text-xl font-semibold text-blue-600">Mr. Anirban Deep Ray</div>
                        <p className="text-sm text-gray-500">Regional Head – Eastern India, Tata Consultancy Services</p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-lg text-gray-700 mb-6 italic">
                            "The Campus Recruitment program was very well organized, well coordinated. The students coordinators were very helpful and effective in the work. Overall, a very good show by Trident placement department. One of the best experiences I have ever had at a campus event."
                        </p>
                        <div className="text-xl font-semibold text-blue-600">Mr. Atul Shenoy</div>
                        <p className="text-sm text-gray-500">Associate Executive HR, Persistent Systems</p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-lg text-gray-700 mb-6 italic">
                            "Promising Institute. Could develop as a leading private engineering college in India."
                        </p>
                        <div className="text-xl font-semibold text-blue-600">Mr. P.U Jacob</div>
                        <p className="text-sm text-gray-500">Associate V.P .HR, Hexaware Technologies</p>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-lg text-gray-700 mb-6 italic">
                            "Trident Academy of Technology, Bhubaneswar is one of the preferred Engineering Institutes for us to recruit campus graduates."
                        </p>
                        <div className="text-xl font-semibold text-blue-600">Mr. Nitin Kumar</div>
                        <p className="text-sm text-gray-500">Senior Executive HR, Exilant Technologies</p>
                    </div>

                    {/* Testimonial 5 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-lg text-gray-700 mb-6 italic">
                            "Excellent Infrastructure. I had wonderful experience during my visit at Trident for an interactive session. The talk was quite interactive and students from all the disciplines participated and made the event meaningful. I am really thrilled to come across the faculties of Trident."
                        </p>
                        <div className="text-xl font-semibold text-blue-600">Mr. D.P. Das</div>
                        <p className="text-sm text-gray-500">D.G.M. (HR), L&T – ECC</p>
                    </div>

                    {/* Testimonial 6 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-lg text-gray-700 mb-6 italic">
                            "The facilities available to students are world class and I was impressed by the enthusiasm the faculty members have about taking on new initiatives for getting students into practices prevalent in IT industry."
                        </p>
                        <div className="text-xl font-semibold text-blue-600">Mr. D.P. Samantarai</div>
                        <p className="text-sm text-gray-500">CEO, Softtrends, Bangalore</p>
                    </div>

                    {/* Testimonial 7 */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-lg text-gray-700 mb-6 italic">
                            "Great Campus experience. Great Campus and Team. Wonderful experience in hosting."
                        </p>
                        <div className="text-xl font-semibold text-blue-600">Gajendra Menon</div>
                        <p className="text-sm text-gray-500">Associate Director-Talent Acquisition, NTT DATA Global Delivery Services</p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-lg text-gray-700">
                        We take great pride in the trust and satisfaction of our esteemed corporate partners. These testimonials reflect the successful collaboration and high standards of our placement program.
                    </p>
                </div>
            </div>

            <Footer />
        </Layout>
    );
};

export default RecruitersSpeak;
