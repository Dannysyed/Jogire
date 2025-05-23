import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";
import "ckeditor5/ckeditor5.css";
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, [slug]);

  if (loading)
    return (
      <div className="text-center py-16 text-gray-600 animate-pulse">
        <div className="inline-block bg-gray-200 rounded-full px-4 py-2">
          Loading...
        </div>
      </div>
    );
  if (error)
    return (
      <div className="text-center py-16 text-red-500 bg-red-50 rounded-lg mx-4">
        Error: {error}
      </div>
    );
  if (!blog)
    return (
      <div className="text-center py-16 text-gray-600 bg-gray-50 rounded-lg mx-4">
        Blog not found.
      </div>
    );

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blogs"
          className="inline-flex items-center text-[#d67952] font-semibold hover:underline mb-8 transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </Link>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative overflow-hidden">
            <img
              src={blog.thumbnail_url}
              alt={blog.title}
              className="w-full h-64 sm:h-96 object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 shadow-inner" />
          </div>
          <div className="p-8 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6 space-x-4">
              {blog.published_on && (
                <span className="flex items-center">
                  <FaCalendarAlt className="text-[#d67952] mr-2" />
                  {new Date(blog.published_on).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
              {blog.author_name && (
                <span className="flex items-center">
                  <FaUser className="text-[#d67952] mr-2" />
                  {blog.author_name}
                </span>
              )}
            </div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {blog.excerpt}
            </p>
            <div className="border-t border-[#d67952]/20 pt-6">
              <div
                className="prose prose-lg text-gray-700 max-w-none ck-content"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.content),
                }}
              />
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default BlogPost;
