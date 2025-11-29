import React, { useState } from "react";
import Bloglist from "./Bloglist";

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
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home p-10">
      <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
