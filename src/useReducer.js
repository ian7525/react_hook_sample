import React, {useReducer} from "react";

const reducer = (state, action) => {
  console.log("Redreducerucr count:" + state);
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const Reducer = () => {
  const [data, setData] = useReducer(reducer, 0);
  return (
    <div>
      <div>{data}</div>
      <button onClick={() => setData({type: "increment"})}>Increment</button>
      <button onClick={() => setData({type: "decrement"})}>Decrement</button>
    </div>
  );
};
