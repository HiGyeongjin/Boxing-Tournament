import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <img
        src="/b-glove-image.png"
        alt="boxing glove"
        style={{ width: "100px", margin: "15px", height: "150px" }}
      />
      <h1>This is a Main page.</h1>
      <div>
        Canelo vs Ryan Garcia ?! <br />
        Do you think it can be happening?
        <br /> Later on, I will put like name changing canelo to someone else
        and Ryan Garcia to someone else.
      </div>
      <Link to="/login">Login</Link>
    </>
  );
}
