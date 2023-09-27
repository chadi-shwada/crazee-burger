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
  // style for icon
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
`;
