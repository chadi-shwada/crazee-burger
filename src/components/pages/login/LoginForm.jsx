import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForwardCircle } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusabel-ui/TextInput";
import PrimaryButton from "../../reusabel-ui/PrimaryButton";

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

      <PrimaryButton
        label={"Accéder à votre espace"}
        Icon={<IoChevronForwardCircle className={"icon"} />}
      />
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
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    margin: 20px 10px 10px;
  }

  hr {
    border: 1.5px solid ${theme.colors.tomato};
    margin-bottom: ${theme.gridUnit * 5}px;
  }
  // style for icon
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`;
