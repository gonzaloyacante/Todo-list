import { TodoItem } from "./TodoItem";
import { searchedTodos, sortedTodos } from "../assets/logic.js";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function TodoList(props) {
  const { todos, setTodos, searchValue, isLoading, error } = props;

  const sorted = sortedTodos(todos);
  const searched = searchedTodos(sorted, searchValue);

  return (
    <ul className="animate__animated animate__fadeIn">
      {isLoading && (
        <Skeleton
          count={5}
          highlightColor="#00d154"
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
