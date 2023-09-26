import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForwardCircle } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusabel-ui/TextInput";

export default function LoginForm() {
  // state
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    navigate(`order/${username}`);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  // affichage (render)
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <TextInput
        value={username}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle className="icon" />}
      />
      <button className="button-with-icon">
        <span>Accéder à votre espace</span>
        <IoChevronForwardCircle className="icon" />
      </button>
    </LoginFormStyled>
  );
}

// styledComponents
const LoginFormStyled = styled.form`
  font-family: ${theme.fonts.families.stylish};
  max-width: 500px;
  min-width: 400px;
  text-align: center;
  margin: 0px auto;
  text-align: center;
  padding: 2.5rem 2rem;

  h1 {
    color: white;
    font-size: 50px;
  }

  h2 {
    color: white;
    font-size: 40px;
    margin: 20px 10px 10px;
  }

  hr {
    border: 1.5px solid ${theme.colors.tomato};
    margin-bottom: 40px;
  }
  // style for button
  .button-with-icon {
    background-color: ${theme.colors.primary};
    border-radius: 5px;
    align-items: center;
    padding: 18px 24px;
    font-size: 15px;
    font-weight: 800;
    width: 100%;
    color: white;
    display: inline-flex;
    justify-content: center;
    position: relative;
    text-decoration: none;
    line-height: 1;
    border: 1px solid ${theme.colors.primary};
    white-space: nowrap;

    &:hover:not(:disabled) {
      background-color: white;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: ${theme.colors.primary};
      border: ${theme.colors.primary};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`;
