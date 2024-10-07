import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input className="bg-[#D9D9D9]" placeholder="Search a movie..." />
    </div>
  );
};

export default SearchBar;
