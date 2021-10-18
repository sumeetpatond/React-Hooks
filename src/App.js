import "./App.css";
import Counter from "./usestate-components/Counter";
import Counter2 from "./usestate-components/Counter2";
import Counter3 from "./usestate-components/Counter3";
import Counter4 from "./usestate-components/Counter4";
import Counter5 from "./useeffect-components/Counter5";
import Counter6 from "./useeffect-components/Counter6";
import Counter7 from "./useeffect-components/Counter7";
import Counter8 from "./useeffect-components/Counter8";
import Counter9 from "./useContext-component/Counter9";
import UserContext from "./useContext-component/UserContext";
import Counter10 from "./UseCallback/Counter10";
import Counter11 from "./UseMemo/Counter11";

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
      Counter5: <Counter5 /> <br />
      Counter6: <Counter6 /> <br />
      Counter7: <Counter7 /> <br />
      Counter8: <Counter8 /> <br />
      Counter9:{" "}
      <UserContext.Provider value="Sumeet">
        <Counter9 />
      </UserContext.Provider>
      <br />
      Counter10: <Counter10 /> <br />
      Counter11: <Counter11 /> <br />
      <br />
    </div>
  );
}

export default App;
