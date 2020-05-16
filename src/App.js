import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const { data, loading } = useFetch("http://numbersapi.com/43/trivia");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showHello, setShowHello] = useState(true);

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
      <div>{loading ? "...loading" : data}</div>
      {/*<button onClick={() => setShowHello(!showHello)}>toggle</button>*/}
      {/*{showHello && <Hello />}*/}
      <input name="email" value={values.email} onChange={handleChange} />
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
    </div>
  );
}

export default App;
