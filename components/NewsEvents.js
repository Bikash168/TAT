import { useEffect, useState } from "react";
import axios from "axios";

const NewsEvents = () => {
  const [news, setNews] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchNews = async () => {
      try {
        const res = await axios.get("https://strpi1.onrender.com/api/news-and-events?populate=*", {
          headers: {
            Authorization: `2c19a4ee71240ed8ec689ddd5c6ff34a7ba5dd03265579f9cff8b59129ad0f867aba9b4ac463fdb311c6aaa832447149207215e0764b0989899fa28d379cd8503b43e2c3cb00fc7b65dd4e17498194b0594b836d98cf77cf5c88a9993aca0171dda18deaddffe73e2759407dab3827366df00e9422fa7e87a92372897e143666`,
          },
        });

        if (isMounted) {
          setNews(res.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("news");
      if (section) {
        const position = section.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight && position.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="news" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">News & Events from Trident</h2>
          <p className="text-gray-600">Latest updates, research highlights, and events from our institution.</p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-5"
            }`}
        >
          {news.map((item) => {
            const title = item?.Title || "Untitled";
            const category = item?.Category || "Uncategorized";
            const description = item?.Description || "No description available.";
            const date = item?.Date ? new Date(item.Date).toLocaleDateString() : "Unknown Date";
            const readingTime = item?.Timing || "N/A";

            // Fetch high-resolution images (large > medium > original)
            const imageUrl = item?.Image?.url
              ? item?.Image?.url.startsWith("http")
                ? item?.Image?.url
                : `https://strpi1.onrender.com${item?.Image?.url}`
              : "/default-image.jpg";

            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={imageUrl.startsWith("http") ? imageUrl : `http://localhost:1337${imageUrl}`}
                  alt={title || "News Image"}
                  className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = "/default-image.jpg"; // Set fallback image
                  }}
                />
                <div className="p-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 text-justify">
                    {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                  </p>
                  <div className="mt-3 text-xs text-gray-400 flex justify-between">
                    <span>{date}</span>
                    <span>Reading time: {readingTime} min</span>
                  </div>
                </div>
              </div>
            );
          })}


        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
