import React, { useEffect, useRef } from "react";

export const Hello = () => {
  // useEffect(() => {
  //   console.log("render");

  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);
  const renders = useRef(0);

  console.log("hello renders", renders.current++);

  return <div>Hello</div>;
};
