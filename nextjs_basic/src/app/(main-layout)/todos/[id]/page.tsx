import React from "react";
import { Todo } from "../page";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";

const getTodo = async (id: string) => {
  const SERVER_API =
    process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:3001";
  try {
    const response = await fetch(`${SERVER_API}/todos/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching todo:", error);
    return null;
  }
};

export default async function TodoDetailPage({ params }: Params) {
  const { id } = await params;
  const todo: Todo | null = await getTodo(id);

  if (!todo) {
    notFound();
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.completed ? "true" : "false"}</p>
      <h4>
        <Link href={"/todos"}> Back </Link>
      </h4>
    </div>
  );
}

