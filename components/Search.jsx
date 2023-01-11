"use client";

import Link from "next/link";
import { useState } from "react";

const SearchList = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredInputs = props.users?.filter((post) => {
    post = JSON.stringify(post);
    return post.toLowerCase().includes(searchValue.toLowerCase());
  });
  //console.log(props);

  return (
    <>
      <div className="flex justify-center pt-2 relative mx-auto text-gray-600 ">
        <input
          value={searchValue}
          onChange={handleInput}
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-l-lg text-sm focus:outline-none"
          placeholder="Search..."
        />
        <button className="flex items-center justify-center px-4 border-l border-2 border-gray-300 rounded-r-lg ">
          <svg
            className="h-4 w-4 text-black dark:text-white "
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>

      <div className="flex items-center py-6 lg:py-10 font-poppins">
        <div className="justify-center flex-1 max-w-3xl px-4 py-4 mx-auto text-left lg:py-10 ">
          <div className="mb-10 text-center">
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
              My blog
            </span>
            <h1 className="text-3xl font-bold capitalize dark:text-white">
              {" "}
              Post List
            </h1>
          </div>

          {filteredInputs.length !== 0 ? (
            <ul className="p-4 mb-6 rounded-md text-gray-600">
              {filteredInputs?.map((user) => (
                <li
                  key={user.slug}
                  className="bg-gray-50 dark:bg-gray-900 mb-5 p-4 rounded-2xl"
                >
                  <Link href={`/posts/${user.slug}`}>
                    <div className="flex flex-wrap items-center mb-4 ">
                      <p
                        className="flex items-center mb-2 mr-4 text-sm
                      text-gray-500 md:mb-0 hover:text-gray-700
                      dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <span className="text-red-300">{"#"}</span>
                        React
                      </p>
                    </div>
                    <div>
                      {" "}
                      <p className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
                        {user.title}{" "}
                      </p>
                      <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="flex justify-center align-center font-bold text-xl my-[10rem]">
              Sorry, no post is available
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default SearchList;
