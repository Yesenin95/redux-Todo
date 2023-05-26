export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS';
export const SET_TODOS = 'SET_TODOS';

export const addTodo = (text) => ({
   type: ADD_TODO,
   payload: { text }
});

export const deleteTodo = (id) => ({
   type: DELETE_TODO,
   payload: { id }
});

export const toggleTodo = (id) => ({
   type: TOGGLE_TODO,
   payload: { id }
});

export const removeAllTodos = () => ({
   type: REMOVE_ALL_TODOS
});

export const setTodos = (todos) => ({
   type: SET_TODOS,
   payload: { todos }
});
