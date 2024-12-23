// pages/index.js
import HeroSection from "../components/HeroSection";
import NewsEvents from "../components/NewsEvents";
import Highlights from "../components/Highlights";
import Tatoffer from "../components/Tatoffer";
import Program from "../components/Program";
import AboutSection from "../components/AboutSection";
import HighlightSection from "../components/HighlightSection";

export default function Home() {
  return (
    <>
    <div className="nopadding">
    <HeroSection />
    </div>
    <div className="px-2 sm:px-4 lg:px-6">
      <NewsEvents />
      <Tatoffer />
      <Program />
      <AboutSection />
     <HighlightSection />
      <Highlights />
    </div>
    </>
  );
}

// Add title to pageProps
Home.getInitialProps = async () => {
  return { title: "Home - Trident Academy of Technology" };
};
