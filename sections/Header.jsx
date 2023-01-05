const { default: Link } = require("next/link");
const { default: DarkModeButton } = require("../components/DarkModeButton");
import { EnvelopeIcon, MoonIcon } from "@heroicons/react/24/solid";
import logo from "../public/images/logo.png";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Header = () => {
  const navigation = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/posts" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="h-16 mb-14   items-center justify-between w-full">
      {/*<div className="flex gap-4">
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
        <ul className="flex gap-4 text-xl mt-2 font-bold text-black">
          {navigation.map((nav) => (
            <li>
              <Link
                href={nav.path}
                className="font-semibold text-white-400 dark:text-white hover:text-gray-300 "
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
       <div className="flex ">
        <DarkModeButton />
      </div>*/}
      <Navbar />
    </header>
  );
};
export default Header;
