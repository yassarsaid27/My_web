import { useState } from "react";
 
type CounterProps = {
  initialValue?: number;
  step?: number;
};
 
function Counter({ initialValue = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialValue);
 
  return (
    <div>
      <h2 data-testid="head">Counter</h2>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount((c) => c - step)}>Decrement</button>
      <button onClick={() => setCount((c) => c + step)}>Increment</button>
      <button onClick={() => setCount(initialValue)}>Reset</button>
    </div>
  );
}
 
export default Counter;