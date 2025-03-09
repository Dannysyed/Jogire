import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [latestBlog, setLatestBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const blogsPerPage = 6; // Number of blogs per page

  // Fetch blogs from FastAPI backend
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
        setBlogs(data.blogs);
        setTotalPages(data.total_pages);
        // Set latest blog from the first page
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
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading)
    return (
      <div
        className="text-center py-10 text-gray-600"
        role="status"
        aria-live="polite"
      >
        Loading blogs...
      </div>
    );
  if (error)
    return (
      <div
        className="text-center py-10 text-red-500"
        role="alert"
        aria-live="assertive"
      >
        Error: {error}
      </div>
    );

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-[#d67952] mb-4">
          Our Blogs
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore insights and tips to enhance your wellness journey.
        </p>

        {/* Latest Blog Section */}
        {latestBlog && currentPage === 1 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Latest Blog
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={latestBlog.thumbnail_url}
                alt={latestBlog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {latestBlog.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {latestBlog.excerpt}
                </p>
                <Link
                  to={`/blog/${latestBlog.slug}`} // Changed from id to slug
                  className="inline-block text-[#d67952] font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug} // Changed from id to slug
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={blog.thumbnail_url}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 line-clamp-2 mb-4">
                  {blog.excerpt}
                </p>
                <Link
                  to={`/blog/${blog.slug}`} // Changed from id to slug
                  className="inline-block text-[#d67952] font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center justify-center p-3 bg-[#d67952] text-white rounded-full disabled:opacity-50 hover:bg-[#b55e3f] transition-colors duration-200"
              aria-label="Previous page"
            >
              <FaArrowLeft />
            </button>
            <span className="text-gray-700 self-center">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center p-3 bg-[#d67952] text-white rounded-full disabled:opacity-50 hover:bg-[#b55e3f] transition-colors duration-200"
              aria-label="Next page"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
