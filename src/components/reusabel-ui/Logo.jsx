import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  // affichage
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/images/logo-orange.png" alt="Logo"></img>
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

// styledComponents
const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  //style for title
  h1 {
    display: flex;
    font-family: ${theme.fonts.families.stylish};
    text-align: center;
    font-size: ${theme.fonts.P4};
    letter-spacing: 1.5px;
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.primary};
    text-transform: uppercase;
  }

  //style for logo
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
