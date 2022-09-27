import React from "react";

export default function Password() {
  return (
    <>
      <div className="labelName">
        <label>Password</label>
      </div>
      <div className="inputs">
        <input type="password" autoComplete="off" />
      </div>
    </>
  );
}
