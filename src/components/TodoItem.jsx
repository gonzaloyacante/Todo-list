import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { handleCompleteTask, handleDeleteTask } from "../assets/logic";

function TodoItem(props) {
  const { text, completed, setTodos } = props;

  return (
    <li className={`container-item ${completed ? "completed" : ""}`}>
      <span
        className="item-icon_check"
        onClick={() => handleCompleteTask(text, setTodos)}>
        {completed ? <AiOutlineCheck className="item-icon" /> : ""}
      </span>
      <p className="item-text">{text}</p>
      <AiOutlineClose
        onClick={() => handleDeleteTask(text, setTodos)}
        className="item-icon_close item-icon"
      />
    </li>
  );
}

export { TodoItem };
