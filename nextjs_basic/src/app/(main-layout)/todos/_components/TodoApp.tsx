"use client";

import { useRouter } from "next/navigation";

export default function TodoApp() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title");
    const content = formData.get("content");
    const serverApi =
      process.env.NEXT_PUBLIC_SERVER_API || "http://localhost:3001";
    const response = await fetch(`${serverApi}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, completed: false }),
    });
    if (response.ok) {
      router.refresh();
      form.reset();
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control"
          required
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          className="form-control"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

