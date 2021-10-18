import { useState, useMemo } from "react";

const Counter11 = function () {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const isEven = useMemo(() => {
    for (let i = 0; i < 999999999; i++);
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>
        Count1: {count1} {isEven ? "Even" : "Odd"}
      </button>
      <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
    </>
  );
};

export default Counter11;
