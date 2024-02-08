import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

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

function DeleteTodoButton({ resetListToStorage, setTodos, defaultTodos }) {
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
