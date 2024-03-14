import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos, isLoading } = useContext(TodoContext);

  return (
    <h2 className="animate__animated animate__fadeIn">
      {isLoading ? (
        "Cargando..."
      ) : (
        <>
          {totalTodos === 0 && "No hay tareas"}
          {completedTodos === totalTodos && totalTodos !== 0 && (
            <span className="animate__animated animate__fadeIn">
              Todo esta completo!
            </span>
          )}
          {completedTodos !== totalTodos && (
            <span className="animate__animated animate__fadeIn">
              {completedTodos} de {totalTodos}
            </span>
          )}
        </>
      )}
    </h2>
  );
}

export { TodoCounter };
