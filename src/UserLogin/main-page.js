import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MainPage() {
  return (
    <>
      <img
        src="/b-glove-image.png"
        alt="boxing glove"
        style={{ width: "100px", margin: "15px", height: "150px" }}
      />
      <h1>This is a Main page.</h1>
      <NavStyle>
        <button>menu</button>
        <DivStyle>
          this part is going to contain a content. And I'm testing overflowing.
          I have to make my portfolio page too.. what? There was an emergency
          text alert just now. Nothing serious.I hope. hahaag
        </DivStyle>
        <PStyle>And this one is for overflow test.</PStyle>
        <div>more menu</div>
      </NavStyle>
      <div>
        well in fact, this is going to be content. and you will see the menu on
        the left of the page.
      </div>
      <Link to="/login">Login</Link>
    </>
  );
}

const NavStyle = styled.div`
  float: left;
  width: 150px;
  margin-right: 10px;
  overflow: hidden;
  &:hover {
    background-color: pink;
  }
`;

const DivStyle = styled.div`
  display: none;
  border: 1px solid #333;
  height: 50px;
  overflow: hidden;
  z-index: 1;
  &:hover {
    background-color: gray;
  }
`;

const PStyle = styled.p`
  border: 1px solid pink;
  z-index: 3;
`;
