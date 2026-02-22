import { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const numbers = [5, 3, 8, 1];

  const sorted = useMemo(() => {
    console.log("Сортировка...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Клик: {count}</button>
      <p>{sorted.join(", ")}</p>
    </div>
  );
}

export default ExpensiveCalculation;
