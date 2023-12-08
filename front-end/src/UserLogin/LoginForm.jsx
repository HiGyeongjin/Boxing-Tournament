import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // DetailPage로 이동하는 코드를 작성하세요.
    // navigate(`/detail?email=${email}&password=${password}`);

    navigate(`/detail?email=${email}&password=${password}`);
  };

  return (
    <container>
      <form>
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
