import React from "react";

export default function LastName() {
  return (
    <>
      <div className="labelName">
        <label>Last Name</label>
      </div>
      <div className="inputs">
        <input type="text" autoComplete="off" />
      </div>
    </>
  );
}
