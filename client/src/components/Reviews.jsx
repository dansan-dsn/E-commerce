import React, { useEffect, useState } from "react";
import img from "../assets/images/back1.jpg";

const Reviews = () => {
  const users = [
    { name: "Dansan", description: "Hello there", image: img },
    { name: "Wood", description: "Hello there", image: img },
    { name: "Hello", description: "Hello there", image: img },
    { name: "San", description: "Hello there", image: img },
    { name: "Dan", description: "Hello there", image: img },
    { name: "Agaba", description: "Hello there", image: img },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = users.length;

  const nextPreview = () => {
    setCurrentIndex((nextIndex) => (nextIndex + 1) % totalItems);
  };

  const prevPreview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const interval = setInterval(() => nextPreview(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-3">
      <div className="p-3">
        <h1 className="text-center text-2xl font-bold my-1 text-purple-800 uppercase">
          Testimonials
        </h1>
        <div className="relative flex overflow-hidden py-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex % totalItems) * (100 / 3)
              }%)`,
            }}
          >
            {users.concat(users).map((user, index) => (
              <div
                key={index}
                className="w-1/3 flex-none p-2 transition-opacity duration-500"
                style={{
                  opacity:
                    index >= currentIndex && index < currentIndex + 3 ? 1 : 0.2,
                }}
              >
                <div className="relative w-full h-52 flex flex-col justify-center items-center bg-white rounded-3xl shadow-lg">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-20 h-20 rounded-full absolute -top-8"
                  />
                  <p>{user.description}</p>
                  <p className="text-green-600 my-3">{user.name}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-950 text-white rounded-full p-2 transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={prevPreview}
          >
            &#10094;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-950 text-white rounded-full p-2 transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={nextPreview}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
