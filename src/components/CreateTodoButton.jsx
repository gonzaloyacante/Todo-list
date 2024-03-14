import { FaPlus } from "react-icons/fa";

function CreateTodoButton() {
  return (
    <div
      className="todo-handle_button todo-create_button"
      onClick={(event) => console.log("Hola", event)}>
      <FaPlus />
    </div>
  );
}

export { CreateTodoButton };
