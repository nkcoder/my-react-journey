import React from 'react';
import { useFetch } from './useFetch';

const TodoList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default TodoList;
