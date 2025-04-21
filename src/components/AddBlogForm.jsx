import React, { useState, useRef } from "react";
import Editor from "./Editor";
import { FaUpload, FaSpinner } from "react-icons/fa";

const AddBlogForm = () => {
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    published_on: "",
    author_name: "",
  });
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSizeMB = 2;
    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        thumbnail: "Only JPEG or PNG files are allowed",
      }));
      return;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        thumbnail: `File size must be less than ${maxSizeMB}MB`,
      }));
      return;
    }

    setThumbnailFile(file);
    setErrors((prev) => ({ ...prev, thumbnail: null }));

    // Generate preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnailPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleEditorChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
    if (errors.content) {
      setErrors((prev) => ({ ...prev, content: null }));
    }
  };

  const handleImageUpload = (url) => {
    setUploadedImages((prev) => [...prev, url]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.excerpt.trim()) newErrors.excerpt = "Excerpt is required";
    if (!thumbnailFile) newErrors.thumbnail = "Thumbnail image is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!formData.author_name.trim())
      newErrors.author_name = "Author name is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess(false);
    setIsSubmitting(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Move images from temp/ to blogs/uploads/images/
      const moveResponse = await fetch(
        "https://jogire-backend.onrender.com/api/v1/blogs/blog-move-images",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: formData.content, uploadedImages }),
        }
      );
      if (!moveResponse.ok) {
        throw new Error("Failed to move images");
      }
      const { updatedContent } = await moveResponse.json();

      // Prepare form data for blog creation
      const data = new FormData();
      data.append("slug", formData.slug);
      data.append("title", formData.title);
      data.append("excerpt", formData.excerpt);
      data.append("content", updatedContent);
      data.append(
        "published_on",
        formData.published_on || new Date().toISOString().split("T")[0]
      );
      data.append("author_name", formData.author_name);
      if (thumbnailFile) {
        data.append("thumbnail", thumbnailFile);
      }

      // Save blog
      const response = await fetch(
        "https://jogire-backend.onrender.com/api/v1/blogs",
        {
          method: "POST",
          body: data,
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to create blog");
      }

      setSuccess(true);
      setFormData({
        slug: "",
        title: "",
        excerpt: "",
        content: "",
        published_on: "",
        author_name: "",
      });
      setThumbnailFile(null);
      setThumbnailPreview(null);
      setUploadedImages([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      setErrors({ general: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#d67952] mb-8">
          Add New Blog
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
          encType="multipart/form-data"
        >
          <div>
            <label
              htmlFor="slug"
              className="block text-gray-700 font-semibold mb-2"
            >
              Slug (optional)
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
              placeholder="e.g., yoga-for-gut-health"
            />
            {errors.slug && (
              <p className="text-red-500 text-sm mt-1">{errors.slug}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
              required
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="excerpt"
              className="block text-gray-700 font-semibold mb-2"
            >
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
              rows="3"
              required
            />
            {errors.excerpt && (
              <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="thumbnail"
              className="block text-gray-700 font-semibold mb-2"
            >
              Thumbnail Image
            </label>
            <div className="flex items-center space-x-4">
              <label
                className={`flex items-center justify-center w-full p-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200 ${
                  errors.thumbnail
                    ? "border-red-500"
                    : "border-gray-300 hover:border-[#d67952]"
                }`}
              >
                <FaUpload className="text-[#d67952] mr-2" />
                <span className="text-gray-600">
                  {thumbnailFile
                    ? thumbnailFile.name
                    : "Upload an image (JPEG/PNG)"}
                </span>
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  accept="image/jpeg,image/png"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileInputRef}
                  required
                />
              </label>
            </div>
            {thumbnailPreview && (
              <div className="mt-4">
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail preview"
                  className="w-32 h-32 object-cover rounded-lg shadow-sm"
                />
              </div>
            )}
            {errors.thumbnail && (
              <p className="text-red-500 text-sm mt-1">{errors.thumbnail}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="author_name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Author Name
            </label>
            <input
              type="text"
              id="author_name"
              name="author_name"
              value={formData.author_name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
              required
            />
            {errors.author_name && (
              <p className="text-red-500 text-sm mt-1">{errors.author_name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="published_on"
              className="block text-gray-700 font-semibold mb-2"
            >
              Published On (optional)
            </label>
            <input
              type="date"
              id="published_on"
              name="published_on"
              value={formData.published_on}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
            />
            {errors.published_on && (
              <p className="text-red-500 text-sm mt-1">{errors.published_on}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Content
            </label>
            <Editor
              onChange={handleEditorChange}
              initialData={formData.content}
              onImageUpload={handleImageUpload}
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 bg-[#d67952] text-white rounded-lg transition-colors duration-200 flex items-center justify-center ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#b55e3f]"
            }`}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              "Add Blog"
            )}
          </button>
          {success && (
            <p className="text-green-600 text-center">
              Blog added successfully!
            </p>
          )}
          {errors.general && (
            <p className="text-red-500 text-center">Error: {errors.general}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default AddBlogForm;
