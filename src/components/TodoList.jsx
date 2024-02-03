import { TodoItem } from "./TodoItem";

function TodoList(props) {
  const { todos, setTodos, searchValue } = props;

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    return 0;
  });

  const searchedTodos = sortedTodos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ul>
      {searchedTodos != 0 ? (
        searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            setTodos={setTodos}
          />
        ))
      ) : (
        <p>Agrega mas tareas!</p>
      )}
    </ul>
  );
}

export { TodoList };
