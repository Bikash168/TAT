import Layout from "../components/Layout";
import Footer from "../components/Footer";

const magazines = [
  { title: "Trilogy - English Edition", image: "/images/Trilogy_E_Magazin.png", pdf: "/pdfs/Trilogy-Magazine-English.pdf" },
  { title: "Trilogy - Hindi Edition", image: "/images/Trilogy_E_Magazin.png", pdf: "/pdfs/Trilogy-Magazine-Hindi (1).pdf" },
  { title: "Trilogy - Odia Edition", image: "/images/Trilogy_E_Magazin.png", pdf: "/pdfs/Trilogy-Magazine-Odia (1).pdf" },
];

const EMagazinePage = () => {
  return (
    <Layout
      title="Trilogy - E-Magazine"
      description="Explore the Trilogy e-Magazine featuring student articles, achievements, and creative insights."
      keywords="Trilogy, E-Magazine, Trident Academy of Technology, Student Articles"
    >
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-900 text-white text-center">
        <img
          src="/images/trilogy-banner.jpg"
          alt="Trilogy E-Magazine"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Trilogy - E-Magazine</h1>
          <p className="mt-3 text-lg text-gray-200 px-4 max-w-2xl mx-auto">
            Trilogy is the official e-Magazine of Trident Academy of Technology, featuring insightful articles, student achievements, and creative contributions.
          </p>
        </div>
      </div>

      {/* Magazine Issues Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Explore Our E-Magazine Issues
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {magazines.map((magazine, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <a href={magazine.pdf} target="_blank" rel="noopener noreferrer">
                <img src={magazine.image} alt={magazine.title} className="w-full h-auto object-cover" />
              </a>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{magazine.title}</h3>
                <a
                  href={magazine.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold inline-block"
                >
                  Read Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default EMagazinePage;
