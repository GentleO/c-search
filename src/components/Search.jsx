import React from "react";
import Links from "./Links";
import SearchInput from "./SearchInput";

const Search = () => {
  return (
    <div className="w-full flex flex-col gap-3 py-3">
      <SearchInput />
      <Links />
    </div>
  );
};

export default Search;
