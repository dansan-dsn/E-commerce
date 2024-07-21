import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfileInfo from "./cards/ProfileInfo";
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
    <div className="bg-slate-300 p-4">
      <div className="container mx-auto flex xs:justify-between items-center">
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
