import { useState } from "react";

import "./scss/App.scss";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Comprar tomate", completed: false },
  { text: "Pasear al perro", completed: true },
  { text: "Saltar", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <header>
        <TodoCounter completed={completedTodos} total={totalTodos} />
      </header>
      <main>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList searchValue={searchValue} todos={todos} setTodos={setTodos} />
      </main>
      <footer>
        <CreateTodoButton />
      </footer>
    </>
  );
}

export default App;
