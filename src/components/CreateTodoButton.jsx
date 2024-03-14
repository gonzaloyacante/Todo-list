import { FaPlus } from "react-icons/fa";

const CreateTodoButton = ({ isOpenModal, setIsOpenModal }) => {
  return (
    <div
      className="todo-handle_button todo-create_button"
      onClick={() => setIsOpenModal(!isOpenModal)}>
      <FaPlus />
    </div>
  );
};

export { CreateTodoButton };
