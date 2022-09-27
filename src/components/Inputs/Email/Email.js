import React from "react";
import "../Inputs.css";

export default function Email() {
  return (
    <>
      <div className="labelName">
        <label>E-mail</label>
      </div>
      <div className="inputs">
        <input type="email" autoComplete="off" />
      </div>
    </>
  );
}
