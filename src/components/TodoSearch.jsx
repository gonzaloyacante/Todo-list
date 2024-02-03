import { AiOutlineSearch } from "react-icons/ai";

function TodoSearch(props) {
  const { searchValue, setSearchValue } = props;

  return (
    <>
      <label className="todo-search_label" htmlFor="todo-search">
        <AiOutlineSearch className="todo-search-icon" />
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
