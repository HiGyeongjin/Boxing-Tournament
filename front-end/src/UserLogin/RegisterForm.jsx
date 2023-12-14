import React, { useRef } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({ onSubmit }) {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const formData = {
      email,
      password,
    };

    onSubmit(formData);

    navigate(`/login?${email}&password=${password}`);
    // navigate.push({
    //   pathname: "/details",
    //   search: `?email=${email}&password=${password}`,
    // });
  };
  return (
    <container>
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter Email."
            required
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            autocomplete="off"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input
            placeholder="Enter Password"
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
          />
        </fieldset>
        <button onSubmit={submitForm}>Register</button>
      </form>
    </container>
  );
}
