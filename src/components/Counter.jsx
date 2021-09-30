import { useState } from "react";

/**
 * Counter using simple useState hook
 * @return {JSXElement} JSX Element
 */
function Counter() {
  const [count, setcount] = useState(0);
  return <button onClick={() => setcount(count + 1)}>Count: {count}</button>;
}

export default Counter;
