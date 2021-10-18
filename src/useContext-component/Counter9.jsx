import { useContext } from "react";
import UserContext from "./UserContext";

const Counter9 = function () {
  const userContext = useContext(UserContext);
  return <span>{userContext}</span>;
};

export default Counter9;
