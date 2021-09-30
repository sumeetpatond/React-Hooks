import { useState } from "react";

/**
 * Counter using useState hook with use of prevState
 * @return {JSXElement} JSX Element
 */
function Counter2() {
  const [count, setcount] = useState(0);
  return (
    <button onClick={() => setcount((prevCount) => prevCount + 1)}>
      Count:{count}
    </button>
  );
}

export default Counter2;
