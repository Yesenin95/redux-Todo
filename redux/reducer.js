import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, REMOVE_ALL_TODOS, SET_TODOS } from './actions';

const initialState = {
   todos: []
};

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case ADD_TODO:
         return {
            ...state,
            todos: [
               ...state.todos,
               { id: Date.now(), text: action.payload.text, completed: false }
            ]
         };

      case DELETE_TODO:
         return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload.id)
         };

      case TOGGLE_TODO:
         return {
            ...state,
            todos: state.todos.map(todo =>
               todo.id === action.payload.id
                  ? { ...todo, completed: !todo.completed }
                  : todo
            )
         };

      case REMOVE_ALL_TODOS:
         return {
            ...state,
            todos: []
         };

      case SET_TODOS:
         return {
            ...state,
            todos: action.payload.todos
         };

      default:
         return state;
   }
}
