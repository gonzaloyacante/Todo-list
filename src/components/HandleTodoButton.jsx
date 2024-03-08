import { useContext } from "react";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { TodoContext } from "./TodoContext";

function CreateTodoButton() {
  return (
    <>
      <AiOutlinePlus
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
      <AiOutlineDelete
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
