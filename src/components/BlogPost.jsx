import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
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
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!blog)
    return (
      <div className="text-center py-10 text-gray-600">Blog not found.</div>
    );

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blogs"
          className="inline-flex items-center text-[#d67952] font-semibold hover:underline mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </Link>
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
            <div
              className="prose prose-lg text-gray-700 max-w-none ck-content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content),
              }}
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
