import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "./reducer";
const counterUsingRedux = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);

  //console.log("counter", counter);

  const increaseCounter = () => {
    dispatch(increament());
  };
  const decreaseCounter = () => {
    dispatch(decreament());
  };
  return (
    <div>
      <span>
        Count is <strong>{counter}</strong>
      </span>
      <div>
        <button type="button" onClick={() => increaseCounter()}>
          Increase Counter
        </button>
        <button type="button" onClick={() => decreaseCounter()}>
          Increase Counter
        </button>
      </div>
    </div>
  );
};

export default counterUsingRedux;
