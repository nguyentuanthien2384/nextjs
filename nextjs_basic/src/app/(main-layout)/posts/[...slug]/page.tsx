import React from "react";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const [category, post] = slug;
  return (
    <div>
      <h1>Post detail</h1>
      <h2>Category : {category}</h2>
      <h2>Post : {post}</h2>
    </div>
  );
}
