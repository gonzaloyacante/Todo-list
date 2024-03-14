import { FaUndoAlt } from "react-icons/fa";

import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function DeleteTodoButton() {
  const { resetListToStorage, setTodos, defaultTodos } =
    useContext(TodoContext);
  return (
    <div
      className="todo-handle_button todo-delete_button"
      onClick={() => {
        resetListToStorage();
        setTodos(defaultTodos);
      }}>
      <FaUndoAlt />
    </div>
  );
}

export { DeleteTodoButton };
