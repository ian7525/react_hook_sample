import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    console.log("render");
  }, [values.password]);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
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
