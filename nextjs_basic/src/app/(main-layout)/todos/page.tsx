import Link from "next/link";
import React from "react";
import TodoApp from "./_components/TodoApp";

export const dynamic = "force-dynamic";

const getTodoList = async () => {
  const SERVER_API =
    process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:3001";
  const response = await fetch(`${SERVER_API}/todos`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch todo list");
  }
  return response.json();
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default async function TodoPage() {
  const todoList = await getTodoList();
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((todo: Todo) => (
        <Link href={`/todos/${todo.id}`} key={todo.id}>
          <h3>{todo.title}</h3>
        </Link>
      ))}
      <TodoApp />
    </div>
  );
}
