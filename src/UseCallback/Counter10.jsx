import { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";

const Counter10 = function () {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(50000);
  const increaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  return (
    <>
      <Button handleClick={increaseAge}>Increase age</Button>
      <Count count={age}></Count>
      <Button handleClick={increaseSalary}>Increase salary</Button>
      <Count count={salary}></Count>
    </>
  );
};

export default Counter10;
