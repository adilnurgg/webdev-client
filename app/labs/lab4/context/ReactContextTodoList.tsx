"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  return (
    <div>
      <h2>Todo List</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
        placeholder="New todo"
      />

      <button
        onClick={() => addTodo(title)}
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
            />
            <button
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
