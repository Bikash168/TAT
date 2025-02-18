import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or email service
    setFormSubmitted(true);
  };

  return (
    <Layout title="Contact Us | Trident Academy of Technology">
      <main className="container mx-auto mt-1 px-4 lg:px-16"> {/* Reduced top margin to mt-1 */}
        {/* Contact Info Section */}
        <section className="text-center mb-8"> {/* Reduced bottom margin */}
          <h1 className="text-4xl font-semibold text-[#002147] leading-tight">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 mt-2"> {/* Reduced top margin */}
            We would love to hear from you. Whether you have a question or need assistance, feel free to reach out!
          </p>
        </section>

        {/* Contact Details */}
        <section className="lg:flex lg:gap-12 mb-8"> {/* Reduced bottom margin and gap */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Contact Details</h2>
            <p className="text-lg text-gray-700 mb-4">
              Feel free to reach us using the details below.
            </p>
            <ul className="text-lg text-gray-700 space-y-4">
              <li>
                <strong>Address:</strong> Trident Academy of Technology, Bhubaneswar, Odisha
              </li>
              <li>
                <strong>Email:</strong> info@trident.ac.in
              </li>
              <li>
                <strong>Tel:</strong> 0674-3530517
              </li>
              <li>
                <strong>Mob:</strong> 9861191195
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-[#002147] mb-6">Find Us</h2>
            <div className="w-full h-80">
              <iframe
                title="Trident Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7482.0614668432645!2d85.807754!3d20.340349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190902b2a59ce5%3A0xdfb554a4e0bafffb!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sus!4v1738245957890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-8"> {/* Reduced bottom margin */}
          <h2 className="text-3xl font-semibold text-[#002147] mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> {/* Reduced gap */}
              <div>
                <label className="text-lg text-gray-700" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 mt-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="text-lg text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 mt-2 border rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="mt-4"> {/* Reduced margin-top */}
              <label className="text-lg text-gray-700" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 border rounded-lg"
                required
              />
            </div>

            <div className="mt-4"> {/* Reduced margin-top */}
              <label className="text-lg text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 border rounded-lg"
                rows="6"
                required
              ></textarea>
            </div>

            <div className="mt-4 text-center"> {/* Reduced margin-top */}
              <button type="submit" className="px-8 py-3 bg-[#002147] text-white rounded-lg hover:bg-[#004D73] transition">
                Send Message
              </button>
            </div>
          </form>

          {formSubmitted && (
            <div className="mt-4 text-center text-green-500"> {/* Reduced margin-top */}
              <p>Thank you for your message! We will get back to you shortly.</p>
            </div>
          )}
        </section>
      </main>
      <Footer /> {/* Footer is here */}
    </Layout>
  );
};

export default Contact;
