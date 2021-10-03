import { useState } from "react";

/**
 * Counter using useState hook with object as state
 * @return {JSXElement} JSX Element
 */
function Counter3() {
  const [counters, setCounters] = useState({ counter1: 0, counter2: 0 });
  return (
    <>
      <button
        onClick={() =>
          setCounters({ ...counters, counter1: counters.counter1 + 1 })
        }
      >
        Count 1: {counters.counter1}
      </button>
      <button
        onClick={() =>
          setCounters({ ...counters, counter2: counters.counter2 + 1 })
        }
      >
        Count 2: {counters.counter2}
      </button>
    </>
  );
}

export default Counter3;
