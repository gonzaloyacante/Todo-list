function TodoCounter({ total, completed }) {
  return (
    <>
      <h1>Todo List</h1>

      {completed !== total ? (
        <h2>
          <span>{completed}</span> de <span>{total}</span>
        </h2>
      ) : (
        <h2>Completaste todas las tareas!</h2>
      )}
    </>
  );
}

export { TodoCounter };
