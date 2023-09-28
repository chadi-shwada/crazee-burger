import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar";
import Main from "./Main";

export default function OrderPage() {
  //state
  const { username } = useParams();

  //comportements

  // affichage (render)
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    border: 3px solid lightblue;
    background: lightblue;
    height: 95vh;
    width: 1400px;
  }
`;
