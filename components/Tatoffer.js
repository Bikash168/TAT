import { useState } from "react";
import Image from "next/image";

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState("Student Life");

  // Menu Tabs
  const tabs = [
    "Student Life",
    "Central Library",
    "Transportation Services",
    "Hostel Facilities",
    "Sports & Recreation",
    "Cafeteria & Canteen",
    "Medical Facilities",
    "State of the Art Labs",
    "Research Facilities",
    "Internet & Wi-Fi",
  ];

  // Content for each tab
  const newsContent = {
    "Student Life": {
      title: "Vibrant Student Life",
      description:
        "Experience a dynamic campus life filled with clubs, cultural events, and leadership opportunities.",
      img: "/images/student-life.jpg",
      bgColor: "bg-yellow-500",
      borderColor: "border-yellow-500",
      link: "/facilities",
    },
    "Central Library": {
      title: "Central Library",
      description:
        "A vast collection of books, journals, and digital resources to support your academic journey.",
      img: "/images/library.png",
      bgColor: "bg-red-500",
      borderColor: "border-red-500",
      link: "/learning-resources",
    },
    "Transportation Services": {
      title: "Efficient Transportation",
      description:
        "Safe and reliable transport services connecting the campus with major city areas.",
      img: "/images/transportation.png",
      bgColor: "bg-green-600",
      borderColor: "border-green-600",
      link: "/transport",
    },
    "Hostel Facilities": {
      title: "Comfortable Hostels",
      description:
        "Secure and well-equipped hostels providing a home away from home for students.",
      img: "/images/hostel-2.jpg",
      bgColor: "bg-blue-700",
      borderColor: "border-blue-700",
      link: "/hostels",
    },
    "Sports & Recreation": {
      title: "Sports & Fitness",
      description:
        "World-class sports facilities to encourage a healthy and active lifestyle among students.",
      img: "/images/sports.jpg",
      bgColor: "bg-gray-600",
      borderColor: "border-gray-600",
      link: "/sports-games",
    },
    "Cafeteria & Canteen": {
      title: "Dining Services",
      description:
        "Nutritious and delicious meals served in hygienic and friendly environments.",
      img: "/images/cafeteria.jpg",
      bgColor: "bg-orange-600",
      borderColor: "border-orange-600",
      link: "/food-centers",
    },
    "Medical Facilities": {
      title: "Healthcare & Wellness",
      description:
        "Round-the-clock medical assistance and wellness programs for students and staff.",
      img: "/images/medical.jpg",
      bgColor: "bg-purple-700",
      borderColor: "border-purple-700",
      link: "/healthcare",
    },
    "State of the Art Labs": {
      title: "Advanced Laboratories",
      description:
        "Cutting-edge laboratories to facilitate research and practical learning experiences.",
      img: "/images/labs.jpg",
      bgColor: "bg-teal-700",
      borderColor: "border-teal-700",
      link: "/departments",
    },
    "Research Facilities": {
      title: "Innovative Research",
      description:
        "A hub for pioneering research with state-of-the-art equipment and expert guidance.",
      img: "/images/research14.png",
      bgColor: "bg-pink-600",
      borderColor: "border-pink-600",
      link: "/research",
    },
    "Internet & Wi-Fi": {
      title: "Seamless Connectivity",
      description:
        "High-speed internet and Wi-Fi access across the campus for uninterrupted learning.",
      img: "/images/wifi.jpg",
      bgColor: "bg-indigo-600",
      borderColor: "border-indigo-600",
      link: "/images/internet-wifi.jpg",
    },
  };

  return (
    <section id="news" className="py-10 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Discover What TAT Has to Offer
        </h2>
        <p className="text-gray-600 italic">
          Explore innovations, inspiring research, and exciting opportunities shaping your future.
        </p>
      </div>
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded font-medium transition border-b-2 
                ${activeTab === tab
                  ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white border-gray-500"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div
          className={`flex flex-col md:flex-row items-center ml-2 border-4 ${newsContent[activeTab].borderColor} p-6 rounded-lg`}
        >
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-80 sm:h-96 md:h-[20rem] lg:h-[24rem]">
            <Image
              src={newsContent[activeTab].img}
              alt={newsContent[activeTab].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>

          {/* Content Section */}
          <div className={`w-full md:w-1/2 p-6 text-white ml-3 rounded-lg ${newsContent[activeTab].bgColor}`}>
            <h2 className="text-3xl font-bold">
              {newsContent[activeTab].title}
            </h2>
            <p className="mt-4">{newsContent[activeTab].description}</p>
            <a
              href={newsContent[activeTab].link}
              className="mt-6 inline-block text-white font-medium border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
