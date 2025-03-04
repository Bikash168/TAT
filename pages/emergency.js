import Layout from "../components/Layout";
import Footer from "../components/Footer";

const EmergencyPage = () => {
  return (
    <Layout
      title="Emergency Contacts"
      description="Find essential emergency contact numbers including fire, police, and college administration."
      keywords="Emergency, Contact, Fire, Police, College, Medical Help"
    >
      {/* Hero Section */}
      <div className="relative w-full h-[350px] flex flex-col items-center justify-center bg-red-700 text-white text-center px-6">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold uppercase">Emergency Contacts</h1>
        <p className="mt-3 text-base sm:text-lg text-gray-200 px-2 max-w-2xl">
          In case of any emergency, contact the numbers below immediately.
        </p>
      </div>

      {/* Find Help in Emergencies Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">🚨 Find Help in Emergencies</h2>
          <p className="text-lg text-gray-700 text-center">
            What to do in an emergency at the university? Ensuring personal safety is the 
            <strong> number-one priority </strong> on our <strong> TAT campus </strong> in the event of an emergency or safety incident.  
            We do all we can to <strong> avoid or mitigate any negative impacts </strong> and provide immediate assistance.
          </p>
        </div>
      </div>

      {/* Emergency Contact Sections */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Important Emergency Numbers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-center">
          
          {/* Fire Emergency */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-red-500">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">🔥 Fire Emergency</h3>
            <p className="text-lg text-gray-700">Call for immediate fire assistance.</p>
            <a href="tel:101" className="block mt-2 text-xl font-bold text-red-700">📞 101</a>
          </div>

          {/* Police Emergency */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">🚔 Police Emergency</h3>
            <p className="text-lg text-gray-700">Call the police in case of any security issue.</p>
            <a href="tel:100" className="block mt-2 text-xl font-bold text-blue-700">📞 100</a>
          </div>

          {/* Medical Emergency */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-green-500">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">🚑 Medical Emergency</h3>
            <p className="text-lg text-gray-700">Call for ambulance and medical help.</p>
            <a href="tel:108" className="block mt-2 text-xl font-bold text-green-700">📞 108</a>
          </div>

          {/* College Administration */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">🏫 College Administration</h3>
            <p className="text-lg text-gray-700">For campus emergencies, contact administration.</p>
            <a href="tel:[Insert College Number]" className="block mt-2 text-xl font-bold text-gray-800">📞 [Insert College Phone]</a>
          </div>

        </div>

        {/* Emergency Call Guidelines */}
        <div className="bg-gray-100 mt-10 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">📢 Emergency Call Guidelines</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>When calling emergency services, be <strong> brief and concise </strong>.</li>
            <li>Answer all questions from emergency staff <strong> clearly and accurately </strong>.</li>
            <li>Wait for the <strong> Emergency Coordination Center </strong> to end the call.</li>
            <li>Keep your phone line <strong> open </strong> for follow-up calls from the Rescue Coordinator.</li>
            <li><strong> Do not use your phone for other calls </strong> until the situation is resolved.</li>
          </ul>
        </div>

      </div>

      <Footer />
    </Layout>
  );
};

export default EmergencyPage;
