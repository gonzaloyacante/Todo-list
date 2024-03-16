import { useContext } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoSortButton } from "./components/TodoSortButton.jsx";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton.jsx";
import { DeleteTodoButton } from "./components/DeleteTodoButton.jsx";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm.jsx";
import { TodoContext } from "./components/TodoContext.jsx";

function App() {
  const { isOpenModal, setIsOpenModal, sortBy, setSortBy, todos, setTodos } =
    useContext(TodoContext);

  return (
    <>
      <header>
        <TodoCounter />
        <TodoSearch />
        <TodoSortButton sortBy={sortBy} setSortBy={setSortBy} />
      </header>
      <main>
        <TodoList />
      </main>
      <CreateTodoButton
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <DeleteTodoButton />

      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <TodoForm
            setIsOpenModal={setIsOpenModal}
            todos={todos}
            setTodos={setTodos}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
