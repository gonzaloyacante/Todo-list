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

export const handleDeleteTask = (text, setTodos) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.text !== text));
};
