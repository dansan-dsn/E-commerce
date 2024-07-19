import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import Search from "./Search";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed p-1 border border-blue-800 m-5 mr-40 flex">
        {/* <h1 className="text-fuchsia-900 text-xl font-bold">d.s.n AccShop</h1> */}
        {/* <ul className="text-white">
          <li className="border rounded-full cursor-pointer bg-fuchsia-950 px-3 text-center relative">
            Trendig
            <MdArrowDropDown className="absolute bottom-1 right-0   " />
          </li>
        </ul> */}
      </nav>
      <Search />
      <div></div>
    </div>
  );
};

export default Navbar;
