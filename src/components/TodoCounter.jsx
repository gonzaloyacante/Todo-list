import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <>
      {totalTodos === 0 && (
        <h2 className="animate__animated animate__fadeIn">No hay tareas</h2>
      )}
      {completedTodos === totalTodos && totalTodos !== 0 && (
        <h2 className="animate__animated animate__fadeIn">
          Todo esta completo!
        </h2>
      )}
      {completedTodos !== totalTodos && (
        <h2 className="animate__animated animate__fadeIn">
          <span>{completedTodos}</span> de <span>{totalTodos}</span>
        </h2>
      )}
    </>
  );
}

export { TodoCounter };
