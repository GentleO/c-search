import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <nav className="sticky top-0 z-10 w-full bg-gray-50 dark:bg-violet-950 border-b border-gray-200 dark:border-violet-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <h1 className="font-bold text-xl text-violet-700 dark:text-violet-200 tracking-tight">
              C-Search
            </h1>
          </Link>
          <button
            onClick={() => setDarkTheme(!darkTheme)}
            className="p-2 rounded-full text-sm font-medium bg-violet-100 dark:bg-violet-800 text-violet-700 dark:text-violet-200 hover:bg-violet-200 dark:hover:bg-violet-700 transition-colors duration-200 cursor-pointer">
            {darkTheme ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;