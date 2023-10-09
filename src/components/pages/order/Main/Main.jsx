import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu.jsx";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: 85vh;
  background: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 25% 75%;

  .basket {
    background: red;
  }
`;
