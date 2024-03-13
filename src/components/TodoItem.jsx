import { FaCheck, FaTimes } from "react-icons/fa";
import { handleCompleteTask, handleDeleteTask } from "../assets/logic";

function TodoItem(props) {
  const { text, date, completed, setTodos, formatTodoDate } = props;

  const formattedDate = formatTodoDate(date);

  return (
    <li
      className={`item-container animate__animated animate__bounceInLeft ${
        completed && "completed"
      }`}>
      <div className="item">
        <span
          className="item-icon_check"
          onClick={() => handleCompleteTask(text, setTodos)}>
          {completed && <FaCheck className="item-icon" />}
        </span>
        <div className="item-content">
          <p className="item-text">{text}</p>
          <p className="item-date">Creado: {formattedDate}</p>
        </div>
        <FaTimes
          onClick={(event) => handleDeleteTask(event, text, setTodos)}
          className="item-icon_close item-icon"
        />
      </div>
    </li>
  );
}

export { TodoItem };
