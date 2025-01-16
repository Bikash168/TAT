import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const InternetWiFi = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/images/internet-wifi.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Internet and WiFi Connectivity
                </h1>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 mt-4 mb-10">
                <ul className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg">
                    <li>
                        <Link href="/" className="hover:underline flex items-center">
                            <span className="mr-1">🏠</span> Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/facilities" className="hover:underline">
                            Facilities
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-600">Internet and WiFi Connectivity</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Internet Connectivity */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Internet Connectivity</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The campus ensures seamless internet connectivity with a bandwidth of 1000 Mbps provided through two dedicated leased lines. One of these lines is connected to Bharti Airtel ISP, ensuring uninterrupted and high-speed internet access throughout the campus. 
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        The campus network is managed and secured through a Sophos XG3100 UTM, Cisco 1841 Router, and Cisco 2960 Catalyst switch located in the server room. Sophos XG3100 provides gateway-level threat management, including Intrusion Detection System (IDS), Intrusion Prevention System (IPS), Antivirus, and Firewall operations.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        Over 600 PCs across the campus are connected to this network, providing full internet access through a wired infrastructure. A 10G multimode optical-fiber backbone guarantees high uptime and faster access for all users.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        The entire TRIDENT network is connected through Cisco managed switches, including Cisco 2960 Catalyst switches at the distribution level and Cisco 224G4 switches at the access level.
                    </p>
                </section>

                {/* WiFi Connectivity */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">WiFi Connectivity</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        High-speed Wi-Fi connectivity is available across all academic blocks, hostels, and free spaces, with the installation of top-of-the-line Ubiquiti U6-LR access points, Motorola AP 6511 for indoor coverage, and Motorola AP 6532 and AP 6564 for outdoor coverage. This ensures students have reliable internet access at all times.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        After office hours, the internet bandwidth is fully utilized by students in the hostels, allowing them uninterrupted access to study and research materials online.
                    </p>
                </section>

                {/* Security Measures */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Security Measures</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        The network security is ensured through Sophos Unified Threat Management (UTM) system at the gateway level. This system helps block external threats by using IDS, IPS, and Antivirus measures. Additionally, web filtering and application filtering are implemented to ensure that students visit only legitimate websites.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        At the system and server level, security is further enhanced with K7 Client/Server based antivirus and Microsoft Antivirus, ensuring the safety of all devices connected to the campus network.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/wi-fi.jpg" alt="WiFi Connectivity" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/internet-server.jpg" alt="Internet Server" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/cisco-switch.jpg" alt="Cisco Switch" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/ubiquiti-ap.jpg" alt="Ubiquiti Access Point" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default InternetWiFi;
