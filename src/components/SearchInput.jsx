import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResultContext } from "./ResultsContext";
import { useDebounce } from "use-debounce";

const SearchInput = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { setSearchTerm } = useResultContext();
  const [debouncedText] = useDebounce(text, 300);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchTerm(debouncedText);
        navigate("/search");
      }}
      className="flex items-center w-full gap-2">
      <input
        type="search"
        placeholder="Search anything..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 dark:border-violet-700 bg-white dark:bg-violet-900 text-gray-800 dark:text-violet-100 placeholder-gray-400 dark:placeholder-violet-400 outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 transition-all duration-200 text-sm"
      />
      <button
        type="submit"
        className="px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400 text-white font-medium text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap">
        Search
      </button>
    </form>
  );
};

export default SearchInput;