import React from "react";
import { LOGIN_TOKEN } from "../../constants";

const Login = () => {
  const validate = (inputString) => {
    if (inputString === LOGIN_TOKEN) {
      window.localStorage.setItem("nerdToken", inputString);
      window.location.reload(); 
    } else {
      alert('nope! double check.')
    }
  };

  return (
    <main>
      <h1>gimme password:</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validate(e.target[0]["value"]);
        }}
      >
        <label>
          Paste that token here:
          <input type="text" name="nerdToken" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
};

export default Login;
