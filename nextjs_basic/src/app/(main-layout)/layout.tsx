import React from "react";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container main-layout py-3">
      <div className="row">
        <div className="col-3">
          <h3>Menu</h3>
        </div>
        <div className="col-9">{children}</div>
      </div>
    </div>
  );
}
