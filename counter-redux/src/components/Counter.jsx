import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/ducks/counter";


const Counter = () => {
  /* const count = useSelector((state) => state.counter.count); */
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement())
  };

  return (
    <div>
      <h1>Counter</h1>
      {/* <h1>{count}</h1> */}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
