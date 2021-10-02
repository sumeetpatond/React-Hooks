import "./App.css";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import Counter4 from "./components/Counter4";

/**
 * App Component at root level.
 * @return {JSXElement} JSX Element
 */
function App() {
  return (
    <div>
      Counter1: <Counter /> <br />
      Counter2: <Counter2 /> <br />
      Counter3: <Counter3 /> <br />
      Counter4: <Counter4 /> <br />
    </div>
  );
}

export default App;
