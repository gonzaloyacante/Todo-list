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
  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false); // Nuevo estado

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        try {
          const todosFromStorage = window.localStorage.getItem("TODOS_V1");
          const loadedTodos =
            todosFromStorage !== null && todosFromStorage !== "undefined"
              ? JSON.parse(todosFromStorage)
              : defaultTodos;
          console.log(loadedTodos, todosFromStorage, "storage");
          setTodos(loadedTodos);
          setIsLocalStorageLoaded(true);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      }, 3000);
    };

    fetchData();
  }, []);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  useEffect(() => {
    if (isLocalStorageLoaded) {
      // Solo guardar en el almacenamiento local cuando los datos han sido cargados
      console.log(todos, "Save");
      saveListToStorage(todos);
    }
  }, [todos, isLocalStorageLoaded]);
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
      <footer>
        <CreateTodoButton />
        <DeleteTodoButton
          resetListToStorage={resetListToStorage}
          setTodos={setTodos}
          defaultTodos={defaultTodos}
        />
      </footer>
    </>
  );
}

export default App;
