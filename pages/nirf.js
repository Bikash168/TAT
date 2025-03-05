import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { FaFilePdf, FaDownload } from "react-icons/fa";

const nirfDocuments = [
  { title: "NIRF Engineering 2025", link: "/pdfs/Trident-Academy-of-TechnologyEngg.pdf" },
  { title: "NIRF Management 2025", link: "/pdfs/Trident-Academy-of-Technologymgmt.pdf" },
  { title: "NIRF Innovation 2025", link: "/pdfs/Trident-Academy-of-Technologyinnovation.pdf" },
  { title: "NIRF SDG Institution 2025", link: "/pdfs/Trident-Academy-of-Technologysdg.pdf" },
];

const NirfPage = () => {
  return (
    <Layout
      title="NIRF Documents - Trident Academy of Technology"
      description="Download the latest NIRF documents for Trident Academy of Technology."
      keywords="NIRF, Trident Academy of Technology, NIRF Rankings, Accreditation"
    >
      <main className="pt-[120px] sm:pt-[110px] md:pt-[90px] lg:pt-[80px] xl:pt-[70px]">


      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-16 pt-[90px] sm:pt-[80px] md:pt-[70px] lg:pt-[60px] xl:pt-[50px] text-center">

        <h1 className="text-3xl sm:text-4xl font-bold">National Institutional Ranking Framework (NIRF)</h1>
        <p className="mt-2 text-lg text-gray-200">
          Access and download the NIRF submission documents for each category.
        </p>
      </div>

      {/* Main Section: Image + Download Links */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/images/NIRF_photo.avif"
            alt="NIRF Ranking"
            className="w-full max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Download Links */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Download NIRF Reports</h2>
          <div className="grid grid-cols-1 gap-6">
            {nirfDocuments.map((doc, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4">
                <FaFilePdf className="text-red-600 text-3xl" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{doc.title}</h3>
                </div>
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaDownload className="text-lg" /> Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default NirfPage;
