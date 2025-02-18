const SDGSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Text Section */}
          <div className="w-2/3">
            <h2 className="text-4xl font-bold text-black-600">Shaping the Future through Innovation</h2>
            <p className="mt-4 text-lg text-gray-600 text-justify">
              At Trident Academy of Technology, we are deeply committed to fostering technological excellence, sustainable development, and social well-being. We align our efforts with the United Nations’ Sustainable Development Goals (SDGs), empowering students to create meaningful, positive impacts across communities.
            </p>
          </div>

          {/* SDGs Icons Section */}
          <div className="w-1/3">
            <img
              src="/images/sdgs.png"
              alt="Sustainable Development Goals"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
