import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfileInfo from "./cards/ProfileInfo";
import Cart from "./cards/Cart";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [isShowSearch, setIsShowSearch] = useState(true);
  const [slowShow, setSlowShow] = useState(false);

  const handleChange = (e) => {
    setQuerySearch(e.target.value);
  };

  const handleClearSearch = () => {
    setQuerySearch("");
  };

  const handleClick = () => {
    setIsShowSearch(false);
    setSlowShow(true);
  };

  const hanldeClose = () => {
    setSlowShow(false);
    setIsShowSearch(true);
  };

  return (
    <div className="bg-gray-200 p-4">
      <div className="container mx-auto flex xs:justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          d.s.n
        </Link>
        <div className="flex-grow relative">
          {isShowSearch && (
            <SearchBar
              value={querySearch}
              onChange={handleChange}
              onClearSearch={handleClearSearch}
              handleSearch={handleClick}
            />
          )}
          {slowShow && (
            <div className="relative w-full px-4 py-2 ">
              <IoClose
                className="xs:hidden grid right-10 -bottom-2.5 absolute justify-center"
                onClick={hanldeClose}
              />
              <div className="overflow-hidden opacity-50 transform translate-y-0 block">
                <SearchBar
                  value={querySearch}
                  onChange={handleChange}
                  onClearSearch={handleClearSearch}
                  handleSearch={handleClick}
                />
              </div>
            </div>
          )}
        </div>
        <ProfileInfo />
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
