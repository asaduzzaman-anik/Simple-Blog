import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Anik");
  const [age, setAge] = useState(30);

  //   click event handler for button
  const handleClick = () => {
    setName("Muntaha");
    setAge(24);
  };

  return (
    <div className="home p-5">
      <h2 className="text-3xl font-medium py-5">Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button
        className="cursor-pointer bg-pink-400 hover:bg-pink-500 rounded-lg px-2 py-1 my-2 font-medium"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default Home;
