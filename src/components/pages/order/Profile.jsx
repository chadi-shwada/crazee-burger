import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Profile({ username }) {
  return (
    <ProfileStyled>
      <span>Bonjour {username}</span>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  background: pink;
`;
