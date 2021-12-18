import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  return (
    <>
      <div className='max-w-xl'>
        <div className=" relative hidden  mt-1 p-1 w-96  outline-none rounded-md md:flex">
          <div className="absolute  inset-y-0 flex pl-3 items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400 " />
          </div>
          <input
            className='sm:text-sm py-3 bg-gray-50 outline-none w-full pl-10 border-gray-50 focus:ring-black focus:border-black rounded-md placeholder:text-lg' type="text" placeholder="Search" />
        </div>
      </div>
    </>
  );
}

export default Search;