import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";
import Profile from "./Profile";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <Profile />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  border: 3px solid red;
  height: 10vh;
  background: green;
  display: flex;
  justify-content: space-between;
`;
