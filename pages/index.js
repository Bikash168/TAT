import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import NewsEvents from "../components/NewsEvents";
import Highlights from "../components/Highlights";
import Tatoffer from "../components/Tatoffer";
import Program from "../components/Program";
import AlumniSection from "../components/AlumniSection";
import Footer from "../components/Footer";
import PlacementComponent from "../components/PlacementComponent";
import ResearchSpotlight from "../components/ResearchSpotlight";
import AnnouncementsSection from "../components/AnnouncementsSection";
import AdmissionPopup from "../components/AdmissionPopup";
import NavButton from "../components/NavButton"; // Import Nav Button
import { motion } from "framer-motion";

export default function Home() {
  // Define a common animation variant for consistency.
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <AdmissionPopup /> {/* Add the popup */}
      
      {/* Navigation Button Section */}
      <div className="flex justify-end p-4">
        <NavButton label="Translation Feedback" />
      </div>

      <div className="nopadding">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AnnouncementsSection />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <NewsEvents />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Program />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <ResearchSpotlight />
        </motion.div>
      </div>

      <div className="px-2 sm:px-4 lg:px-6">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <PlacementComponent />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Tatoffer />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <AlumniSection />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <Highlights />
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

// Add title to pageProps
Home.getInitialProps = async () => {
  return { title: "Home - Trident Academy of Technology" };
};
