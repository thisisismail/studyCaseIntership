import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "../services/data/data.js";
import Logo from "./Logo.js";
import { useUser } from "../context/user.js";
import DropDownUser from "./DropDownUser.js";
import DropDownMenu from "./DropDownMenu.js";

const NavBar = () => {
  const router = useRouter();
  const user = useUser();
  const { uid } = user;

  const links = navLinks.map((item, index) => {
    if (uid && item.name === "Masuk") {
      return (
        <div key={index} className="w-14 truncate">
          <DropDownUser />
        </div>
      );
    }
    return (
      <Link key={index} href={item.path}>
        <a
          className={`${
            router.pathname === item.path ? "text-indigo-900" : "text-white"
          }`}
        >
          {item.name}
        </a>
      </Link>
    );
  });

  return (
    <header className="fixed w-full z-50 top-0 h-16 border-0 flex justify-between items-center px-4 md:px-8 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-sm">
      <div className="relative z-50 border-0 h-full text-center flex items-center">
        <Link href="/" className="block w-full h-full">
          <a className="grid w-full border-0 h-full text-center content-center">
            <Logo />
          </a>
        </Link>
      </div>
      <div className="block md:hidden">
        <DropDownMenu />
      </div>
      <div className="border-0 gap-8 hidden md:flex">{links}</div>
    </header>
  );
};

export default NavBar;
