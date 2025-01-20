import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Empowerment() {
    return (
        <Layout title="Call for Proposals | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/Call-for-Proposals.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">
                    Call for Proposals
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
                        <Link href="/research" className="hover:underline">
                            Research
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/intramural-funding" className="hover:underline">
                            Intramural Funding (TIFR)
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Call for Proposals</li>
                </ul>
            </nav>

            {/* Main Section */}
            <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 flex flex-col gap-8">
                {/* Call for Proposals Section */}
                <section id="call-for-proposals" className="space-y-4">
                    <h2 className="text-3xl font-semibold text-[#002147]">Call for Proposals</h2>
                    <p className="text-lg text-gray-700">
                        Trident Research Committee of Trident Group of Institutions invites concept notes in the prescribed format on various topics under thrust areas of current and upcoming research interest.
                    </p>
                    <p className="text-lg text-gray-700">
                        Eligibility: Faculty members of Trident Group of Institutions (TAT & TACT) are eligible to apply for research grants under the Trident Intramural Funded Research (TIFR) Scheme.
                    </p>
                    <p className="text-lg text-gray-700">
                        Submission Deadline: Completed concept notes should be sent to
                        <a href="mailto:hodetc@tat.ac.in" className="text-blue-600 hover:underline"> hodetc@tat.ac.in </a>
                        on or before <strong>30th June 2018</strong>.
                    </p>
                    <p className="text-lg text-gray-700">
                        For further details, please contact:
                        <br />
                        <strong>Dr. Sakuntala Mahapatra</strong>, Research Head (TGI)
                        <br />
                        Professor & Head, Dept. of Electronics & Telecommunication Engineering
                        <br />
                        Cell: +91-9437171395
                    </p>
                    {/* Download Button */}
                    <div>
                        <a
                            href="/pdfs/conceptnoteformat.pdf" // Replace with the actual path to the file
                            download="conceptnoteformat.pdf"
                            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Download Concept Note Format
                        </a>
                    </div>

                </section>
            </main>

            <Footer />
        </Layout>
    );
}
