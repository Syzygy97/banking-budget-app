import React from "react";
import "./Inputs.css";

export default function Inputs(props) {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      {/* <input
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
        required
      /> */}
    </>
  );
}
