import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
};

export default TodoList;
