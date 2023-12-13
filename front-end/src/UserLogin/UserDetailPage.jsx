import { redirect, useLocation, Link } from "react-router-dom";

export default function UserDetailPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const email = searchParams.get("email");
  const password = searchParams.get("password");

  if (!email || !password) {
    return redirect("/login");
  }
  return (
    <div>
      <h2>User Detail page</h2>
      <p>
        <h3>User Details</h3>
        <em>{email}</em>
        <br />
        <strong>{password}</strong>
      </p>
      <Link to="/login">Logout</Link>
    </div>
  );
}
