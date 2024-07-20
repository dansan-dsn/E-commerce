import React, { useState } from "react";
import { IoIosSearch, IoIosCloseCircle } from "react-icons/io";

const SearchBar = ({ value, onChange, onClearSearch, handleSearch, style }) => {
  return (
    <div className="">
      <div className="flex my-3 justify-center">
        <IoIosSearch
          className="mt-2 -mr-8 size-10 xs:size-6 cursor-pointer opacity-60 xs:pointer-events-none "
          onClick={handleSearch}
        />
        <input
          type="text"
          name="search"
          value={value}
          onChange={onChange}
          className="border-2 border-blue-300 py-2 rounded w-1/2 pl-8 pr-10 outline-none text-gray-400 hidden xs:block"
          placeholder="Search.."
          style={style}
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
