export const saveListToStorage = (todos) => {
  window.localStorage.setItem("TODOS_V1", JSON.stringify(todos));
};
export const resetListToStorage = () => {
  window.localStorage.removeItem("TODOS_V1");
};

export const defaultTodos = [
  {
    text: "Cortar cebolla",
    date: new Date("2024-03-04T12:00:00Z"),
    completed: true,
  },
  {
    text: "Comprar tomate",
    date: new Date("2024-03-05T12:00:00Z"),
    completed: false,
  },
  {
    text: "Pasear al perro",
    date: new Date("2024-03-06T12:00:00Z"),
    completed: true,
  },
  { text: "Saltar", date: new Date("2024-03-01T12:00:00Z"), completed: false },
  {
    text: "Cortar cebollas",
    date: new Date("2024-03-04T12:00:00Z"),
    completed: true,
  },
  {
    text: "Comprar tomates",
    date: new Date("2024-03-05T12:00:00Z"),
    completed: false,
  },
  {
    text: "Pasear al perros",
    date: new Date("2024-03-06T12:00:00Z"),
    completed: true,
  },
  { text: "Saltars", date: new Date("2024-03-01T12:00:00Z"), completed: false },
];
