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
    </div>
  );
};

export default Home;
