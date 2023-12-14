import React, { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./styles.css";

const users = [];

export default function UserLogin() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/detail" element={<UserDetailPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

function LoginPage() {
  return (
    <div className="loginPage-container">
      <h2 className="h2-style">Login Page</h2>
      <LoginForm />
      <div>
        <Link to="/register" element={<RegisterPage />}>
          Register
        </Link>
        {/* <RegisterPage /> */}
      </div>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

// DetailPage 페이지 컴포넌트를 구현하세요.
function UserDetailPage() {
  // email, password 정보를
  // query param 으로 받아와 저장하고, 정보를 보여주세요.
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const email = searchParams.get("email");
  const password = searchParams.get("password");

  if (!email || !password) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>
        <h3>User details</h3>
        <em>{email}</em>
        <br />
        <strong>{password}</strong>
      </p>
      <Link to="/detail">Log out</Link>
    </div>
  );
}

// '/register'로 이동 시 RegisterForm으로 렌더링하는 코드를 작성하세요.
function RegisterPage() {
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = (formData) => {
    const { email } = formData;
    const foundUser = users.find((user) => user.email === email);
    //user데이터에서 email이 이미 있는것과 같은게 있는지 검사함.

    if (foundUser) {
      return setError("이미 등록된 이메일입니다.");
    }
    //이메일을 찾았으면 에러를 띄워줌.

    users.push(formData);
    //그때 user 데이터를 formData에 추가함.

    history("/login");
    //user를 못찾았으면 login페이지로 돌아감.
  };

  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm onSubmit={handleSubmit} />
      <div>
        <ul>
          <li>
            <Link to="/">Back to home</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div>{error}</div>
    </div>
  );
}
