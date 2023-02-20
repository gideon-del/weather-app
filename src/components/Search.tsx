import { LegacyRef, useRef } from "react";

const Search = () => {
  const inputRef = useRef() as LegacyRef<HTMLInputElement>;

  return (
    <form className="max-w-xl w-full mx-auto flex px-5">
      <input
        type="text"
        ref={inputRef}
        placeholder="Search by city or country eg. London"
        className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:p-3  transition-all duration-300"
      />
      <button className="-ml-7">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Search;
