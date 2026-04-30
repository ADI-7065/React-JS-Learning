import React from "react";
import { useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch(); //useDispatch is a hook that returns the dispatch function from the Redux store. We can use it to dispatch actions to the store.
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const incrementByNumber = () => {
    dispatch(incrementByNumber(Number(num))); //its just like parsing parsInt(num) but it can also handle decimal numbers
    // Number is a class that can convert a string to a number, and it can handle both integers and floating-point numbers. If the input is not a valid number, it will return NaN (Not-a-Number).
  };
  return (
    <>
      <p>Count: 0</p>
      <button onClick={incrementHandler}>plus</button>
      <button onClick={decrementHandler}>minus</button>
      <hr />
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={incrementByNumber}>add</button>
    </>
  );
};

export default Counter;
