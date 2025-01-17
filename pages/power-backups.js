import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Link from 'next/link';

const PowerBackups = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section
                className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mt-28 sm:mt-0"
                style={{
                    backgroundImage: "url('/images/power-backup.jpg')", // Replace with your image path
                    backgroundPosition: "center center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white z-10 text-center px-4">
                    Power Backups
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
                    <li className="text-gray-600">Power Backups</li>
                </ul>
            </nav>

            {/* Page Content */}
            <div className="container mx-auto p-8">
                {/* Power Backup Overview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Power Backup Overview</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        To ensure uninterrupted learning and functioning, the institute provides reliable power backup facilities to all buildings. A combination of high-power generators and voltage stabilizers ensures a seamless power supply throughout the campus.
                    </p>
                </section>

                {/* Generator & Transformer Facilities */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Generator & Transformer Facilities</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        The institute is equipped with its own transformer and every building is connected to a high-power generator, ensuring consistent and stable power supply. These facilities are maintained regularly to avoid any disruptions in power availability.
                    </p>
                </section>

                {/* Voltage Stabilizers in Laboratories */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Voltage Stabilizers in Laboratories</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        To prevent any damage caused by voltage fluctuations, voltage stabilizers are installed in almost all laboratories. This ensures that sensitive equipment operates smoothly without interruption, maintaining a safe and efficient working environment.
                    </p>
                </section>

                {/* Online UPS System */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Online UPS System</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Every laboratory is powered through an online UPS (Uninterruptible Power Supply) system. This system ensures that the laboratories experience no downtime during power outages, providing a consistent and reliable power source for all critical activities.
                    </p>
                </section>

                {/* Water Supply Backup */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Water Supply Backup</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        To ensure an uninterrupted water supply, water pumps are connected to the generators. This guarantees that water is available to all buildings even during power failures, helping maintain essential services without disruption.
                    </p>
                </section>

                {/* DG Set Details */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">DG Set Details</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        The institute has two powerful Kirolskar-make DG sets: a 250 KVA set and a 125 KVA set. These DG sets are maintained under an annual maintenance contract with M/s Gangpur Sales & Services, Bhubaneswar, ensuring that they are always ready for use during power cuts or emergencies.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/images/generator.jpg" alt="Generator" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/transformer.jpg" alt="Transformer" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/laboratory.jpg" alt="Laboratory with UPS" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/images/water-pump.jpg" alt="Water Pump" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
};

export default PowerBackups;
