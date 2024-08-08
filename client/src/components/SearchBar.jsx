import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange, onClearSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchClick = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    onClearSearch();
  };

  return (
    <div className="">
      <div className="flex my-3 justify-center">
        <FaSearch
          className="xs:mt-3 -mr-8 size-7 text-gray-400 xs:size-5 cursor-pointer opacity-30 xs:pointer-events-none "
          onClick={searchClick}
        />
        {isSearchOpen && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-opacity-50 xs:hidden"
            onClick={closeSearch}
          >
            <div
              className="w-full p-4 bg-white rounded-md shadow-lg transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <label htmlFor="search">
                <input
                  type="text"
                  id="search"
                  name="search"
                  value={value}
                  onChange={onChange}
                  className="w-full relative  border-2 border-blue-300 pr-10 py-2 rounded outline-none text-gray-400"
                  placeholder="Search for products...."
                />
                {value && (
                  <IoIosCloseCircle
                    className="absolute size-6 cursor-pointer text-blue-500 right-6 top-6"
                    onClick={onClearSearch}
                  />
                )}
              </label>
            </div>
          </div>
        )}
        <input
          type="text"
          name="search"
          value={value}
          onChange={onChange}
          className="border-2 border-blue-300 py-2 rounded w-1/2 pl-8 pr-10 outline-none text-gray-400 hidden xs:block bg-slate-800"
          placeholder="Search for products...."
        />
        {value && (
          <IoIosCloseCircle
            className="mt-2 -ml-8 size-6 cursor-pointer text-blue-500"
            onClick={onClearSearch}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
