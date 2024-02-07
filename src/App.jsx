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
  const [todos, setTodos] = useState(() => {
    const todosFromStorage = window.localStorage.getItem("TODOS_V1");
    return todosFromStorage && todosFromStorage !== "undefined"
      ? JSON.parse(todosFromStorage)
      : defaultTodos;
  });
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  useEffect(() => {
    console.log(todos);
    saveListToStorage(todos);
  }, [todos]);

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
