import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { handleSubmitTodoForm } from "../assets/logic";

const TodoForm = ({ setIsOpenModal, todos, setTodos }) => {
  const [todoName, setTodoName] = useState("");
  const [endDate, setEndDate] = useState(null);
  const formData = { text: todoName, endDate: endDate, completed: false };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = handleSubmitTodoForm(formData, todos);
    setTodos(newTodos);
    setTodoName("");
    setIsOpenModal(false);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form-input_container">
        <label htmlFor="input" className="todo-form-label">
          Todo:
        </label>
        <input
          type="text"
          name="input"
          className="todo-form-input"
          placeholder="Nombre de la tarea"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          required
        />
      </div>
      <div className="todo-form-input_container">
        <label htmlFor="datepicker" className="todo-form-label">
          Para el:
        </label>
        <input
          type="datetime-local"
          id="datepicker"
          value={endDate ? endDate.toISOString().slice(0, 16) : ""}
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="todo-form-input"
          placeholder="Selecciona una fecha"
        />
      </div>
      <div className="todo-form-button_container">
        <button className="todo-form-button_add" type="submit">
          Agregar Tarea
        </button>
        <span
          className="todo-form-button_cancel"
          onClick={() => setIsOpenModal(false)}>
          <FaTimes />
        </span>
      </div>
    </form>
  );
};

export { TodoForm };
