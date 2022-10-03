import React from "react";
import "./Inputs.css";

export default function Inputs({ type, placeholder, value, onChange, ref }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      value={value}
      onChange={onChange}
      ref={ref}
      required
    />
  );
}
