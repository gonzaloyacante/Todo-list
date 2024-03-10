import { useContext } from "react";

import { FaSearch } from "react-icons/fa";
import { TodoContext } from "./TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <>
      <label className="todo-search_label" htmlFor="todo-search">
        <FaSearch className="todo-search-icon" />
        <input
          id="todo-search"
          className="todo-search_input"
          type="text"
          placeholder="Cortar cebolla"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
            console.log("Search: " + searchValue);
          }}
        />
      </label>
    </>
  );
}
export { TodoSearch };
