import "./App.css";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";

/**
 * App Component at root level.
 * @return {JSXElement} JSX Element
 */
function App() {
  return (
    <div>
      <Counter />
      <Counter2 />
      <Counter3 />
    </div>
  );
}

export default App;
