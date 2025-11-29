import React, { useEffect, useState } from "react";
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

  const [name, setName] = useState("Anik");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  }, [name]);

  return (
    <div className="home p-10">
      <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <button
        onClick={() => setName("Muntaha")}
        className="bg-purple-400 px-2 py-0.5 rounded-md font-medium mt-2 cursor-pointer hover:bg-purple-500"
      >
        Change Name
      </button>
    </div>
  );
};

export default Home;
