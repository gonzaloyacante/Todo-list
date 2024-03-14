export const saveListToStorage = (todos) => {
  window.localStorage.setItem("TODOS_V1", JSON.stringify(todos));
};
export const resetListToStorage = () => {
  window.localStorage.removeItem("TODOS_V1");
};

export const defaultTodos = [
  {
    text: "Cortar cebolla",
    createDate: new Date("2024-03-04T12:00"),
    endDate: new Date("2024-03-04T19:00"),
    completed: true,
  },
  {
    text: "Comprar tomate",
    createDate: new Date("2024-03-05T13:00"),
    endDate: new Date("2024-03-10T14:00"),
    completed: false,
  },
  {
    text: "Pasear al perro",
    createDate: new Date("2024-03-06T17:00"),
    endDate: new Date("2024-03-08T11:00"),
    completed: true,
  },
  {
    text: "Saltar",
    createDate: new Date("2024-03-01T10:00"),
    endDate: new Date("2024-03-04T15:00"),
    completed: false,
  },
];
