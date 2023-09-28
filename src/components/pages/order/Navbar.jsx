import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <span>Bonjour {username}</span>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  border: 3px solid red;
  height: 10vh;
  background: green;
`;
