function TodoCounter({ total, completed }) {
  return (
    <>
      <h1>Todo List</h1>

      {total === 0 && (
        <h2 className="animate__animated animate__fadeIn">No hay tareas</h2>
      )}
      {completed === total && total !== 0 && (
        <h2 className="animate__animated animate__fadeIn">
          Completaste todas las tareas!
        </h2>
      )}
      {completed !== total && (
        <h2 className="animate__animated animate__fadeIn">
          <span>{completed}</span> de <span>{total}</span>
        </h2>
      )}
    </>
  );
}

export { TodoCounter };
