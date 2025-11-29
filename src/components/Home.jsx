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
      id: 1,
    },
  ]);

  return (
    <div className="home p-10">
      <Bloglist blogs={blogs} title="All blogs" />
      <Bloglist
        blogs={blogs.filter((blog) => blog.author === "Anik")}
        title="Anik's blogs"
      />
      <Bloglist
        blogs={blogs.filter((blog) => blog.author === "Muntaha")}
        title="Muntaha's blogs"
      />
    </div>
  );
};

export default Home;
