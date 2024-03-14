import { useState } from "react";
import { CustomDatePicker } from "./CustomDatePicker";

import { handleSubmitTodoForm } from "../assets/logic";

const TodoForm = ({ setIsOpenModal, setTodos }) => {
  const [todoName, setTodoName] = useState("");
  const [endDate, setEndDate] = useState(null);
  const formData = { text: todoName, endDate: endDate, completed: false };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(handleSubmitTodoForm(formData));
    setTodoName("");
    setIsOpenModal(false);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        required
      />
      <CustomDatePicker endDate={endDate} setEndDate={setEndDate} />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export { TodoForm };
