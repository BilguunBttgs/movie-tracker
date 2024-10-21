"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { ModeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SquareUser } from "lucide-react";
import { Button } from "./ui/button";

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
    <div className="w-full flex-center-col absolute top-0 z-50 bg-gradient-to-t from-transparent dark:to-[#121212] to-zinc-400">
      <div className="max-w-[1280px] w-full px-11 py-7 flex justify-between items-center">
        <div>
          {/* <Image src="/FilmFolioLogo.png" alt="FF" width={500} height={500} /> */}
          <h1 className=" text-xl font-semibold">FilmFolio</h1>
        </div>
        <div className="flex gap-5">
          {menus.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link
                className={isActive ? "font-extrabold" : ""}
                href={item.route}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-2 items-center">
          <SearchBar />
          <ModeToggle />
          <div className="flex gap-2">
            <SquareUser strokeWidth={0.5} className="w-11 h-11 text-zinc-200" />
            <Link href="/sign-in">
              <Button>Signin</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
