import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex ml-10 mr-10 mt-5 header-container">
      <h1 className="text-gray-700 cursor-pointer">KONA SOFTWARE</h1>
      <div>
        <nav className="flex gap-7">
          <Link className="text-gray-700" to="/home">
            Home
          </Link>
          <Link className="text-gray-700" to="/create">
            Create
          </Link>
          <Link className="text-gray-700" to="/edit">
            Edit
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
