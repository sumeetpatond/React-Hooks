import { useState, useEffect } from "react";

const Counter8 = function () {
  const [users, setUsers] = useState();
  useEffect(async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setUsers(data);
  }, []);
  return <span>{users?.map((user) => user.name + ", ")}</span>;
};

export default Counter8;
