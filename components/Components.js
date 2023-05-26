import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, removeAllTodos, setTodos } from '../redux/actions';
import { getTodos, getCompletedTodos, getIncompleteTodos } from '../redux/selectors';
import { useState } from 'react';

export default function Components() {
   const dispatch = useDispatch();
   const todos = useSelector(getTodos);
   const completedTodos = useSelector(getCompletedTodos);
   const incompleteTodos = useSelector(getIncompleteTodos);
   const [text, setText] = useState('');

   const handleAddTodo = (event) => {
      event.preventDefault();
      if (!text) return;
      dispatch(addTodo(text));
      setText('');
   };

   const handleToggleTodo = (id) => {
      dispatch(toggleTodo(id));
   };

   const handleDeleteTodo = (id) => {
      dispatch(deleteTodo(id));
   };

   const handleDeleteAllTodos = () => {
      dispatch(removeAllTodos());
   };

   const handleDragStart = (event, id) => {
      event.dataTransfer.setData('text/plain', id);
   };

   const handleDrop = (event, targetIndex) => {
      event.preventDefault();
      const draggedId = event.dataTransfer.getData('text/plain');
      const draggedTodo = todos.find(todo => todo.id.toString() === draggedId);
      const updatedTodos = todos.filter(todo => todo.id.toString() !== draggedId);
      updatedTodos.splice(targetIndex, 0, draggedTodo);
      dispatch(setTodos(updatedTodos));
   };

   const handleDragOver = (event) => {
      event.preventDefault();
   };

   return (
      <div className='todo-app'>
         <h1>Todo App</h1>
         <div className='todo-list'>
            <form onSubmit={handleAddTodo} className='todo-form'>
               <input
                  type="text"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  placeholder="Add a new todo..."
               />
               <button type="submit">Add</button>
            </form>
            <ul>
               {todos.map((todo, index) => (
                  <li
                     key={todo.id}
                     className='todo-item'
                     draggable={true}
                     onDragStart={(event) => handleDragStart(event, todo.id.toString())}
                     onDrop={(event) => handleDrop(event, index)}
                     onDragOver={handleDragOver}
                  >
                     <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleTodo(todo.id)}
                     />
                     <span className='text'>{todo.text}</span>
                     <button className='delete-btn' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                  </li>
               ))}
            </ul>
         </div>
         <div className='delete-div'>
            <p>Completed: {completedTodos.length}</p>
            <p>Incomplete: {incompleteTodos.length}</p>
            <button className='delete-selected' onClick={handleDeleteAllTodos}>Delete All</button>
         </div>
      </div>
   );
}

