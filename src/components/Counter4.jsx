import { useState } from "react";
/**
 * Counter using useState hook with array as state
 * @return {JSXElement} JSX Element
 */
const Counter4 = function () {
  const [counters, setCounters] = useState([]);
  return (
    <>
      <button
        onClick={() =>
          setCounters([
            ...counters,
            { key: counters.length, value: Math.ceil(Math.random() * 10) },
          ])
        }
      >
        Add Item
      </button>
      <ul>
        {counters.map((item) => (
          <li key={item.key}>{item.value}</li>
        ))}
      </ul>
    </>
  );
};

export default Counter4;
