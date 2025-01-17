import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const BputRegulation = () => {
    const [selectedPdf, setSelectedPdf] = useState('/pdfs/bput-regulation-2023.pdf'); // Default PDF to display

    const pdfFiles = [
        {
            year: '2023',
            title: 'BPUT Regulation for 2023',
            file: '/pdfs/bput-regulation-2023.pdf',
        },
        {
            year: '2022',
            title: 'BPUT Regulation for 2022',
            file: '/pdfs/bput-regulation-2022.pdf',
        },
        {
            year: '2021',
            title: 'BPUT Regulation for 2021',
            file: '/pdfs/bput-regulation-2021.pdf',
        },
        {
            year: '2020',
            title: 'BPUT Regulation for 2020',
            file: '/pdfs/bput-regulation-2020.pdf',
        },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/bput-regulation.jpg')", // Replace with your image path
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    BPUT Regulation
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
                        <Link href="/academics" className="hover:underline">
                            Academics
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">BPUT Regulation</li>
                </ul>
            </nav>

            {/* Content Section */}
            <div className="container mx-auto p-8">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Read BPUT Regulations by Year
                    </h2>

                    {/* PDF Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pdfFiles.map((pdf, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-lg font-bold text-gray-700 mb-2">{pdf.title}</h3>
                                <button
                                    onClick={() => setSelectedPdf(pdf.file)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    View PDF
                                </button>
                                <a
                                    href={pdf.file}
                                    download
                                    className="ml-4 text-blue-600 hover:underline"
                                >
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PDF Viewer */}
                <section className="my-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">PDF Viewer</h3>
                    <div className="w-full h-[600px] border">
                        <iframe
                            src={selectedPdf}
                            width="100%"
                            height="100%"
                            className="rounded"
                            title="BPUT Regulation Viewer"
                        ></iframe>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default BputRegulation;
