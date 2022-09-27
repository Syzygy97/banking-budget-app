import React from "react";

export default function PasswordConfirmation() {
  return (
    <>
      <div className="labelName">
        <label>Re-type Password</label>
      </div>
      <div className="inputs">
        <input type="password" autoComplete="off" />
      </div>
    </>
  );
}
