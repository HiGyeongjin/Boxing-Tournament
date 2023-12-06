import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <>
      <NavStyle>
        <LinkContainer>
          <LinkStyle to="/">Home</LinkStyle>
          <LinkStyle to="/tournament">Tournament</LinkStyle>
          <LinkStyle to="/bracket">Bracket</LinkStyle>
          <LinkStyle to="/login">Login</LinkStyle>
          <LinkStyle to="/register">Register</LinkStyle>
          <LinkStyle to="/color">Color Palette</LinkStyle>
        </LinkContainer>
        <DivStyle>
          this part is going to contain a content. And I'm testing overflowing.
          I have to make my portfolio page too.. what? There was an emergency
          text alert just now. Nothing serious.I hope. hahaag
        </DivStyle>
        <PStyle>And this one is for overflow test.</PStyle>
        <div>more menu</div>
      </NavStyle>
    </>
  );
}

const NavStyle = styled.div`
  float: left;
  width: 150px;
  margin-right: 10px;
  overflow: hidden;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0 auto;
  padding: 1rem;
  color: black;
  font-size: 1.4rem;
  &:hover {
    background-color: rgba(128, 128, 128, 0.587);
    transition: all 200ms ease-in-out;
    color: white;
  }
`;

const DivStyle = styled.div`
  border: 1px solid #333;
  height: 150px;
  overflow: scroll;
  z-index: 1;
  &:hover {
    background-color: gray;
  }
`;

const PStyle = styled.p`
  border: 1px solid pink;
  z-index: 3;
  &:hover {
    background-color: pink;
  }
`;
