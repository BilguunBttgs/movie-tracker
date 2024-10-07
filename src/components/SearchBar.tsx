import React from "react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <Input
      className="bg-[#D9D9D9] rounded-3xl w-[400px] h-[52px] text-center text-xl"
      placeholder="Search a movie or series"
    />
  );
};

export default SearchBar;
