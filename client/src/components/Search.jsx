import React from "react";
import { IoIosSearch, IoIosCloseCircle } from "react-icons/io";

const Search = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="relative flex my-3 justify-center">
      <IoIosSearch className="mt-2 -mr-8 z-10 size-6 cursor-pointer opacity-60" />
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-blue-300 py-2 rounded w-1/2 pl-8 pr-10 text-gray-400"
        placeholder="Search.."
      />
      {search && (
        <IoIosCloseCircle
          className="mt-2 -ml-8 size-6 cursor-pointer text-blue-500"
          onClick={() => setSearch("")}
        />
      )}
    </div>
  );
};

export default Search;
