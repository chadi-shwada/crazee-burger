import { styled } from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/window";

export default function Navbar({ username, onClick }) {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={refreshPage} />
      <Profile username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  padding-right: 50px;
  background: ${theme.colors.white};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    cursor: pointer;
  }
`;
