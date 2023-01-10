"use client";
import Link from "next/link";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import logo from "../public/images/logo.png";
import iconClose from "../public/images/icon-close.svg";
import iconHamburger from "../public/images/icon-hamburger.svg";
import Image from "next/image";

const Nav = () => {
  let [open, setopen] = useState(false);
  const menus = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/posts" },
    { label: "About", path: "/about" },
  ];
  return (
    <nav className="flex items-center justify-between pt-5  ">
      <Image
        src={open ? iconClose : iconHamburger}
        className="md:hidden  fixed right-5 cursor-pointer z-20 top-9  bg-gray-100 dark:bg-gray-800"
        alt="icon"
        onClick={() => setopen(!open)}
      />
      <div className=" relative h-10 w-10  overflow-hidden object-cover rounded-lg grayscale-60  ">
        <Link href="/">
          <Image
            src={logo}
            fill
            priority={true}
            alt="logo"
            sizes="(min-width: 60em) 4vw,
                    (min-width: 28em) 6vw,
                    10vw"
          />
        </Link>
      </div>
      <div className="flex">
        <div className="nav-list">
          <ul
            className={` backdrop-blur-md bg-[#ffffff14] dark:bg-[#111010c0] sm:dark:bg-gray-800 md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${
              !open ? "right-[-100%] " : "right-0"
            }`}
          >
            {menus.map((menu, index) => (
              <li
                key={index}
                className="md:inline-block mt-4 md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent  hover:border-white duration-300"
              >
                <Link
                  href={menu.path}
                  className="text-black dark:text-white cursor-pointer font-Barlow font-bold text-md inline-block md:py-5 py-3"
                >
                  <span className="font-bold mr-1.5">{/*index*/}</span>{" "}
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-2 px-1 pr-14 pt-3 sm:pr-6 md:pr-0">
          <DarkModeButton />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
