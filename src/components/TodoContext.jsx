import { useState, useEffect, createContext } from "react";

import {
  saveListToStorage,
  resetListToStorage,
  defaultTodos,
} from "../assets/storage.js";

import { formatTodoDate } from "../assets/logic.js";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        try {
          const todosFromStorage = window.localStorage.getItem("TODOS_V1");
          const loadedTodos =
            todosFromStorage !== null && todosFromStorage !== "undefined"
              ? JSON.parse(todosFromStorage)
              : defaultTodos;
          setTodos(loadedTodos);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      }, 2000);
    };

    fetchData();
  }, []);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  useEffect(() => {
    if (!isLoading) {
      console.log(todos, "Save");
      saveListToStorage(todos);
    }
  }, [todos, isLoading]);

  return (
    <TodoContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        todos,
        setTodos,
        searchValue,
        setSearchValue,
        totalTodos,
        completedTodos,
        defaultTodos,
        saveListToStorage,
        resetListToStorage,
        openModal,
        setOpenModal,
        formatTodoDate,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
