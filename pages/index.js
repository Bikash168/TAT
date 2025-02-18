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

export default function Home() {
  return (
    <>
      <div className="nopadding">
        <HeroSection />
        < AnnouncementsSection /> 
        <AboutSection />
        <NewsEvents />
        <Program />
        <ResearchSpotlight />
      </div>
      <div className="px-2 sm:px-4 lg:px-6">
        <PlacementComponent />
        <Tatoffer />
       
        <AlumniSection />
        <Highlights />
      </div>
      <Footer />
    </>
  );
}

// Add title to pageProps
Home.getInitialProps = async () => {
  return { title: "Home - Trident Academy of Technology" };
};
