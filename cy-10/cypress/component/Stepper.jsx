import { useState, useEffect } from "react";

export default function Stepper({ initial = 0, onChange = () => {} }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    fetch("/count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count }),
    });
  }, [count]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div data-testid="stepper">
      <button aria-label="decrement" onClick={decrement}>
        -
      </button>
      {count}
      <button aria-label="increment" onClick={increment}>
        +
      </button>
    </div>
  );
}
