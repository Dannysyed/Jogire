// import React, { useState, useEffect, useRef } from "react";

// const images = [
//   "https://jogire.s3.ap-south-1.amazonaws.com/static/carousel/test2.jpg",
//   "https://media.istockphoto.com/id/1830268749/photo/active-african-american-pregnant-woman-practicing-yoga-sitting-in-butterfly-or-konasana-pose.jpg?s=1024x1024&w=is&k=20&c=r9TDIYp9XEatEjSVTaPPSuWDy1ujBQ63snRj92FIKJU=",
//   "https://media.istockphoto.com/id/1474998089/photo/woman-in-lotus-pose-yoga-studio.jpg?s=1024x1024&w=is&k=20&c=fEUd_CcvsXdaKN5MtwogpZ7-G3j8pqItl55rc-bphoA=",
//   "https://media.istockphoto.com/id/2149222806/photo/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=1024x1024&w=is&k=20&c=8jdaAO9NGGxoCJyH2HxHEAfir9WQUyf_HpLUXv-u_iM=",
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalItems = images.length;
//   const intervalRef = useRef(null);
//   const touchStartX = useRef(null);

//   const startAutoSlide = () => {
//     stopAutoSlide();
//     intervalRef.current = setInterval(() => {
//       handleNext();
//     }, 5000);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => stopAutoSlide();
//   }, [currentIndex]);

//   const stopAutoSlide = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : totalItems - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex < totalItems - 1 ? prevIndex + 1 : 0
//     );
//   };

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     const touchEndX = e.changedTouches[0].clientX;
//     const difference = touchStartX.current - touchEndX;

//     if (difference > 50) {
//       handleNext();
//     } else if (difference < -50) {
//       handlePrev();
//     }
//   };

//   return (
//     <div
//       className="relative w-full h-[50vh] overflow-hidden"
//       onMouseEnter={stopAutoSlide}
//       onMouseLeave={startAutoSlide}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Image Slider Container */}
//       <div
//         className="flex w-full h-full transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="w-full flex-none h-full">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       {/* Text Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
//         <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
//           Discover Your Inner Strength
//         </h1>
//         <p className="text-lg sm:text-xl max-w-2xl">
//           A journey to a healthier and more peaceful you starts here.
//         </p>
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 sm:p-4 rounded-full shadow-lg transition duration-300"
//         onClick={handlePrev}
//       >
//         &#10094;
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 sm:p-4 rounded-full shadow-lg transition duration-300"
//         onClick={handleNext}
//       >
//         &#10095;
//       </button>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full transition-all duration-300 ${
//               currentIndex === index
//                 ? "bg-[#d67952] scale-125"
//                 : "bg-gray-400 hover:bg-gray-500"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://jogire.s3.ap-south-1.amazonaws.com/static/carousel/test2.jpg",
  "https://media.istockphoto.com/id/1830268749/photo/active-african-american-pregnant-woman-practicing-yoga-sitting-in-butterfly-or-konasana-pose.jpg?s=1024x1024&w=is&k=20&c=r9TDIYp9XEatEjSVTaPPSuWDy1ujBQ63snRj92FIKJU=",
  "https://media.istockphoto.com/id/1474998089/photo/woman-in-lotus-pose-yoga-studio.jpg?s=1024x1024&w=is&k=20&c=fEUd_CcvsXdaKN5MtwogpZ7-G3j8pqItl55rc-bphoA=",
  "https://media.istockphoto.com/id/2149222806/photo/active-seniors-stretching-on-exercise-class-in-a-health-club.jpg?s=1024x1024&w=is&k=20&c=8jdaAO9NGGxoCJyH2HxHEAfir9WQUyf_HpLUXv-u_iM=",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

  return (
    <div className="w-full flex justify-center px-2">
      <div
        className="relative w-full max-w- aspect-video min-h-[400px] max-h-[600px] overflow-hidden rounded-2xl shadow-lg"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-none h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Discover Your Inner Strength
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl">
            A journey to a healthier and more peaceful you starts here.
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 sm:p-4 rounded-full shadow-md z-30"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 sm:p-4 rounded-full shadow-md z-30"
          onClick={handleNext}
        >
          &#10095;
        </button>

        {/* Dot Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#d67952] scale-125"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
