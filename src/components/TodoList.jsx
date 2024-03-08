import { useContext } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { TodoContext } from "./TodoContext.jsx";
import { TodoItem } from "./TodoItem";
import { searchedTodos, sortedTodos } from "../assets/logic.js";

function TodoList() {
  const { searchValue, todos, setTodos, isLoading, error } =
    useContext(TodoContext);

  const sorted = sortedTodos(todos);
  const searched = searchedTodos(sorted, searchValue);

  return (
    <ul className="container-list animate__animated animate__fadeIn">
      {isLoading && (
        <Skeleton
          count={5}
          highlightColor="#1d1d20"
          baseColor="#242727"
          height="5rem"
          borderRadius="1rem"
        />
      )}
      {error && <h2>Error</h2>}
      {searched == 0 && !isLoading && (
        <h2 className="animate__animated animate__fadeIn">
          Crea tu primer tarea!
        </h2>
      )}
      {searched !== 0 &&
        searched.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            setTodos={setTodos}
          />
        ))}
    </ul>
  );
}

export { TodoList };
