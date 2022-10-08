import React, { useState } from "react";
import "./Inputs.css";

export default function Inputs(props) {
  const [focused, setFocused] = useState(false);
  const { errorMessage, label, onChange, id, ...inputProps } = props;
  const handleFocusTrue = (e) => {
    setFocused(true);
  };
  const handleFocusFalse = (e) => {
    setFocused(false);
  };
  return (
    <>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocusFalse}
        onFocus={handleFocusTrue}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </>
  );
}
