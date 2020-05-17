import React, { useState, useRef, useEffect } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
  // useEffect(() => {
  //   console.log("render");

  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);
  const init = JSON.parse(localStorage.getItem("count"));

  const renders = useRef(0);
  const [count, setCount] = useState(() =>
    init ? JSON.parse(localStorage.getItem("count")) : 0
  );
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  console.log("hello renders", renders.current++);

  return (
    <div>
      <div>{!data ? "...loading" : data}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};
