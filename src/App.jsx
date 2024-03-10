import { useContext } from "react";

import "./scss/App.scss";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { Modal } from "./components/Modal";

import {
  CreateTodoButton,
  DeleteTodoButton,
} from "./components/HandleTodoButton.jsx";

import { TodoContext } from "./components/TodoContext.jsx";

function App() {
  const { openModal } = useContext(TodoContext);

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

      {openModal && <Modal></Modal>}
    </>
  );
}

export default App;
