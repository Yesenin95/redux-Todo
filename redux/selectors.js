
export const getTodos = (store) => store.todos;

export const getCompletedTodos = (store) => store.todos.filter(todo => todo.completed);

export const getIncompleteTodos = (store) => store.todos.filter(todo => !todo.completed);

export const getAllTodos = store => store.todos;