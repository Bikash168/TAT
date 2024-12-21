// components/AboutSection.js
export default function AboutSection() {
  return (
    <section id="news" className="py-10 bg-gray-50">
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-6xl">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="../images/alumni.jpg" // Replace with the path to your uploaded image
          alt="President Thomas F. Hofmann"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-8 md:p-12 bg-blue-600 text-white">
        <h2 className="text-2xl font-bold mb-4">
          What drives us: about TAT
        </h2>
        <p className="text-base leading-relaxed mb-6">
          Research and innovations for society, innovative teaching and
          continuing education: This is how we shape a sustainable future,
          relying on the intelligence of the entire university and working
          closely with global partners to do so.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold shadow-md hover:bg-gray-100 transition"
        >
          READ MORE
        </a>
      </div>
    </div>
    </section>
  );
}
