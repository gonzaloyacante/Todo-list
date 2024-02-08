export const sortedTodos = (todos) => {
  return [...todos].sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    return 0;
  });
};

export const searchedTodos = (sortedTodos, searchValue) => {
  return sortedTodos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export const handleCompleteTask = (text, setTodos) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    })
  );
};

export const handleDeleteTask = (event, text, setTodos) => {
  const element = event.currentTarget.parentElement;
  element.classList.add("animate__animated", "animate__bounceOutRight");
  setTimeout(() => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.text !== text));
  }, 500); // Ajusta este tiempo según la duración de tu animación
};
