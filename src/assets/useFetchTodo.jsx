import { useState, useEffect } from "react";
import {
  saveListToStorage,
  defaultTodos,
} from "./storage.js";

export function useFetchTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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

  return { todos, isLoading, error };
}

export function useSaveTodos(todos, isLoading) {
  useEffect(() => {
    if (!isLoading) {
      console.log(todos, "Save");
      saveListToStorage(todos);
    }
  }, [todos, isLoading]);
}
