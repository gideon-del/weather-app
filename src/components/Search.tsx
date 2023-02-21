import {
  LegacyRef,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { loadSearch } from "../store/apiCalls";
import useStore from "../store/store";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const store = useStore();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;
    if (inputRef.current?.value.trim() === "") return;
    store.toggleIsLoading(true);
    await loadSearch(
      inputRef.current?.value.trim()!,
      store.loadCurrentLocation
    );
    store.toggleIsLoading(false);
    inputRef.current.value = "";
  };
  return (
    <form className="max-w-xl w-full mx-auto flex px-5" onSubmit={handleSubmit}>
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
