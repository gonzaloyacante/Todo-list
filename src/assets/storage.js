export const saveListToStorage = (todos) => {
  window.localStorage.setItem("TODOS_V1", JSON.stringify(todos));
};
export const resetListToStorage = () => {
  window.localStorage.removeItem("TODOS_V1");
};

export const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Comprar tomate", completed: false },
  { text: "Pasear al perro", completed: true },
  { text: "Saltar", completed: false },
];
