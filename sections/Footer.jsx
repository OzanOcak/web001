import Link from "next/link";
import Button from "../components/Button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiMicrodotblog, SiCodesandbox } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm ">
      <div className="footer-2 bg-white-100 pt-6 md:pt-12">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12 ">
            <ul className="flex justify-center w-full mt-2 mb-10 gap-x-[2rem]">
              <li className="text-3xl ">
                <a href="https://www.github.com/ozanocak">
                  <BsGithub />
                </a>
              </li>
              <li className="text-3xl ">
                <a href="https://www.linkedin.com/in/ozanocak/">
                  <BsLinkedin />
                </a>
              </li>
              <li className="text-3xl ">
                <a href="https://ozanocak.github.io/">
                  <SiMicrodotblog />
                </a>
              </li>
              <li className="text-3xl ">
                <a href="https://codesandbox.io/u/OzanOcak">
                  <SiCodesandbox />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-solid border-gray-900 dark:border-white py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center md:text-left">
                <p className="text-black dark:text-white">
                  2023 &copy; <strong>OZNOCK</strong>
                </p>
              </div>
              <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#"
                  className="py-2 px-4 text-black dark:text-white inline-block hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="py-2 px-4 text-black dark:text-white inline-block hover:underline"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
