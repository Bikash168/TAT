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
      <HeroSection />
      <NewsEvents />
      <Tatoffer />
      <Program />
      <AboutSection />
     <HighlightSection />
      <Highlights />
    
    </>
  );
}

// Add title to pageProps
Home.getInitialProps = async () => {
  return { title: "Home - Trident Academy of Technology" };
};
