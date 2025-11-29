import React, { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "First Blog",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minima harum sequi molestias sunt doloribus deleniti placeat voluptates perferendis eum qui eveniet, maiores at magnam quod, esse aliquam numquam nostrum!",
      author: "Anik",
      id: 1,
    },
    {
      title: "Second Blog",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: "Muntaha",
      id: 2,
    },
    {
      title: "Third Blog",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minima harum sequi molestias sunt doloribus deleniti placeat voluptates perferendis eum qui eveniet, maiores at magnam quod, esse aliquam numquam nostrum!",
      author: "Anik",
      id: 1,
    },
  ]);

  return (
    <div className="home p-10">
      <h2 className="text-2xl font-medium pb-5 uppercase">
        Here are some blogs
      </h2>
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

export default Home;
