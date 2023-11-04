import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>This is a Main page.</h1>
      <Link to="/login">Login</Link>
    </>
  );
}
