import React from "react";
import {
  Routes,
  BrowserRouter,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import LoginForm from "./LoginForm";

export default function UserLogin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail" element={<UserDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// HomePage 페이지 컴포넌트를 구현하세요.
function HomePage() {
  return (
    <div>
      <h2>Welcome to my Home Page</h2>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

// LoginPage 페이지 컴포넌트를 구현하세요.
function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm />
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
      <Link to="/login">Log out</Link>
    </div>
  );
}
