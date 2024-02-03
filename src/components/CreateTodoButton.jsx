import { AiOutlinePlus } from "react-icons/ai";


function CreateTodoButton() {
  return (
    <>
      <AiOutlinePlus onClick={(event) => console.log("Hola", event)} className="todo-create_button" />
    </>
  );
}

export { CreateTodoButton };