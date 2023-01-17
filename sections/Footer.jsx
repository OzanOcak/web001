import Link from "next/link";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm ">
      <div className="footer-2 bg-white-100 pt-6 md:pt-12">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
            <div className="footer-info lg:w-1/3 md:px-4">
              <h4 className="text-black dark:text-white text-2xl mb-4">
                This website use google analytics
              </h4>
              <p className="text-gray-400">Code&Code</p>
              <div className="mt-4">
                <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                  <span className="fab fa-facebook-f mr-2"></span> Follow
                </button>
                <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                  <span className="fab fa-twitter mr-2"></span> Follow @oznock
                </button>
              </div>
            </div>

            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-base font-medium text-black dark:text-white  uppercase mb-2">
                    Site
                  </h6>
                  <div>
                    <a
                      href="/"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Home
                    </a>
                    <a
                      href="/posts"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Blog
                    </a>
                    <a
                      href="/about"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      About
                    </a>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0">
                  <h6 className="text-base font-medium text-black dark:text-white  uppercase mb-2">
                    Social
                  </h6>
                  <div>
                    <a
                      href="https://github.com/OzanOcak"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Github
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
              <h5 className="text-lg text-white font-medium mb-4">
                Explore my site
              </h5>
              <Link href="/" scroll={false}>
                <Button className="bg-blue-600 text-white px-6  mt-4 md:mt-8">
                  Explore
                </Button>
              </Link>
            </div>
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
