import React from "react";

export default function Username() {
  return (
    <>
      <div className="labelName">
        <label>Username</label>
      </div>
      <div className="inputs">
        <input type="text" autoComplete="off" />
      </div>
    </>
  );
}
