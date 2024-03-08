import { useState, useEffect } from "react";

import "./scss/App.scss";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import {
  CreateTodoButton,
  DeleteTodoButton,
} from "./components/HandleTodoButton.jsx";

import {
  saveListToStorage,
  resetListToStorage,
  defaultTodos,
} from "./assets/storage.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
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

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  useEffect(() => {
    if (!isLoading) {
      console.log(todos, "Save");
      saveListToStorage(todos);
    }
  }, [todos, isLoading]);

  return (
    <>
      <header>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>
      <main>
        <TodoList
          searchValue={searchValue}
          todos={todos}
          setTodos={setTodos}
          saveListToStorage={saveListToStorage}
          isLoading={isLoading}
          error={error}
        />
      </main>
      <CreateTodoButton />
      <DeleteTodoButton
        resetListToStorage={resetListToStorage}
        setTodos={setTodos}
        defaultTodos={defaultTodos}
      />
    </>
  );
}

export default App;
