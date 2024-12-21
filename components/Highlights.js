const Highlights = () => (
  <section id="highlights" className="py-10 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="p-6 bg-white shadow rounded">
          <img
            src="../images/alumni.jpg" // Replace with the actual image path
            alt="World-Class Faculty"
            className="w-full h-32 object-cover rounded mb-4"
          />
          <h3 className="font-bold text-lg mb-2">World-Class Faculty</h3>
          <p>Learn from the best educators and industry professionals.</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white shadow rounded">
          <img
            src="../images/alumni.jpg" // Replace with the actual image path
            alt="State-of-the-Art Facilities"
            className="w-full h-32 object-cover rounded mb-4"
          />
          <h3 className="font-bold text-lg mb-2">State-of-the-Art Facilities</h3>
          <p>Access cutting-edge labs and research centers.</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white shadow rounded">
          <img
            src="../images/alumni.jpg" // Replace with the actual image path
            alt="Strong Industry Partnerships"
            className="w-full h-32 object-cover rounded mb-4"
          />
          <h3 className="font-bold text-lg mb-2">Strong Industry Partnerships</h3>
          <p>Collaborate with leading companies and organizations.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
