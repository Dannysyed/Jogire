// import React, { useState } from "react";

// const AddBlogForm = () => {
//   const [formData, setFormData] = useState({
//     slug: "",
//     title: "",
//     excerpt: "",
//     thumbnail_url: "",
//     content: "",
//   });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(false);
//     try {
//       const response = await fetch(
//         "https://jogire-backend.onrender.com/api/v1/blogs",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData), // No need to parse slug as integer
//         }
//       );
//       if (!response.ok) throw new Error("Failed to create blog");
//       setSuccess(true);
//       setFormData({
//         slug: "",
//         title: "",
//         excerpt: "",
//         thumbnail_url: "",
//         content: "",
//       });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center text-[#d67952] mb-8">
//           Add New Blog
//         </h2>
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
//         >
//           <div>
//             <label
//               htmlFor="slug"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Slug (optional, auto-generated if empty)
//             </label>
//             <input
//               type="text" // Changed from number to text
//               id="slug"
//               name="slug"
//               value={formData.slug}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
//               placeholder="e.g., yoga-for-gut-health"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="title"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="excerpt"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Excerpt
//             </label>
//             <textarea
//               id="excerpt"
//               name="excerpt"
//               value={formData.excerpt}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
//               rows="3"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="thumbnail_url"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Thumbnail URL
//             </label>
//             <input
//               type="url"
//               id="thumbnail_url"
//               name="thumbnail_url"
//               value={formData.thumbnail_url}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="content"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Content
//             </label>
//             <textarea
//               id="content"
//               name="content"
//               value={formData.content}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
//               rows="6"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-[#d67952] text-white rounded-lg hover:bg-[#b55e3f] transition-colors duration-200"
//           >
//             Add Blog
//           </button>
//           {success && (
//             <p className="text-green-600 text-center">
//               Blog added successfully!
//             </p>
//           )}
//           {error && <p className="text-red-500 text-center">Error: {error}</p>}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default AddBlogForm;

import React, { useState } from "react";
import Editor from "./Editor";

const AddBlogForm = () => {
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    excerpt: "",
    thumbnail_url: "",
    content: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorSave = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch(
        "https://jogire-backend.onrender.com/api/v1/blogs",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
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
        thumbnail_url: "",
        content: "",
      });
    } catch (err) {
      setError(err.message);
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
            />
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
          </div>
          <div>
            <label
              htmlFor="thumbnail_url"
              className="block text-gray-700 font-semibold mb-2"
            >
              Thumbnail URL
            </label>
            <input
              type="url"
              id="thumbnail_url"
              name="thumbnail_url"
              value={formData.thumbnail_url}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d67952]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Content
            </label>
            <Editor onSave={handleEditorSave} />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#d67952] text-white rounded-lg hover:bg-[#b55e3f] transition-colors duration-200"
          >
            Add Blog
          </button>
          {success && (
            <p className="text-green-600 text-center">
              Blog added successfully!
            </p>
          )}
          {error && <p className="text-red-500 text-center">Error: {error}</p>}
        </form>
      </div>
    </section>
  );
};

export default AddBlogForm;
