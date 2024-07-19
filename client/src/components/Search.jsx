import React from "react";
import { IoIosSearch, IoIosCloseCircle } from "react-icons/io";

const Search = ({ value, onChange, onClearSearch, handleSearch }) => {
  return (
    <div className="flex my-3 justify-center">
      <div className="flex my-3 justify-center">
        <IoIosSearch
          className="mt-2 -mr-8 z-10 size-6 cursor-pointer opacity-60"
          onClick={handleSearch}
        />
        <input
          type="text"
          name="search"
          value={value}
          onChange={onChange}
          className="border-2 border-blue-300 py-2 rounded w-30 pl-8 pr-10 text-gray-400 "
          placeholder="Search.."
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

export default Search;
