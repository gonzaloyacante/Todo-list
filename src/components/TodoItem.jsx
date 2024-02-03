import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

function TodoItem(props) {
  const { text, completed, setTodos } = props;

  const handleCompleteTask = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.text === text) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDeleteTask = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.text !== text));
  };

  return (
    <li className={`container-item ${completed ? "completed" : ""}`}>
      <span className="item-icon_check" onClick={handleCompleteTask}>
        {completed ? <AiOutlineCheck className="item-icon" /> : ""}
      </span>
      <p className="item-text">{text}</p>
      <AiOutlineClose
        onClick={handleDeleteTask}
        className="item-icon_close item-icon"
      />
    </li>
  );
}

export { TodoItem };
