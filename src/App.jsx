import { useContext } from "react";

import "./scss/App.scss";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoSortButton } from "./components/TodoSortButton.jsx";
import { TodoList } from "./components/TodoList";
import { Modal } from "./components/Modal";

import {
  CreateTodoButton,
  DeleteTodoButton,
} from "./components/HandleTodoButton.jsx";

import { TodoContext } from "./components/TodoContext.jsx";

function App() {
  const { openModal, sortBy, setSortBy } = useContext(TodoContext);

  return (
    <>
      <h1>Todo List</h1>

      <header>
        <TodoCounter />
        <TodoSearch />
        <TodoSortButton sortBy={sortBy} setSortBy={setSortBy} />
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
