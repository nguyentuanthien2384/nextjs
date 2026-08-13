import Link from "next/link";
import React from "react";
import TodoApp from "./_components/TodoApp";
import SearchForm from "./_components/SearchForm";

export const dynamic = "force-dynamic";

const getTodoList = async (q: string = "") => {
  const SERVER_API =
    process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:3001";
  try {
    const response = await fetch(`${SERVER_API}/todos`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch todo list");
    }
    const data: Todo[] = await response.json();
    if (q.trim()) {
      return data.filter((todo) =>
        todo.title?.toLowerCase().includes(q.trim().toLowerCase())
      );
    }
    return data;
  } catch (error) {
    console.error("Error fetching todo list:", error);
    return [];
  }
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default async function TodoPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const q = (await searchParams).q || "";
  const todoList = await getTodoList(q);
  return (
    <div>
      <h1>Todo List : {q}</h1>
      <SearchForm />
      {Array.isArray(todoList) && todoList.length > 0 ? (
        todoList.map((todo: Todo) => (
          <Link href={`/todos/${todo.id}`} key={todo.id}>
            <h3>{todo.title}</h3>
          </Link>
        ))
      ) : (
        <p>Không tìm thấy công việc nào (hoặc Server API chưa chạy tại http://localhost:3001).</p>
      )}
      <TodoApp />
    </div>
  );
}
