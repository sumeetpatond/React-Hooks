import { useState, useEffect } from "react";

const Counter5 = function () {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);
  return <button onClick={() => setCounter(counter + 1)}>CLick</button>;
};

export default Counter5;
