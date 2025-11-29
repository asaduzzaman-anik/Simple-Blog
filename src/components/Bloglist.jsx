import React from "react";

const Bloglist = () => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div
          className="blog-preview shadow shadow-pink-300 mb-3 p-2 rounded-lg"
          key={blog.id}
        >
          <h2 className="text-2xl font-medium text-pink-500">{blog.title}</h2>
          <p className="text-lg font-medium">Author: {blog.author}</p>
          <p className="border-t border-t-pink-400">{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
