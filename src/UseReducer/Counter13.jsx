import { useReducer } from "react";

const initialState = { count: 0 };
const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
      break;
    case "dec":
      return { ...state, count: state.count - 1 };
      break;
    case "reset":
      return initialState;
      break;
    default:
      return state;
  }
};

const Counter13 = function () {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {state.count}
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter13;
