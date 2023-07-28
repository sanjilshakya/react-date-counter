import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <React.Fragment>
      <div>
        <button
          onClick={() => {
            if (step > 1) setStep((step) => step - 1);
          }}
        >
          -
        </button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>
        <strong>{date.toDateString()}</strong>
      </span>
    </React.Fragment>
  );
}
