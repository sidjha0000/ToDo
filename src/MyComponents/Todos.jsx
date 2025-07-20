import React from "react";
import TodoItem from "./TodoItem";

export default function Todos({ todos, onDelete }) {
  return (
    <div className="container my-3">
      <h3>Todos List</h3>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />
      ))}
    </div>
  );
}
