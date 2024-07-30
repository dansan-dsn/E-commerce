import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
    <div className="sticky top-0 left-0 w-full bg-gray-900 z-50 py-3 px-1 shadow-gray-400 shadow">
      <div className="container mx-auto flex flex-col xs:justify-between items-center relative">
        <div className="flex w-full items-center justify-between">
          <RxDropdownMenu
            className="size-10 mr-10 bg-gray-400 translate duration-300 ease-in-out hover:scale-110 p-1 rounded hover:bg-gray-500 cursor-pointer"
            title="Menu"
            onClick={handleMenu}
          />

          <Link to="/dashboard" className=" font-bold ">
            <Im500Px className="size-10 -rotate-45 shadow-xl shadow-gray-500 p-1 cursor-pointer" />
            <span className="text-white">d.s.n</span>
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
          className={`w-full bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenu ? "max-h-20" : "max-h-0"
          }`}
        >
          <div className="flex justify-center md:m">
            <div className="flex justify-center md:justify-between items-center py-2 bg-gray-500 rounded-full">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `text-white text-sm font-semibold  hover:bg-gray-700  rounded-full py-2 px-2 mx-2 md:px-14 md:py-3 ${
                    isActive ? "bg-sky-700 hover:bg-sky-800" : "bg-gray-600"
                  }`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `text-white text-sm font-semibold    rounded-full py-2 px-2 mr-2 md:px-14 md:py-3 ${
                    isActive
                      ? "bg-sky-700 hover:bg-sky-800"
                      : "bg-gray-600 hover:bg-gray-700"
                  }`
                }
              >
                Categories
              </NavLink>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `text-white text-sm font-semibold  hover:bg-gray-700  rounded-full py-2 px-2 mr-2 md:px-14 md:py-3 ${
                    isActive ? "bg-sky-700 hover:bg-sky-800" : "bg-gray-600"
                  }`
                }
              >
                Account
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `text-white text-sm font-semibold  hover:bg-gray-700  rounded-full py-2 px-2 mr-2 md:px-14 md:py-3 ${
                    isActive ? "bg-sky-700 hover:bg-sky-800" : "bg-gray-600"
                  }`
                }
              >
                Help
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
