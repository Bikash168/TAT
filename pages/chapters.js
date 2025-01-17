import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Chapters = () => {
    const [activeChapter, setActiveChapter] = useState(null);

    const chapters = [
        {
            title: "ISTE Chapter",
            description: "The ISTE Student Chapter aims to enhance technical skills and foster professional networking opportunities for students.",
            details: [
                "Workshops on emerging technologies",
                "Seminars and guest lectures",
                "Skill development programs",
                "Hackathons and technical contests"
            ],
            images: [
                "/images/iste_chapter1.jpg",
                "/images/iste_chapter2.jpg",
                "/images/iste_chapter3.jpg"
            ]
        },
        {
            title: "IETE Students Forum",
            description: "Promotes technical excellence and innovation among students through IETE student activities.",
            details: [
                "Technical paper presentations",
                "Project exhibitions",
                "Networking events",
                "Competitions on electronics and telecommunication topics"
            ],
            images: [
                "/images/iete_chapter1.jpg",
                "/images/iete_chapter2.jpg",
                "/images/iete_chapter3.jpg"
            ]
        },
        {
            title: "IEEE Student Branch",
            description: "A platform for students to engage in technical and professional development through IEEE resources.",
            details: [
                "Access to IEEE digital library",
                "Workshops and conferences",
                "Collaborative research opportunities",
                "Technical webinars"
            ],
            images: [
                "/images/ieee_chapter1.jpg",
                "/images/ieee_chapter2.jpg",
                "/images/ieee_chapter3.jpg"
            ]
        },
        {
            title: "ACM Student Chapter",
            description: "ACM Student Chapter promotes computing and technology education through various activities and events.",
            details: [
                "Programming competitions",
                "Industry-academia interaction",
                "Workshops on software development",
                "Access to ACM resources"
            ],
            images: [
                "/images/acm_chapter1.jpg",
                "/images/acm_chapter2.jpg",
                "/images/acm_chapter3.jpg"
            ]
        }
    ];

    const toggleDetails = (chapterTitle) => {
        setActiveChapter((prev) => (prev === chapterTitle ? null : chapterTitle));
    };

    return (
        <Layout title="Chapters | Trident Academy of Technology">
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/chapters.jpg')",
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4 mt-16 sm:mt-0">Chapters</h1>
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
                    <li className="text-gray-600">Chapters</li>
                </ul>
            </nav>

            {/* Chapters Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-12">
                {chapters.map((chapter) => (
                    <div key={chapter.title} className="mb-12">
                        <h2
                            className="text-2xl font-bold text-gray-800 cursor-pointer"
                            onClick={() => toggleDetails(chapter.title)}
                        >
                            {chapter.title}
                        </h2>
                        <p className="text-gray-600 mt-2">{chapter.description}</p>
                        {activeChapter === chapter.title && (
                            <div className="mt-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    {chapter.details.map((detail, index) => (
                                        <li key={index} className="text-gray-700">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {chapter.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={chapter.title}
                                            width={400}
                                            height={300}
                                            className="rounded-lg shadow-md"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </section>

            <Footer />
        </Layout>
    );
};

export default Chapters;
