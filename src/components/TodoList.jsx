import { TodoItem } from "./TodoItem";
import { searchedTodos, sortedTodos } from "../assets/logic.js";

function TodoList(props) {
  const { todos, setTodos, searchValue } = props;

  const sorted = sortedTodos(todos);
  const searched = searchedTodos(sorted, searchValue);

  return (
    <ul>
      {searched != 0 ? (
        searched.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            setTodos={setTodos}
          />
        ))
      ) : (
        <p>Agrega mas tareas!</p>
      )}
    </ul>
  );
}

export { TodoList };
