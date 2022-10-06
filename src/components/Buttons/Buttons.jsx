import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      type={props.type}
    >
      {props.name}
    </button>
  );
}
