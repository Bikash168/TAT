import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ExtramuralFunding() {
    return (
        <Layout title="Extramural Funding (TEFR) | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/extramural-funding-hero.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Extramural Funding (TEFR)
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
                    <li className="text-gray-600">Extramural Funding</li>
                </ul>
            </nav>

            {/* Main Section */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 mt-[20px] sm:mt-[40px] lg:mt-[60px] mb-16">
                {/* Main Content */}
                <div className="w-full space-y-12">
                    {/* Introduction Section */}
                    <section id="introduction" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">About Extramural Funding (TEFR)</h2>
                        <p className="text-lg text-gray-700">
                            The objective of institutions offering technical education in engineering technology is not only to offer teaching but to provide solutions for burning issues and challenges faced by society and industry. Trident Academy of Technology provides financial assistance for sponsored research projects to foster innovation and development.
                        </p>
                        <p className="text-lg text-gray-700">
                            TEFR helps faculties, students, and researchers carry out sponsored research on identified thrust areas, with support from various funding agencies.
                        </p>
                    </section>

                    {/* Year-wise Details Section */}
                    <section id="year-wise-details" className="space-y-4">
                        <h2 className="text-3xl font-semibold text-[#002147]">Details of Sponsored Research</h2>
                        <ul className="space-y-4">
                            {[
                                { year: '2021-22', details: 'Details of Sponsored Research for the year 2021-22' },
                                { year: '2020-21', details: 'Details of Sponsored Research for the year 2020-21' },
                                { year: '2019-20', details: 'Details of Sponsored Research for the year 2019-20' },
                                { year: '2018-19', details: 'Details of Sponsored Research for the year 2018-19' },
                                { year: '2017-18', details: 'Details of Sponsored Research for the year 2017-18' },
                                { year: '2016-17', details: 'Details of Sponsored Research for the year 2016-17' },
                            ].map((item, index) => (
                                <li key={index}>
                                    <button className="text-xl font-semibold text-[#004D73]">{`YEAR: ${item.year}`}</button>
                                    <p className="text-lg text-gray-700">{item.details}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </Layout>
    );
}
