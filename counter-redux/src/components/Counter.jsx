import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/ducks/counter";

const Counter = (props) => {
  const { name } = props;

  const [count, setCount] = useState(0);
  /* const count = useSelector((state) => state.counter.count); */
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setCount(count + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setCount(count - 1);
  };

  return (
    <div style={{backgroundColor: "grey"}}>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
