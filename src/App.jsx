import "./scss/App.scss";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";

import {
  CreateTodoButton,
  DeleteTodoButton,
} from "./components/HandleTodoButton.jsx";

function App() {
  return (
    <>
      <h1>Todo List</h1>

      <header>
        <TodoCounter />
        <TodoSearch />
      </header>
      <main>
        <TodoList />
      </main>
      <CreateTodoButton />
      <DeleteTodoButton />
    </>
  );
}

export default App;
