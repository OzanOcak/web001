const CGB = () => {
  return (
    <div className=" flex  flex-col items-center justify-center px-1 sm:px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute -top-6 -left-6 w-72 h-72 bg-red-400 rounded-full sm:mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute -top-4 -right-0 w-72 h-72 bg-green-300 rounded-full sm:mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 z-2"></div>
        <div className="absolute top-12 left-12 w-72 h-72 bg-blue-400 rounded-full sm:mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 z-1"></div>
        <div className="m-8 relative space-y-4">
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 z-30">
            <div className="flex-1">
              <div className="h-6 w-48 bg-gray-300 rounded font-bold px-2 dark:text-blue-700 z-20"></div>
            </div>
            <div>
              <div className="w-6 sm:w-24 h-6 rounded-lg bg-blue-300"></div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-6 w-40 bg-gray-300 rounded font-bold px-2 dark:text-green-700 z-30"></div>
            </div>
            <div>
              <div className="w-6 sm:w-20 h-6 rounded-lg bg-green-300 "></div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-6 w-44 bg-gray-300 rounded font-bold px-2 dark:text-red-700 z-30"></div>
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
