export const sortedTodos = (todos, sortBy) => {
  return [...todos].sort((a, b) => {
    switch (sortBy) {
      case "dateRecent":
        return new Date(b.createDate) - new Date(a.createDate);
      case "dateOld":
        return new Date(a.createDate) - new Date(b.createDate);
      case "alphabeticalAZ":
        return a.text.localeCompare(b.text);
      case "alphabeticalZA":
        return b.text.localeCompare(a.text);
      case "completedFirst":
        return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
      case "completedLast":
        return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
      default:
        return 0;
    }
  });
};

export const searchedTodos = (sortedTodos, searchValue) => {
  return sortedTodos.filter(
    (todo) =>
      todo.text && todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export const handleCompleteTask = (text, todos) => {
  return todos.map((todo) => {
    if (todo.text === text) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
};

export const handleDeleteTask = (event, text, updateTodos) => {
  const element = event.currentTarget.parentElement;
  element.classList.add("animate__animated", "animate__bounceOutRight");
  setTimeout(() => {
    updateTodos((prevTodos) => prevTodos.filter((todo) => todo.text !== text));
  }, 500);
};

export const formatTodoDate = (date) => {
  if (!date || isNaN(new Date(date))) {
    return "";
  }

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Intl.DateTimeFormat("es-ES", options).format(new Date(date));
};
export const handleSubmitTodoForm = (formData, todos) => {
  const newTodo = {
    text: formData.text,
    createDate: new Date(),
    endDate: new Date(formData.endDate),
    completed: false,
  };

  const newTodos = [...todos, newTodo];

  return newTodos;
};
