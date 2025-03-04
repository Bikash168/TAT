import Layout from "../components/Layout";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <Layout
      title="Privacy Policy"
      description="Understand how we collect, use, and protect your personal information."
      keywords="Privacy Policy, Data Protection, User Information"
    >
      {/* Hero Section */}
      <div className="relative w-full h-[350px] flex items-center justify-center bg-emerald-900 text-white text-center px-6">
        <div className="relative z-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 px-2 max-w-2xl mx-auto">
            Learn how we handle your personal data and privacy.
          </p>
        </div>
      </div>

      {/* Privacy Sections */}
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: [Insert Date]</p>

        <div className="space-y-8 max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 inline-block text-left">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{section.content}</p>
              )}
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal Information: Name, email, phone number, and any information provided through forms.",
      "Non-Personal Information: Browser type, device type, IP address, and browsing behavior.",
      "Cookies and Tracking Technologies: Used to enhance user experience and analyze traffic."
    ]
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To provide and manage our services.",
      "To communicate with you regarding inquiries and updates.",
      "To improve website functionality and user experience.",
      "To comply with legal obligations."
    ]
  },
  {
    title: "3. How We Share Your Information",
    content: [
      "We do not sell or trade personal information. However, we may share it with:",
      "Service Providers: Third-party vendors assisting with website management and analytics.",
      "Legal Authorities: If required by law or to protect our rights and users."
    ]
  },
  {
    title: "4. Data Security",
    content: "We implement security measures to protect your data. However, no method of transmission over the internet is 100% secure."
  },
  {
    title: "5. Your Rights and Choices",
    content: [
      "Access, update, or delete your personal information.",
      "Opt-out of marketing communications.",
      "Disable cookies through browser settings."
    ]
  },
  {
    title: "6. Third-Party Links",
    content: "Our website may contain links to third-party sites. We are not responsible for their privacy practices."
  },
  {
    title: "7. Updates to This Privacy Policy",
    content: "We may update this policy from time to time. Changes will be posted on this page with the updated date."
  },
  {
    title: "8. Contact Us",
    content: [
      "Email: [Insert Email]",
      "Address: [Insert Address]",
      "Phone: [Insert Phone Number]"
    ]
  }
];

export default PrivacyPolicyPage;