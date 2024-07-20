import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfileInfo from "./cards/ProfileInfo";
import Cart from "./cards/Cart";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [querySearch, setQuerySearch] = useState("");

  const handleChange = (e) => {
    setQuerySearch(e.target.value);
  };

  const handleClearSearch = () => {
    setQuerySearch("");
  };

  return (
    <div className="bg-gray-200 p-4">
      <div className="container mx-auto flex xs:justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          d.s.n
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
