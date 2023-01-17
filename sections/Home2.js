import GlowingBox from "../components/GlowingBox";
import CGB from "../components/CenterGlowingBox";
const Home2 = () => {
  return (
    <div className="-mt-2 sm:-mt-[6rem] md:-mt-[18rem]">
      <ol className="relative border-l  border-green-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-green-500 rounded-full -left-3 sm:-right-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <GlowingBox
            content={{
              text: `This website is developed to write my blogs about web development
    particularly React and show the web and mobile application I have
    been/will be developing. I try to use three main color red,green
    and blue in the design of website.`,
            }}
          />
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-red-500 rounded-full -left-3 sm:-right-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <CGB />
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 sm:-right-3 ring-8 ring-white dark:ring-gray-900 dark:bg-red-900">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <GlowingBox content={{ text: "My latest Blog Posts" }} />
        </li>
      </ol>
    </div>
  );
};
export default Home2;
