import Layout from '../components/Layout';
import Footer from '../components/Footer';

const PublicationPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/publication.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Publications
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
                    <li>Publications</li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-8">
                {/* Section Title */}
                <section className="text-center py-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">
                        Publications
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Explore our published work in journals and book chapters. Click on the links below to view the PDF of each publication.
                    </p>
                </section>

                {/* Journals Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Journals</h3>
                    <ul className="list-none space-y-4 text-lg text-gray-700">
                        <li>
                            <a
                                href="/files/Journal_Article_1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Journal Article 1</span> (View PDF)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/files/Journal_Article_2.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Journal Article 2</span> (View PDF)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/files/Journal_Article_3.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Journal Article 3</span> (View PDF)
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Book Chapters Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">Book Chapters</h3>
                    <ul className="list-none space-y-4 text-lg text-gray-700">
                        <li>
                            <a
                                href="/files/Book_Chapter_1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Book Chapter 1</span> (View PDF)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/files/Book_Chapter_2.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Book Chapter 2</span> (View PDF)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/files/Book_Chapter_3.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <span className="font-semibold">Book Chapter 3</span> (View PDF)
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default PublicationPage;
