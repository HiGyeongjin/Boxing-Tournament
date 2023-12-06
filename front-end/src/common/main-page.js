import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./nav";

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
        well in fact, this is going to be content. and you will see the menu on
        the left of the page.
      </div>
      <Link to="/login">Login</Link>
    </>
  );
}
