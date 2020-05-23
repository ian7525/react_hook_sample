import React, {useReducer, useCallback} from "react";

export const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };

  const [data, setData] = useReducer(reducer, 0);
  return (
    <div>
      <div>{data}</div>
      <button onClick={() => setData({type: "increment"})}>Increment</button>
      <button onClick={() => setData({type: "decrement"})}>Decrement</button>
    </div>
  );
};
