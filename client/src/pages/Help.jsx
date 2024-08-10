import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const queryItems = [
  { id: 1, question: "Need to pay ", description: "hello there" },
  { id: 2, question: "Need to pay ", description: "hello there" },
];

const Help = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handlePolicy = (item, e) => {
    e.preventDefault();
    setSelectedItem(item);
    console.log(item);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 font-sans">
          <h2 className="text-white text-center md:text-left capitalize text-3xl font-semibold my-3">
            contact us
          </h2>
          <form className="flex flex-col gap-10 md:items-start items-center">
            <label htmlFor="name" className="relative">
              <FaUser className="absolute top-3 left-2 opacity-60" />
              <input
                type="text"
                name="name"
                id="name"
                className="outline-none border-none rounded pl-8 p-2 w-64 md:w-80"
                placeholder="Name"
                required
              />
            </label>
            <label htmlFor="email" className="relative">
              <MdOutlineEmail className="absolute top-3 left-2 opacity-60" />
              <input
                type="email"
                name="email"
                id="email"
                className="outline-none border-none rounded pl-8 p-2 w-64 md:w-80"
                placeholder="Email"
                required
              />
            </label>
            <textarea
              type="textarea"
              rows={4}
              className="outline-none border-none rounded p-2 w-64 md:md:w-80"
              placeholder="message"
              required
            ></textarea>
            <button
              type="submit"
              className="p-3 w-64 md:w-80 bg-blue-400 rounded-full hover:transition hover:scale-105 ease-in-out delay-75 hover:bg-blue-300"
            >
              Send Message
            </button>
          </form>
          <article className=" p-4 my-5">
            <div className="flex justify-between bg-red-300 p-2 items-center">
              <h2 className="hidden md:block relative text-green-800  font-extrabold text-xl border-l-4 border-l-red-500 pl-2">
                Feedback.... Ask a question
              </h2>
              <label htmlFor="ask">
                <input
                  type="text"
                  name="ask"
                  id="ask"
                  placeholder="Ask questions..."
                  className="w-full rounded outline-none border-none"
                />
              </label>
            </div>

            {queryItems.map((ask) => (
              <article className="my-1" key={ask.id}>
                <h3 className="text-green-500 text-lg font-sans font-bold bg-green-800 relative p-2">
                  {ask.question}
                  <span onClick={(e) => handlePolicy(ask, e)}>
                    {ask === selectedItem ? (
                      <FaChevronUp className="absolute top-3 right-4 text-black opacity-40 cursor-pointer" />
                    ) : (
                      <FaChevronDown className="absolute top-3 right-4 text-black opacity-40 cursor-pointer" />
                    )}
                  </span>
                </h3>

                {ask === selectedItem && (
                  <div className="flex flex-col bg-green-200 p-3">
                    <div>{ask.description}</div>
                  </div>
                )}
              </article>
            ))}
          </article>

          <article className="p-4 my-5">
            <h2 className="relative text-green-800 p-2 bg-red-300 font-extrabold text-xl border-l-4 border-l-red-500 pl-2 text-center ">
              Policy and Terms
            </h2>
            <div className="text-white p-2 border border-collapse border-dashed mx-2 flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-col border border-dotted p-3">
                <h3 className="text-green-500 text-lg font-sans font-bold bg-green-800 p-2">
                  Faqs
                </h3>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio totam debitis error temporibus, quos tenetur quia vero
                  ducimus, aut repellendus dolorum voluptas sit placeat aliquam
                  doloribus dicta explicabo magnam provident. Consectetur veniam
                  ad rerum? Natus iste fuga ut, sapiente perspiciatis deserunt,
                  similique vel architecto consequatur placeat maiores ad
                  corrupti laudantium dolore esse ab possimus ea excepturi in
                  ratione tenetur veniam.
                </div>
              </div>
              <div className="flex flex-col border border-dotted p-3">
                <h3 className="text-green-500 text-lg font-sans font-bold bg-green-800 p-2">
                  Faqs
                </h3>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio totam debitis error temporibus, quos tenetur quia vero
                  ducimus, aut repellendus dolorum voluptas sit placeat aliquam
                  doloribus dicta explicabo magnam provident. Consectetur veniam
                  ad rerum? Natus iste fuga ut, sapiente perspiciatis deserunt,
                  similique vel architecto consequatur placeat maiores ad
                  corrupti laudantium dolore esse ab possimus ea excepturi in
                  ratione tenetur veniam.
                </div>
              </div>
              <div className="flex flex-col border border-dotted p-3">
                <h3 className="text-green-500 text-lg font-sans font-bold bg-green-800 p-2">
                  Faqs
                </h3>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio totam debitis error temporibus, quos tenetur quia vero
                  ducimus, aut repellendus dolorum voluptas sit placeat aliquam
                  doloribus dicta explicabo magnam provident. Consectetur veniam
                  ad rerum? Natus iste fuga ut, sapiente perspiciatis deserunt,
                  similique vel architecto consequatur placeat maiores ad
                  corrupti laudantium dolore esse ab possimus ea excepturi in
                  ratione tenetur veniam.
                </div>
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Help;
