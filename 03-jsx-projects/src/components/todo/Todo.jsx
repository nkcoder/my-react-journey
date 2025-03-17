import React, { useState } from 'react';
import './style.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: Math.floor(Math.random() * 100),
      })
    );
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='container'>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='New Todo' />
      <button onClick={addTodo}>Add</button>
      <ul className='todos-list'>
        {todos.map(({ text, id }) => (
          <li key={id} className='todo'>
            <span className='text'>{text}</span>
            <button className='close' onClick={() => removeTodo(id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
