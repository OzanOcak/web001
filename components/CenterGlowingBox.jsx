const CGB = () => {
  return (
    <div className="min-h-screen flex  flex-col items-center justify-center px-1 sm:px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 z-10"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 z-10"></div>
        <div className="m-8 relative space-y-4">
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 z-30">
            <div className="flex-1">
              <div className="h-6 w-48 bg-gray-300 rounded font-bold px-2 dark:text-blue-700 z-20">
                web design
              </div>
            </div>
            <div>
              <div className="w-6 sm:w-24 h-6 rounded-lg bg-blue-300"></div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-6 w-40 bg-gray-300 rounded font-bold px-2 dark:text-green-700 z-30">
                full stack
              </div>
            </div>
            <div>
              <div className="w-6 sm:w-20 h-6 rounded-lg bg-green-300 "></div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-6 w-44 bg-gray-300 rounded font-bold px-2 dark:text-red-700 z-30">
                app development
              </div>
            </div>
            <div>
              <div className="w-6 sm:w-28 h-6 rounded-lg bg-red-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CGB;
