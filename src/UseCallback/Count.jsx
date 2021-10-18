import React from "react";

/* eslint-disable react/prop-types */
const Count = function ({ count }) {
  return <span>Count: {count}</span>;
};

export default React.memo(Count);
