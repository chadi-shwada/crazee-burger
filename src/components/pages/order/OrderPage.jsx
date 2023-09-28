import React from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";

export default function OrderPage() {
  //state
  const { username } = useParams();

  //comportements

  // affichage (render)
  return (
    <OrderPageStyled>
      <span>Bonjour {username}</span>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
`;
