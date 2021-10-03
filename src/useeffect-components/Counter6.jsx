import { useEffect } from "react";
import { useState } from "react";

const Counter6 = function () {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = function (e) {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <label>{`x: ${position.x}  y: ${position.y}`}</label>;
};

export default Counter6;
