import React from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <Logo size="text-[65px]" />
      <SearchBar />
    </div>
  );
};

export default Header;
