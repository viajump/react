import React from "react";
import { useSelector } from "react-redux";

const Vote = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>Total Vote</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default Vote;
