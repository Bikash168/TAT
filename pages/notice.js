import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const NoticesPage = () => {
  const router = useRouter();

  return (
    <Layout
      title="Notices & Announcements"
      description="Stay updated with Placement and General Notices from Trident Academy of Technology."
      keywords="Notices, Placement Notices, General Notices, Announcements"
    >
      {/* Hero Section */}
      <div className="relative w-full h-[350px] flex items-center justify-center bg-indigo-900 text-white text-center px-6">
        <div className="relative z-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">Notices & Announcements</h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 px-2 max-w-2xl mx-auto">
            Find important updates, placement notices, and official announcements.
          </p>
        </div>
      </div>

      {/* Notice Sections */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          
          {/* Placement Notices */}
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
            onClick={() => window.open("https://trident.ac.in/placementnotice/wp-login.php?redirect_to=https%3A%2F%2Ftrident.ac.in%2Fplacementnotice%2F&reauth=1", "_blank")}
          >
            <img
              src="/images/Placement_Notice.jpg"
              alt="Placement Notices"
              className="w-full h-auto object-cover"
            />
            <div className="p-6 text-center bg-blue-600 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Placement Notices</h2>
              <p className="text-gray-200 text-sm sm:text-base">View latest job and internship updates</p>
            </div>
          </div>

          {/* General Notices */}
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
            onClick={() => window.open("https://notices.trident.ac.in/", "_blank")}
          >
            <img
              src="/images/General_Notice.jpg"
              alt="General Notices"
              className="w-full h-auto object-cover"
            />
            <div className="p-6 text-center bg-gray-800 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">General Notices</h2>
              <p className="text-gray-200 text-sm sm:text-base">Find academic, event, and exam notices</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default NoticesPage;
