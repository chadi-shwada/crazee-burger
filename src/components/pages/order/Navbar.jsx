import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";
export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <div className="profile">
        <span>Bonjour {username}</span>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  border: 3px solid red;
  height: 10vh;
  background: green;
  display: flex;
  justify-content: space-between;

  .logo {
    background: purple;
  }

  .profile {
    background: pink;
  }
`;
