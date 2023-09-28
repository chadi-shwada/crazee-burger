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
      <div className="container">
        <nav className="navbar">
          <span>Bonjour {username}</span>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </nav>
        <div className="main">main</div>
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

  .navbar {
    border: 3px solid red;
    height: 10vh;
    background: green;
  }

  .main {
    border: 3px solid red;
    height: 85vh;
    background-color: blue;
  }
`;
