import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BlogPost = () => {
  const { slug } = useParams(); // Changed from id to slug
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch individual blog post from FastAPI backend
  useEffect(() => {
    const fetchBlogPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jogire-backend.onrender.com/api/v1/blogs/${slug}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch blog post");
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPost();
  }, [slug]); // Changed dependency from id to slug

  if (loading)
    return (
      <div
        className="text-center py-10 text-gray-600"
        role="status"
        aria-live="polite"
      >
        Loading blog post...
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
  if (!blog)
    return (
      <div className="text-center py-10 text-gray-600">
        Blog post not found.
      </div>
    );

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blogs Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center text-[#d67952] font-semibold hover:underline mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </Link>

        {/* Blog Content */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={blog.thumbnail_url}
            alt={blog.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-600 mb-6">{blog.excerpt}</p>
            <div className="prose prose-lg text-gray-700 max-w-none">
              {/* Assuming content is plain text; use a rich text parser if HTML */}
              {blog.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
