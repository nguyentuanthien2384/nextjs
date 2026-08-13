import React from "react";

export default function Title({ title }: Readonly<{ title: string }>) {
  return <h1>{title}</h1>;
}
