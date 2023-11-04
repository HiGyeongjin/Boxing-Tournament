import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <img
        src="/b-glove-image.png"
        alt="boxing glove"
        // style={{ width: "30px" }}
      />
      <h1>This is a Main page.</h1>
      <Link to="/login">Login</Link>
    </>
  );
}
