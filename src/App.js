import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("0");
  const [justCalculated, setJustCalculated] = useState(false);

const handleClick = (value) => {
  if (input === "Erro" || input === "Não é possível dividir por zero") {
    if (value === "AC" || value === "=") {
      setInput("0");
    } else {
      setInput(value);
    }
    setJustCalculated(false);
    return;
  }

  if (value === "AC") {
    setInput("0");
    setJustCalculated(false);
  } else if (value === "=") {
    try {
      const result = eval(input);

      if (!isFinite(result)) {
        setInput("Impos. dividir por zero");
      } else {
        setInput(result.toString());
      }

      setJustCalculated(true);
    } catch {
      setInput("Erro");
      setJustCalculated(false);
    }
  } else {
    if (justCalculated && /[0-9.]/.test(value)) {
      setInput(value);
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
    setJustCalculated(false);
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
            onClick={() => handleClick(btn === "÷" ? "/" : btn === "×" ? "*" : btn)}
          >
            {btn}
          </button>
        ))}
        <button className="equals" onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
}