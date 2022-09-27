import React from "react";

export default function FirstName() {
  return (
    <>
      <div className="labelName">
        <label>First Name</label>
      </div>
      <div className="inputs">
        <input type="text" autoComplete="off" />
      </div>
    </>
  );
}
