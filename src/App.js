import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Erro");
      }
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  };

  const buttons = [
    "+", "-", "×", "÷",
    "9", "8", "7", "6",
    "5", "4", "3", "2",
    "1", "0", ".", "AC"
  ];

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn === "÷" ? "/" : btn)}
          >
            {btn}
          </button>
        ))}
        <button className="equals" onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
}
