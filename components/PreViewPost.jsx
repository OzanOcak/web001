<section class="flex items-center py-16 bg-gray-100 lg:py-20 font-poppins dark:bg-gray-800 ">
  <div class="justify-center flex-1 max-w-3xl px-4 py-4 mx-auto text-left lg:py-10 ">
    <div class="mb-10 text-center">
      <span class="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
        Our blog
      </span>
      <h1 class="text-3xl font-bold capitalize dark:text-white"> Blog List</h1>
    </div>
    <div class="p-4 mb-6 rounded-md bg-gray-50 dark:bg-gray-900">
      <div class="flex items-center justify-between">
        <a
          href="#"
          class="inline-block mb-2 text-xs font-semibold text-blue-500 uppercase hover:text-blue-600 dark:text-gray-400"
        >
          Microsoft
        </a>
        <span class="mb-2 text-xs text-gray-500 dark:text-gray-400">
          10 days ago
        </span>
      </div>
      <h2 class="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
        Product Designer{" "}
      </h2>
      <div class="flex flex-wrap items-center mb-4 ">
        <a
          href="#"
          class="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="w-4 h-4 mr-1 bi bi-folder"
            viewBox="0 0 16 16"
          >
            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
          </svg>
          $10,000 /year
        </a>
        <a
          href="#"
          class="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="w-4 h-4 mr-1 bi bi-calendar"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          Part time
        </a>
        <a
          href="#"
          class="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="w-4 h-4 mr-1 bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          Kathmandu
        </a>
      </div>
      <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <div class="flex flex-wrap items-center ">
        <a
          href="#"
          class="flex items-center px-4 py-2 mb-2 mr-4 text-sm text-gray-100 bg-blue-500 rounded-md md:mb-0 hover:bg-blue-600 dark:text-gray-100 dark:hover:bg-blue-500 dark:bg-blue-400"
        >
          Suggest
        </a>
        <span class="flex items-center text-sm text-gray-400 md:ml-auto dark:text-gray-400 ">
          Suggest reward: <span class="ml-2"> 500 USD</span>
        </span>
      </div>
    </div>
  </div>
</section>;

<ul className="flex flex-col text-sm items-center text-balck mt-5 dark:text-white">
  {filteredInputs?.map((user) => (
    <li key={user.slug} className="space-y-4">
      <Link href={`/posts/${user.slug}`}>{user.title}</Link>
    </li>
  ))}
</ul>;
