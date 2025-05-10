// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const BlogsSection = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [latestBlog, setLatestBlog] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const blogsPerPage = 6; // Number of blogs per page

//   // Fetch blogs from FastAPI backend
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://jogire-backend.onrender.com/api/v1/blogs?page=${currentPage}&limit=${blogsPerPage}`,
//           {
//             method: "GET",
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         if (!response.ok) throw new Error("Failed to fetch blogs");
//         const data = await response.json();
//         setBlogs(data.blogs);
//         setTotalPages(data.total_pages);
//         // Set latest blog from the first page
//         if (currentPage === 1 && data.blogs.length > 0) {
//           setLatestBlog(data.blogs[0]);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, [currentPage]);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
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
//       <div
//         className="text-center py-10 text-gray-600"
//         role="status"
//         aria-live="polite"
//       >
//         Loading blogs...
//       </div>
//     );
//   if (error)
//     return (
//       <div
//         className="text-center py-10 text-red-500"
//         role="alert"
//         aria-live="assertive"
//       >
//         Error: {error}
//       </div>
//     );

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <h1 className="text-4xl font-bold text-center text-[#d67952] mb-4">
//           Our Blogs
//         </h1>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Explore insights and tips to enhance your wellness journey.
//         </p>

//         {/* Latest Blog Section */}
//         {latestBlog && currentPage === 1 && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//               Latest Blog
//             </h2>
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <img
//                 src={latestBlog.thumbnail_url}
//                 alt={latestBlog.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {latestBlog.title}
//                 </h3>
//                 <p className="text-gray-600 line-clamp-3 mb-4">
//                   {latestBlog.excerpt}
//                 </p>
//                 <Link
//                   to={`/blog/${latestBlog.slug}`} // Changed from id to slug
//                   className="inline-block text-[#d67952] font-semibold hover:underline"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Blogs Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <div
//               key={blog.slug} // Changed from id to slug
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//             >
//               <img
//                 src={blog.thumbnail_url}
//                 alt={blog.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {blog.title}
//                 </h3>
//                 <p className="text-gray-600 line-clamp-2 mb-4">
//                   {blog.excerpt}
//                 </p>
//                 <Link
//                   to={`/blog/${blog.slug}`} // Changed from id to slug
//                   className="inline-block text-[#d67952] font-semibold hover:underline"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-8 space-x-4">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className="flex items-center justify-center p-3 bg-[#d67952] text-white rounded-full disabled:opacity-50 hover:bg-[#b55e3f] transition-colors duration-200"
//               aria-label="Previous page"
//             >
//               <FaArrowLeft />
//             </button>
//             <span className="text-gray-700 self-center">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className="flex items-center justify-center p-3 bg-[#d67952] text-white rounded-full disabled:opacity-50 hover:bg-[#b55e3f] transition-colors duration-200"
//               aria-label="Next page"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default BlogsSection;

import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ImSpinner2 } from "react-icons/im";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [latestBlog, setLatestBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const blogsPerPage = 6;
  const featuredRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jogire-backend.onrender.com/api/v1/blogs?page=${currentPage}&limit=${blogsPerPage}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        console.log(`Page ${currentPage} blogs:`, data.blogs);
        setBlogs(data.blogs);
        setTotalPages(data.total_pages || 1);
        if (currentPage === 1 && data.blogs.length > 0) {
          setLatestBlog(data.blogs[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen bg-[#fffaf5]"
        role="status"
        aria-live="polite"
      >
        <ImSpinner2 className="mx-auto animate-spin text-4xl text-[#d67952]" />
        <p className="mt-4 text-gray-600 text-lg">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="text-center py-10 text-red-500"
        role="alert"
        aria-live="assertive"
      >
        Error: {error}
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#d67952] mb-4">
            Explore Our Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Dive into expert insights, yoga practices, and holistic tips to
            nurture your mind, body, and soul.
          </p>
        </motion.div>

        {latestBlog && currentPage === 1 && (
          <motion.div
            ref={featuredRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Featured Story
            </h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[500px]">
              <motion.div style={{ y }} className="relative h-[500px]">
                <img
                  src={latestBlog.thumbnail_url}
                  alt={latestBlog.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
              </motion.div>
              <div className="absolute inset-0 flex flex-col justify-center items-start md:items-center px-6 md:px-20 text-white z-20">
                <span className="text-sm font-medium mb-2">
                  {new Date(latestBlog.published_on).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-left md:text-center">
                  {latestBlog.title}
                </h3>
                <p className="text-md md:text-lg max-w-3xl mb-6 line-clamp-3 text-left md:text-center">
                  {latestBlog.excerpt}
                </p>
                <Link
                  to={`/blog/${latestBlog.slug}`}
                  className="inline-block px-6 py-3 bg-[#d67952] text-white font-semibold rounded-full hover:bg-[#b55e3f] transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center min-w-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col w-80 min-h-[500px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-full h-[192px] overflow-hidden flex-shrink-0">
                {blog.thumbnail_url ? (
                  <img
                    src={blog.thumbnail_url}
                    alt={blog.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-sm text-[#d67952] font-medium mb-2">
                    {new Date(blog.published_on).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{blog.excerpt}</p>
                </div>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-4 inline-block text-[#d67952] font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <motion.div
            className="flex justify-center mt-12 space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center justify-center p-3 bg-[#d67952] text-white rounded-full disabled:opacity-50 hover:bg-[#b55e3f] transition"
              aria-label="Previous page"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowLeft />
            </motion.button>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentPage}
                className="text-gray-800 font-medium self-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                Page {currentPage} of {totalPages}
              </motion.span>
            </AnimatePresence>
            <motion.button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center p-3 bg-[#d67952] text-white rounded-full disabled:opacity-50 hover:bg-[#b55e3f] transition"
              aria-label="Next page"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowRight />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
