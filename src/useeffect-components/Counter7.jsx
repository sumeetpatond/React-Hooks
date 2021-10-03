import { useEffect } from "react";
import { useState } from "react";

const Counter7 = function () {
  const [counter, setCounter] = useState(0);

  const tick = function () {
    setCounter(counter + 1);
  };

  // Here even if counter isn't dependancy still we have to mention it
  // To avoid this use: setCounter(prevCount => prevCount + 1)
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return <label>{counter}</label>;
};

export default Counter7;
