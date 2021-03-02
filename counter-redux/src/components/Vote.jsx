import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/ducks/user";

const Votes = () => {
  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      {user && <h1>{user.firstName}</h1>}
      <h1>Total Vote {count}</h1>
    </div>
  );
};

export default Votes;
