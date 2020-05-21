import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
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

  const [rect, setRect] = useState({});
  const divRef = useRef();

  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect());
  }, [data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "...loading" : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};
