import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function Alumni() {
  return (
    <Layout title="Alumni | Trident Academy of Technology">
      <main className="mt-20 sm:mt-8 md:mt-6 lg:mt-4 xl:mt-2">

        {/* Alumni Section */}
        <section className="bg-[#002147] text-white py-16 text-center px-4 sm:px-8">
          <h1 className="text-4xl font-bold mb-4">Alumni Network – Stay Connected with Trident Academy of Technology</h1>
        </section>

        {/* Content Section in Horizontal Rows */}
        <section className="p-6 sm:p-8">
          <div className="flex flex-col space-y-6">
            {[
              "Trident Academy of Technology has always believed that learning goes beyond the classroom, and the journey of education continues even after students step into their professional lives. Our alumni network is a testament to the institution’s commitment to fostering lifelong relationships with its graduates. As our alumni make strides in their respective careers, we take pride in staying connected with them and ensuring that their association with Trident remains strong.",
              "To strengthen this bond, we conduct Alumni Meets, where former students reconnect with faculty, interact with current students, and share their professional experiences. These meets provide a platform for networking, knowledge exchange, and mentoring opportunities, reinforcing the link between our alumni and their alma mater. Through these engagements, we aim to create an environment that nurtures career growth, collaboration, and continued learning.",
              "We invite all our alumni to stay connected with the institution, participate in events, and contribute to the legacy of Trident Academy of Technology."
            ].map((text, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg">
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </Layout>
  );
}
