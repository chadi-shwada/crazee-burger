import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(true);

  //comportements

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  };

  // affichage (render)
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
  }
`;
