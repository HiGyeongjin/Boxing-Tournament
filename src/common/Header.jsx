import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <NavStyle>
      <Wrapper>
        <H1Style>
          <ImageStyle
            src="https://boxingbc.ca/wp-content/uploads/2022/08/boxing-british-columbia-logo-black.png"
            alt="main-logo"
          />
        </H1Style>

        <NavLinks>
          <ListStyle>
            <LinkStyle to="/">Home</LinkStyle>
          </ListStyle>
          <ListStyle>
            <LinkStyle href="#">Tournament</LinkStyle>
          </ListStyle>
          <ListStyle>
            <LinkStyle href="#">Account</LinkStyle>
            {/* onMouseEnter={} 이거 바로 위에 useState넣어서 만들어보기*/}
            <DropMenuStyle>
              <ListStyle>
                <DropdownStyle to="/login">Login</DropdownStyle>
              </ListStyle>
              <ListStyle>
                <DropdownStyle to="/">log out</DropdownStyle>
              </ListStyle>
              <ListStyle>
                <DropdownStyle to="/">My page</DropdownStyle>
              </ListStyle>
              <ListStyle>
                <DropdownStyle to="/">My account</DropdownStyle>
              </ListStyle>
            </DropMenuStyle>
          </ListStyle>
          <ListStyle>
            <LinkStyle href="#">Gym list</LinkStyle>
          </ListStyle>
          <ListStyle>
            <LinkStyle to="/login">Login</LinkStyle>
          </ListStyle>
        </NavLinks>
        {/* 
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
        </Ulstyled> */}
      </Wrapper>
    </NavStyle>
  );
}

const NavStyle = styled.nav`
  background-color: pink;
  position: fixed;
  width: 100%;
  z-index: 999;
  height: 80px;
`;

const Wrapper = styled.nav`
  max-width: 1250px;
  padding: 0 30px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H1Style = styled.h1``;

const ImageStyle = styled.img`
  width: 300px;
`;

const NavLinks = styled.ul`
  display: inline-flex;
`;
const DropMenuStyle = styled.ul`
  background-color: #242526;
  width: 150px;
  top: 65px;
  line-height: 45px;
  position: absolute;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  color: white;
  padding: 9px 15px;
  translition: all 0.3s ease;
  &:hover {
    background-color: #3a3b3c;
  }
`;

const DropdownStyle = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 9px 15px;
  translition: all 0.3s ease;
  width: 100%;
  display: block;
  padding: 0 0 0 15px;
  font-weight: 400px;
  border-radius: 0px;
  &:hover {
    background-color: #3a3b3c;
    color: pink;
  }
`;

const ListStyle = styled.li`
  list-style: none;
`;

//내가 만든거
// const Ulstyled = styled.ul`
//   list-style-type: none;
//   display: flex;
//   justify-content: space-around;
//   flex: 2;
// `;

// const Listyled = styled.li`
//   border: 1px solid red;
//   margin: 50px 10px;
//   border-radius: 15px;
//   flex: 1;
//   text-align: center;
// `;
