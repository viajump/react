import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/ducks/counter";

const Counter = (props) => {
  const { name } = props;
  /* const count = useSelector(state => state.counter.count) */
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setCount(count + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setCount(count - 1);
  };

  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        width: "200px",
        padding: "20px"
      }}
    >
      <h3>{name}</h3>
      <h5>Counter: {count} </h5>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};
export default Counter;
