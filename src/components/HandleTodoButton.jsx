import { useContext } from "react";
import { FaPlus, FaUndoAlt } from "react-icons/fa";
import { TodoContext } from "./TodoContext";

function CreateTodoButton() {
  return (
    <div
      className="todo-handle_button todo-create_button"
      onClick={(event) => console.log("Hola", event)}>
      <FaPlus />
    </div>
  );
}

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

export { CreateTodoButton, DeleteTodoButton };
