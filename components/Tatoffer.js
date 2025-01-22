import { useState } from "react";

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState("Prospective Students");

  // Menu Tabs
  const tabs = [
    "Prospective Students",
    "Students",
    "Researchers",
    "Employees",
    "Alumni",
    "Executives and professionals",
    "Founders",
    "Cooperations",
    "Press and media",
  ];

  // Content for each tab
  const newsContent = {
    "Prospective Students": {
      title: "Prospective Students",
      description:
        "Learn to bring ideas to life, discover new possibilities, work in teams and build networks.",
      img: "../images/Prospective-Students.jpg",
      bgColor: "bg-yellow-500",
      borderColor: "border-yellow-500",
    },
    Students: {
      title: "Students",
      description:
        "Explore opportunities for growth and gain valuable hands-on experiences in diverse fields.",
      img: "../images/Students.jpg",
      bgColor: "bg-red-500",
      borderColor: "border-red-500",
    },
    Researchers: {
      title: "Researchers",
      description:
        "Engage in cutting-edge research and innovation, pushing boundaries in your chosen field.",
      img: "../images/Researchers.jpg",
      bgColor: "bg-green-600",
      borderColor: "border-green-600",
    },
    Employees: {
      title: "Employees",
      description:
        "Be a part of an empowering environment, contributing to impactful projects and initiatives.",
      img: "../images/employee.jpg",
      bgColor: "bg-blue-700",
      borderColor: "border-blue-700",
    },
    Alumni: {
      title: "Alumni",
      description:
        "Stay connected with your alma mater and contribute to the growing legacy of excellence.",
      img: "../images/alumni2.jpg",
      bgColor: "bg-gray-600",
      borderColor: "border-gray-600",
    },
    "Executives and professionals": {
      title: "Executives and Professionals",
      description:
        "Harness your expertise and join a community of forward-thinking leaders and innovators.",
      img: "../images/Professionals.jpg",
      bgColor: "bg-orange-600",
      borderColor: "border-orange-600",
    },
    Founders: {
      title: "Founders",
      description:
        "Collaborate with visionaries and entrepreneurs to bring groundbreaking ideas to life.",
      img: "../images/Founders.jpg",
      bgColor: "bg-purple-700",
      borderColor: "border-purple-700",
    },
    Cooperations: {
      title: "Cooperations",
      description:
        "Build strong partnerships and explore synergies to create meaningful impacts.",
      img: "../images/Cooperations.jpg",
      bgColor: "bg-teal-700",
      borderColor: "border-teal-700",
    },
    "Press and media": {
      title: "Press and Media",
      description:
        "Stay updated on the latest news, events, and milestones achieved by our community.",
      img: "../images/Media.jpg",
      bgColor: "bg-pink-600",
      borderColor: "border-pink-600",
    },
  };

  return (
    <section id="news" className="py-10 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Discover what TAT has to offer
        </h2>
        <p className="text-gray-600 italic">
          Explore groundbreaking innovations, inspiring research, and exciting
          events shaping the future at our institution.
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
                ${
                  activeTab === tab
                    ? `bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white border-gray-500`
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div
          className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 border-4 ${newsContent[activeTab].borderColor} p-6 rounded-lg`}
        >
          {/* Image Section */}
          <div
            className={`relative w-full md:w-1/2 h-80 sm:h-96 md:h-[20rem] lg:h-[24rem] ${newsContent[activeTab].bgColor} flex items-center justify-center`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${newsContent[activeTab].img})`,
              }}
            />
          </div>

          {/* Content Section */}
          <div
            className={`w-full md:w-1/2 p-6 text-white rounded-lg ${newsContent[activeTab].bgColor}`}
          >
            <h2 className="text-3xl font-bold">
              {newsContent[activeTab].title}
            </h2>
            <p className="mt-4">{newsContent[activeTab].description}</p>
            <a
              href="#"
              className="mt-6 inline-block text-white font-medium border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
