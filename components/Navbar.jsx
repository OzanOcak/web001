"use client";

import { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import Link from "next/link";
import logo from "../public/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu((toggleMenu) => (toggleMenu = !toggleMenu));
  };

  const navigation = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/posts" },
    { label: "About", path: "/about" },
  ];

  return (
    <nav class="bg-transparent z-101">
      <div className=" justify-between">
        <div className="px-4 py-2 text-black dark:text-white flex  justify-between ">
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
          <div
            className={
              toggleMenu
                ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
                : "hidden md:flex"
            }
            id="menu"
          >
            <div className="p-2 px-1 order-1 sm:order-last ">
              <DarkModeButton />
            </div>

            <ul className=" pt-2 mb-10">
              {navigation.map((nav) => (
                <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative">
                  <Link href={nav.path}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="cursor-pointer md:hidden bg-black h-8 w-8 ">
            <input className="menu-btn hidden " type="checkbox" id="menu-btn" />
            <label
              className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
              htmlFor="menu-btn"
            >
              <span
                onClick={handleToggle}
                className="navicon   flex items-center relative"
              ></span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
