import React from "react";
import "./Notes.css";

export default function Notes({ name, placeholder, cols, rows }) {
  return (
    <textarea className="text-area"
      name={name}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      autoComplete="off"
    />
  );
}
