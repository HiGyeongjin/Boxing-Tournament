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
            <LinkStyle to="/tournament">Tournament</LinkStyle>
          </ListStyle>
          <ListStyle>
            <LinkStyle to="/bracket">Bracket</LinkStyle>
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
      </Wrapper>
    </NavStyle>
  );
}

const NavStyle = styled.nav`
  background-color: pink;
  position: relative;
  width: 100%;
  z-index: 999;
  height: 6rem;
`;

const Wrapper = styled.nav`
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H1Style = styled.h1``;

const ImageStyle = styled.img`
  display: flex;
  align-itmes: center;
  width: 300px;
  margin: 0.8rem;
`;

const NavLinks = styled.ul`
  display: inline-flex;
`;

// 나중에 displya:none부분 바꾸기! hover 하거나 클릭하면 보여질수있게
const DropMenuStyle = styled.ul`
  display: none;
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
