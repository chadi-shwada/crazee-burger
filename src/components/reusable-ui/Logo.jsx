import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className, onClick }) {
  // affichage
  return (
    <LogoStyled className={className} onClick={onClick}>
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

  //style for title
  h1 {
    display: inline;
    font-family: ${theme.fonts.families.stylish};
    text-align: center;
    font-size: ${theme.fonts.size.P4};
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
