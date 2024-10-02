import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };
  const handleStepChange = (e) => {
    setStep(parseInt(e.target.value));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <input type="number" value={step} onChange={handleStepChange} min={1} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}
