"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type Todo = {
  id: string;
  title: string;
};

type TodosContextType = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextType | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), title }]);
  };

  const updateTodo = (id: string, title: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }

  return context;
}
