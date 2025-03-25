import { useState, useRef, useEffect } from "react";
import SearchIcon from "../../icons/SearchIcon";
import useDebounce from "../../../hooks/useDebounce";

// input search
const Input = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  const debounceSearch = useDebounce(searchTerm);
  useEffect(() => {
    if (debounceSearch) {
      console.log(debounceSearch);
    }
  }, [debounceSearch]);

  return (
    <div
      className={`rounded-md border-light-gray border w-full flex items-center justify-start p-3 transition-colors duration-300 focus-within:border-main ${props.mw}`}
    >
      <input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        ref={inputRef}
        placeholder={props.placeholder}
        className={`rounded-md flex-1 outline-none ${props.classNameInput}`}
      />
      <SearchIcon stroke="#4b5966" color="#4b5966" size="18" />
    </div>
  );
};

export default Input;
