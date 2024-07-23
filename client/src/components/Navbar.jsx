import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfileInfo from "./ProfileInfo";
import Date from "./cards/CurrentDate";
import Cart from "./cards/Cart";
import { RxDropdownMenu } from "react-icons/rx";
import { Im500Px } from "react-icons/im";

const Navbar = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [isMenu, setIsMenu] = useState(false);

  const handleChange = (e) => {
    setQuerySearch(e.target.value);
  };

  const handleClearSearch = () => {
    setQuerySearch("");
  };

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="sticky top-0 left-0 w-full bg-gray-300 z-50 p-1 shadow-gray-400 shadow-lg">
      <div className="container mx-auto flex flex-col xs:justify-between items-center relative">
        <div className="flex w-full items-center justify-between">
          <RxDropdownMenu
            className="size-10 mr-10 bg-gray-400 p-1 rounded hover:bg-gray-500 cursor-pointer"
            title="Menu"
            onClick={handleMenu}
          />

          <Link to="/dashbord" className=" font-bold ">
            <Im500Px className="size-10 -rotate-45 shadow-xl shadow-gray-500 p-1 cursor-pointer" />
            d.s.n
          </Link>
          <div className="flex flex-grow xs:flex-row">
            <div className="flex-grow relative">
              <SearchBar
                value={querySearch}
                onChange={handleChange}
                onClearSearch={handleClearSearch}
              />
            </div>
          </div>
          <ProfileInfo />
          <Cart />
        </div>
        <div
          className={`w-full bg-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenu ? "max-h-20" : "max-h-0"
          }`}
        >
          <div className="flex justify-center">
            <div className="flex justify-center items-center py-2 bg-gray-400 rounded-full">
              <Link
                to="/dashboard"
                className="text-white text-sm font-semibold bg-gray-600 hover:bg-gray-500  rounded-full py-2 px-2 mx-2"
              >
                Dashboard
              </Link>
              <Link
                to="/categories"
                className="text-white text-sm font-semibold bg-gray-600 hover:bg-gray-500  rounded-full py-2 px-2 mr-2 "
              >
                Categories
              </Link>
              <Link
                to="/account"
                className="text-white text-sm font-semibold bg-gray-600 hover:bg-gray-500  rounded-full py-2 px-2 mr-2"
              >
                Account
              </Link>
              <Link
                to="/contact-us"
                className="text-white text-sm font-semibold bg-gray-600 hover:bg-gray-500  rounded-full py-2 px-2 mr-2"
              >
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
