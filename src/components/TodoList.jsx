import { useContext } from "react";

import { TodoContext } from "./TodoContext.jsx";
import { TodoItem } from "./TodoItem";
import { SkeletonLoader } from "./SkeletonLoader.jsx";

import { searchedTodos, sortedTodos } from "../assets/logic.js";

function TodoList() {
  const { searchValue, todos, setTodos, isLoading, error, formatTodoDate } =
    useContext(TodoContext);

  const sorted = sortedTodos(todos);
  const searched = searchedTodos(sorted, searchValue);

  return (
    <ul className="container-list animate__animated animate__fadeIn">
      {isLoading && (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
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
            date={todo.date}
            formatTodoDate={formatTodoDate}
            completed={todo.completed}
            setTodos={setTodos}
          />
        ))}
    </ul>
  );
}

export { TodoList };
