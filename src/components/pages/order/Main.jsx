import { styled } from "styled-components";

export default function Main() {
  return <MainStyled>main</MainStyled>;
}

const MainStyled = styled.div`
  border: 3px solid red;
  height: 85vh;
  background-color: blue;
`;
