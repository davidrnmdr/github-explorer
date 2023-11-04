import { useState } from "react";

export function Counter() {
  //const count = 0;
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h2>{count}</h2>

      <button type="button" onClick={increment}>
        Increment
      </button>

      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
