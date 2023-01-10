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
      <div className="flex  items-center justify-center">
        <div className="border rounded overflow-hidden flex">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            className="px-4 py-2"
            placeholder="Search..."
          />
          <button className="flex items-center justify-center px-4 border-l ">
            <svg
              className="h-4 w-4 text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
      <ul className="flex flex-col text-sm items-center text-balck mt-5 dark:text-white">
        {filteredInputs?.map((user) => (
          <li key={user.slug} className="space-y-4">
            <Link href={`/posts/${user.slug}`}>{user.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default SearchList;
