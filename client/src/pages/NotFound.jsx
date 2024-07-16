import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-10 bg-slate-500 min-h-screen flex items-center justify-center flex-col">
      <div className="">
        <Link
          to={"/"}
          className="text-white rounded border border-blue-300 p-2 m-10 bg-blue-300 hover:bg-blue-500"
        >
          Home
        </Link>
        <div className="bg-slate-400 p-14 md:p-52 md:-mt-4 ">
          <h1 className="uppercase font-bold text-5xl text-center my-5">404</h1>
          <p className="uppercase font-semibold text-2xl text-center my-5">
            page not found
          </p>
          <p className="text-center text-amber-700 my-5">
            let's try something else
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
