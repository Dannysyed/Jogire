// import React, { useState, useEffect } from "react";

// const TestimonialSection = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch testimonials from FastAPI backend
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:8000/api/v1/testimonials",
//           {
//             method: "GET",
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         if (!response.ok) throw new Error("Failed to fetch testimonials");
//         const data = await response.json();
//         setTestimonials(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTestimonials();
//   }, []);

//   // Handle video play (lazy-load video source)
//   const handlePlay = (id) => {
//     const videoElement = document.getElementById(`video-${id}`);

//     if (videoElement && !videoElement.src) {
//       const testimonial = testimonials.find((t) => t.id === id);
//       videoElement.src = testimonial.video_url; // Load video URL only on play
//     }
//   };

//   if (loading)
//     return (
//       <div className="text-center py-10 text-gray-600">
//         Loading testimonials...
//       </div>
//     );
//   if (error)
//     return <div className="text-center py-10 text-red-500">Error: {error}</div>;

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
//           What Our Clients Say
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//             >
//               <div className="relative aspect-video">
//                 <video
//                   id={`video-${testimonial.id}`}
//                   crossOrigin="anonymous"
//                   controls
//                   preload="none" // Prevents preloading
//                   poster={testimonial.thumbnail_url} // Thumbnail for initial load
//                   className="w-full h-full object-cover"
//                   onPlay={() => handlePlay(testimonial.id)}
//                   src={testimonial.video_url}
//                 >
//                   {/* Source is set dynamically on play */}
//                   <track
//                     kind="captions"
//                     src={testimonial.caption_url}
//                     srcLang="en"
//                     label="English"
//                     default
//                   />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//               <div className="p-4">
//                 <p className="text-gray-600 italic">{testimonial.caption}</p>
//                 <p className="mt-2 text-sm font-semibold text-gray-800">
//                   {testimonial.name}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;
// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const TestimonialSection = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);

//   const testimonialsPerPage = window.innerWidth >= 1024 ? 3 : 1; // 3 testimonials on large screens, 1 on small screens

//   // Fetch testimonials from FastAPI backend
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:8000/api/v1/testimonials",
//           {
//             method: "GET",
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         if (!response.ok) throw new Error("Failed to fetch testimonials");
//         const data = await response.json();
//         setTestimonials(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTestimonials();
//   }, []);

//   // const handlePlay = (id) => {
//   //   const videoElement = document.getElementById(`video-${id}`);
//   //   if (videoElement && !videoElement.src) {
//   //     const testimonial = testimonials.find((t) => t.id === id);
//   //     videoElement.src = testimonial.video_url; // Load video URL only on play
//   //   }
//   // };

//   // Pagination Logic
//   const indexOfLastTestimonial = currentPage * testimonialsPerPage;
//   const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
//   const currentTestimonials = testimonials.slice(
//     indexOfFirstTestimonial,
//     indexOfLastTestimonial
//   );

//   const handleNextPage = () => {
//     if (currentPage < Math.ceil(testimonials.length / testimonialsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (loading)
//     return (
//       <div className="text-center py-10 text-gray-600">
//         Loading testimonials...
//       </div>
//     );
//   if (error)
//     return <div className="text-center py-10 text-red-500">Error: {error}</div>;

//   return (
//     <section className="py-8 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl font-bold text-center text-[#d67952]">
//           What Our Clients Say
//         </h1>
//         <p className="mt-2 text-lg text-gray-600 text-center">
//           Hear how our clients unlocked their full potential.
//         </p>
//         <div className="overflow-hidden">
//           {/* Adjust the grid based on page */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 py-8">
//             {currentTestimonials.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//               >
//                 <div className="relative aspect-video">
//                   <video
//                     id={`video-${testimonial.id}`}
//                     crossOrigin="anonymous"
//                     controls
//                     preload="none" // Prevents preloading
//                     poster={testimonial.thumbnail_url} // Thumbnail for initial load
//                     className="w-full h-full object-cover"
//                     //onPlay={() => handlePlay(testimonial.id)}
//                     src={testimonial.video_url}
//                   >
//                     <track
//                       kind="captions"
//                       src={testimonial.caption_url}
//                       srcLang="en"
//                       label="English"
//                       default
//                     />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//                 <div className="p-4">
//                   <p className="text-gray-600 italic">{testimonial.caption}</p>
//                   <p className="mt-2 text-sm font-semibold text-gray-800">
//                     {testimonial.name}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Pagination Buttons */}
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={handlePrevPage}
//             className="flex justify-center items-center p-3 bg-[#d67952] text-white rounded-full disabled:opacity-50"
//             disabled={currentPage === 1}
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             onClick={handleNextPage}
//             className="flex justify-center items-center p-3 bg-[#d67952] text-white rounded-full ml-4 disabled:opacity-50"
//             disabled={
//               currentPage ===
//               Math.ceil(testimonials.length / testimonialsPerPage)
//             }
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [playing, setPlaying] = useState({}); // Track playing state for each video

  const testimonialsPerPage = window.innerWidth >= 1024 ? 3 : 1; // 3 testimonials on large screens, 1 on small screens

  // Fetch testimonials from FastAPI backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://jogire-backend.onrender.com/api/v1/testimonials",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch testimonials");
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // Handle custom play button click
  const handlePlay = (id) => {
    const videoElement = document.getElementById(`video-${id}`);
    if (videoElement) {
      videoElement.play();
      setPlaying((prev) => ({ ...prev, [id]: true }));
    }
  };

  // Handle video pause to show play button again
  const handlePause = (id) => {
    setPlaying((prev) => ({ ...prev, [id]: false }));
  };

  // Pagination Logic
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(testimonials.length / testimonialsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading)
    return (
      <div className="text-center py-10 text-gray-600">
        Loading testimonials...
      </div>
    );
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[#d67952]">
          What Our Clients Say
        </h1>
        <p className="mt-2 text-lg text-gray-600 text-center">
          Hear how our clients unlocked their full potential.
        </p>
        <div className="overflow-hidden">
          {/* Adjust the grid based on page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 py-8">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative aspect-video">
                  <video
                    id={`video-${testimonial.id}`}
                    crossOrigin="anonymous"
                    controls
                    preload="none" // Prevents preloading
                    poster={testimonial.thumbnail_url} // Thumbnail for initial load
                    className="w-full h-full object-cover"
                    src={testimonial.video_url}
                    onPause={() => handlePause(testimonial.id)}
                  >
                    <track
                      kind="captions"
                      src={testimonial.caption_url}
                      srcLang="en"
                      label="English"
                      default
                    />
                    Your browser does not support the video tag.
                  </video>
                  {/* Custom Play Button Overlay */}
                  {!playing[testimonial.id] && (
                    <button
                      onClick={() => handlePlay(testimonial.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"
                      aria-label="Play video"
                    >
                      <FaPlay className="text-white text-4xl" />
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-gray-600 italic">{testimonial.caption}</p>
                  <p className="mt-2 text-sm font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevPage}
            className="flex justify-center items-center p-3 bg-[#d67952] text-white rounded-full disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextPage}
            className="flex justify-center items-center p-3 bg-[#d67952] text-white rounded-full ml-4 disabled:opacity-50"
            disabled={
              currentPage ===
              Math.ceil(testimonials.length / testimonialsPerPage)
            }
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
