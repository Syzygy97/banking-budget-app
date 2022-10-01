import React from "react";
import "./Inputs.css";

export default function Inputs({ type, placeholder }) {
  return <input type={type} placeholder={placeholder} autoComplete="off" />;
}
