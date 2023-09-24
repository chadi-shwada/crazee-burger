import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";

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
      <br />
      <h2>Connectez-vous</h2>
      <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input
          required
          value={username}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
        />
      </div>
      <button>Accéder à votre espace</button>
    </LoginFormStyled>
  );
}

// styledComponents
const LoginFormStyled = styled.form`
  font-family: "Amatic SC", cursive;
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
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }

  .input-with-icon {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
      width: 100%;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }
  }
`;
