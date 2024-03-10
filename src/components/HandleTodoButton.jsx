import { useContext } from "react";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { TodoContext } from "./TodoContext";

function CreateTodoButton() {
  return (
    <>
      <FaCheck
        onClick={(event) => console.log("Hola", event)}
        className="todo-handle_button todo-create_button"
      />
    </>
  );
}

function DeleteTodoButton() {
  const { resetListToStorage, setTodos, defaultTodos } =
    useContext(TodoContext);
  return (
    <>
      <FaRegTrashAlt
        onClick={() => {
          resetListToStorage();
          setTodos(defaultTodos);
        }}
        className="todo-handle_button todo-delete_button"
      />
    </>
  );
}

export { CreateTodoButton, DeleteTodoButton };
