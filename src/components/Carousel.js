import React, { useState, useEffect, useRef } from "react";

const images = [
  //   "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/2155398638/photo/japanese-woman-exercising-yoga-on-a-class-in-a-health-club.webp?s=1024x1024&w=is&k=20&c=59D2ifw6Lp1ER78SgJhK7ew_GSmhcpL_duIZ_iGNaaY=",
  "https://media.istockphoto.com/id/1830268749/photo/active-african-american-pregnant-woman-practicing-yoga-sitting-in-butterfly-or-konasana-pose.jpg?s=1024x1024&w=is&k=20&c=r9TDIYp9XEatEjSVTaPPSuWDy1ujBQ63snRj92FIKJU=",
  "https://media.istockphoto.com/id/1474998089/photo/woman-in-lotus-pose-yoga-studio.jpg?s=1024x1024&w=is&k=20&c=fEUd_CcvsXdaKN5MtwogpZ7-G3j8pqItl55rc-bphoA=",
  "https://media.istockphoto.com/id/2149222806/photo/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=1024x1024&w=is&k=20&c=8jdaAO9NGGxoCJyH2HxHEAfir9WQUyf_HpLUXv-u_iM=",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = images.length;
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Cleanup on unmount
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide(); // Clear existing interval before starting a new one
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const updateCarousel = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalItems - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalItems - 1 ? prevIndex + 1 : 0
    );
  };

  // Handle swipe gestures (for touch devices)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (difference > 50) {
      handleNext(); // Swipe left
    } else if (difference < -50) {
      handlePrev(); // Swipe right
    }
  };

  return (
    <div
      className="relative max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full">
            <img
              src={image}
              alt={`Yoga Pose ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-80 transition duration-300 shadow-md"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-80 transition duration-300 shadow-md"
        onClick={handleNext}
      >
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-orange-500 scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
