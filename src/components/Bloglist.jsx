import React from "react";

const Bloglist = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2 className="text-2xl font-medium mb-4">{title}</h2>
      {blogs.map((blog) => (
        <div
          className="blog-preview shadow shadow-pink-300 mb-3 p-2 rounded-lg"
          key={blog.id}
        >
          <h2 className="text-2xl font-medium text-pink-500">{blog.title}</h2>
          <p className="text-lg font-medium">Author: {blog.author}</p>
          <p className="border-t border-t-pink-400">{blog.body}</p>
          <button
            onClick={() => handleDelete(blog.id)}
            className="bg-pink-400 px-2 py-0.5 rounded-md font-medium mt-2 cursor-pointer hover:bg-pink-500"
          >
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
