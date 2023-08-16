export default function loading() {
  return (
    <div className="animate-pulse m-2 pb-32">
      {/* categorylist */}
      <div className="my-1 flex flex-col justify-start content-center sm:flex-row sm:justify-between">
        <div className="flex items-center overflow-auto">
          <div className="bg-gray-200 w-32 rounded-full mr-6 h-5"></div>
          <div className="bg-gray-200 w-32 rounded-full mr-6 h-5"></div>
          <div className="bg-gray-200 w-32 rounded-full mr-6 h-5"></div>
          <div className="bg-gray-200 w-32 rounded-full mr-6 h-5"></div>
        </div>
        <div className="flex items-center justify-start mt-2 sm:mt-0">
          <svg
            className="h-4 fill-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className=" px-2 py-1 ml-1 outline-none"
          />
        </div>
      </div>
      {/* articlelist */}
      <div className="grid lg:grid-cols-2  gap-12 mt-4">
        <div className="w-full">
          <h1 className="bg-gray-200 h-4 w-2/3 rounded-md"></h1>

          <div className="flex items-center my-2">
            <div className="bg-gray-200 rounded-sm mr-2 w-7 h-7"></div>
            <span className="bg-gray-200 w-1/3 rounded-sm h-3"></span>
            <span className="ml-4 bg-gray-200 w-1/3 rounded-sm h-3"></span>
          </div>

          <div className="mt-2 bg-gray-200 h-48 rounded-xl w-full"> </div>
        </div>

        <div className="w-full">
          <h1 className="bg-gray-200 h-4 w-2/3 rounded-md"></h1>

          <div className="flex items-center my-2">
            <div className="bg-gray-200 rounded-sm mr-2 w-7 h-7"></div>
            <span className="bg-gray-200 w-1/3 rounded-sm h-3"></span>
            <span className="ml-4 bg-gray-200 w-1/3 rounded-sm h-3"></span>
          </div>

          <div className="mt-2 bg-gray-200 h-48 rounded-xl w-full"> </div>
        </div>

        <div className="w-full">
          <h1 className="bg-gray-200 h-4 w-2/3 rounded-md"></h1>

          <div className="flex items-center my-2">
            <div className="bg-gray-200 rounded-sm mr-2 w-7 h-7"></div>
            <span className="bg-gray-200 w-1/3 rounded-sm h-3"></span>
            <span className="ml-4 bg-gray-200 w-1/3 rounded-sm h-3"></span>
          </div>

          <div className="mt-2 bg-gray-200 h-48 rounded-xl w-full"> </div>
        </div>

        <div className="w-full">
          <h1 className="bg-gray-200 h-4 w-2/3 rounded-md"></h1>

          <div className="flex items-center my-2">
            <div className="bg-gray-200 rounded-sm mr-2 w-7 h-7"></div>
            <span className="bg-gray-200 w-1/3 rounded-sm h-3"></span>
            <span className="ml-4 bg-gray-200 w-1/3 rounded-sm h-3"></span>
          </div>

          <div className="mt-2 bg-gray-200 h-48 rounded-xl w-full"> </div>
        </div>
      </div>
    </div>

    // start articleList
  );
}
