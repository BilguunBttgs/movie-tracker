"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { ModeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const menus = [
    {
      label: "Homepage",
      route: "/",
    },
    {
      label: "Watched List",
      route: "/watchedlist",
    },
    {
      label: "Played List",
      route: "/playedlist",
    },
  ];
  return (
    <div className="w-full flex-center-col bg-lightBackgroundSecondary dark:bg-darkBackgroundSecondary">
      <div className="max-w-[1280px] w-full px-11 py-7 flex justify-between items-center">
        <h1 className="text-blue-600 text-xl font-semibold">
          The Movie Tracker
        </h1>
        <div className="flex gap-5">
          {menus.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link
                className={
                  isActive ? "border-b-2 border-blue-600 text-blue-600" : ""
                }
                href={item.route}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <SearchBar />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
