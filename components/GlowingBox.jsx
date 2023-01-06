const GlowingBox = () => {
  return (
    <div class="px-0  sm:px-2 py-8 w-[26rem]">
      <div class="grid gap-8 items-start justify-start">
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button class="relative px-2 py-6 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span class="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-pink-600 -rotate-6"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </span>
            <span class="pl-6 text-blue-400 group-hover:text-gray-100 transition duration-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              doloribus sint sequi aut ex quas hic, magni modi fuga quo, quidem
              ipsum tenetur non cupiditate illo, repudiandae ea omnis
              perspiciatis!&rarr; Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Debitis doloribus sint sequi aut ex quas hic,
              magni modi fuga quo, quidem ipsum tenetur non cupiditate illo,
              repudiandae ea omnis perspiciatis
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default GlowingBox;
