import "./App.css";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";

/**
 * App Component at root level.
 * @return {JSXElement} JSX Element
 */
function App() {
  return (
    <div>
      <Counter />
      <Counter2 />
    </div>
  );
}

export default App;
