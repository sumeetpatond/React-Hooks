import { useEffect, useRef } from "react";

const Counter12 = function () {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return <input ref={ref} />;
};

export default Counter12;
