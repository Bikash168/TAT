import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Dynamically set height for mobile devices (optional safeguard for iOS devices)
    const setVideoHeight = () => {
      const videoElement = document.getElementById("hero-video");
      if (videoElement) {
        videoElement.style.height = `${window.innerHeight}px`;
      }
    };

    // Call the function on load and resize
    setVideoHeight();
    window.addEventListener("resize", setVideoHeight);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", setVideoHeight);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          id="hero-video"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/your-video-file.mp4" type="video/mp4" />
          {/* Fallback for browsers that don’t support video */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Black Filter Film (Overlay on top of video) */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 mt-24 sm:mt-16 lg:mt-32 z-20">
        <div className="text-center space-y-4">
          {/* Heading with responsive font sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-base leading-tight my-6">
            Welcome to Trident Academy Of Technology
          </h1>

          {/* Subheading with responsive font sizes */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 sm:mt-4">
            Creating impactful solutions for a sustainable future.
          </p>

          {/* Button */}
          <div className="mt-6">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
