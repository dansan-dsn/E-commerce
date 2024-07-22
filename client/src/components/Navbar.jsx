import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfileInfo from "./ProfileInfo";
import Cart from "./cards/Cart";
import { CgMenuGridR } from "react-icons/cg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [querySearch, setQuerySearch] = useState("");

  const handleChange = (e) => {
    setQuerySearch(e.target.value);
  };

  const handleClearSearch = () => {
    setQuerySearch("");
  };

  return (
    <div className="sticky top-0 left-0 w-full bg-slate-300 z-50 p-1 shadow-gray-400 shadow-lg">
      <div className="container mx-auto flex xs:justify-between items-center relative">
        <CgMenuGridR className="size-10 mr-10 cursor-pointer" />
        <Link to="/" className="text-lg font-bold">
          <img src={logo} className="size-20 rounded-full" />
        </Link>
        <div className="flex-grow relative">
          <SearchBar
            value={querySearch}
            onChange={handleChange}
            onClearSearch={handleClearSearch}
            // handleSearch={handleClick}
          />
        </div>
        <ProfileInfo />
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
