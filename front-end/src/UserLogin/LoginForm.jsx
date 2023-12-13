import React, { useRef } from "react";
import { useNavigate, redirect } from "react-router-dom";
import "./styles.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return redirect("/login");
    }
    //email 혹은 password가 없다면 login페이지로 리다이렉트 해줌.

    navigate(`/details?email=${email}&password=${password}`);

    //아래처럼 쓸 수도 있음.
    // history.push({
    //     pathname: '/details',
    //     search: `?email=${email}&password=${password}`
    // })
  };

  return (
    <container className="email-container">
      <form className="form-container">
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter email."
            required
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            placeholder="Enter password."
          />
        </fieldset>
        <button type="submit" onClick={submitForm}>
          Login
        </button>
      </form>
    </container>
  );
}
