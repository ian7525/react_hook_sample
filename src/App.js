import React, { useEffect, useState, useRef } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const init = JSON.parse(localStorage.getItem("count"));
  const [count, setCount] = useState(() =>
    init ? JSON.parse(localStorage.getItem("count")) : 0
  );
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, [values.email]);

  // useEffect(() => {
  //   console.log("mount 1");
  // }, []);

  // useEffect(() => {
  //   console.log("mount 2");
  // }, []);

  return (
    <div>
      <div>{!data ? "...loading" : data}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="firstName"
        placeholder="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
    </div>
  );
}

export default App;
