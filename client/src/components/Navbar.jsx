import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { MdArrowDropDown } from "react-icons/md";
import Profile from "../components/Profile";
import Orders from "./Orders";

const Navbar = () => {
  const [querySearch, setQuerySearch] = useState("");
  let name = "d.s.n";

  return (
    <div className=" navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          d.s.n
        </Link>
      </div>
      <div>
        <Search
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
          onClearSearch={() => setQuerySearch("")}
        />
      </div>
      <div className="flex-none navbar-end">
        <Orders />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
