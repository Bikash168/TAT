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

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 my-10">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight my-10">
            Welcome to Trident Academy Of Technology
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
            Creating impactful solutions for a sustainable future.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm sm:text-base md:text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
