import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <div>
      <NavStyle>
        <H1Style>
          <ImageStyle src="https://boxingbc.ca/wp-content/uploads/2022/08/boxing-british-columbia-logo-black.png" />
        </H1Style>
        <Ulstyled>
          <Listyled>
            <LinkStyle to="/">Home</LinkStyle>
          </Listyled>
          <Listyled>
            <LinkStyle to="/tournament">Tournament</LinkStyle>
          </Listyled>
          <Listyled>
            <LinkStyle to="/login">Login</LinkStyle>
          </Listyled>
          <Listyled>
            <LinkStyle to="/register">Register</LinkStyle>
          </Listyled>
          <Listyled>
            <LinkStyle to="/register-fighter">
              Register fighter's name
            </LinkStyle>
          </Listyled>
          <Listyled>
            <LinkStyle to="/fighter-name">Fighter name</LinkStyle>
          </Listyled>
        </Ulstyled>
      </NavStyle>
    </div>
  );
}

const NavStyle = styled.nav`
  display: flex;
`;
const H1Style = styled.h1`
  flex: 1;
`;

const ImageStyle = styled.img`
  width: 300px;
`;
const Ulstyled = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  flex: 2;
`;

const Listyled = styled.li`
  border: 1px solid red;
  margin: 50px 10px;
  border-radius: 15px;
  flex: 1;
  text-align: center;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
`;
