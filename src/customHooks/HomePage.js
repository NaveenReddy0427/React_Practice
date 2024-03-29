import Login from "../customHooks/LoginPage";
import Reset from "../customHooks/ResetPasswordPage";

import { useState } from "react";

function Home() {
  const [form, setForm] = useState("login");

  return (
    <div className="App">
      <h1>Welcome!</h1>
      {form === "login" ? <Login /> : <Reset />}
      <button
        onClick={() => {
          setForm(form === "login" ? "reset" : "login");
        }}
      >
        {form === "login" ? "Forgot Password" : "Back to Login"}
      </button>
    </div>
  );
}

export default Home;
