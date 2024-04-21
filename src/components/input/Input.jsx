import { useState } from "react";
import "./input.css";

export function Input({ type = "text", label, placeholder = label }) {
  const [inputId] = useState(`input-${Math.floor(Math.random() * 10000)}`);

  return (
    <div className="Input">
      <label htmlFor={inputId}>{label}</label>
      <input type={type} id={inputId} placeholder={placeholder} />
    </div>
  );
}

export function Inputs({ children }) {
  return <div className="Inputs">{children}</div>;
}
