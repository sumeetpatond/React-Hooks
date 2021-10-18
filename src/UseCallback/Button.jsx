import React from "react";

/* eslint-disable react/prop-types */
const Button = function ({ handleClick, children }) {
  return <button onClick={handleClick}>{children}</button>;
};

export default React.memo(Button);
