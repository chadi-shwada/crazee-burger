import Logo from "../../reusabel-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

// styledComponents
const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //style for image background
  background: url("/images/burger-background.jpg") fixed center/cover
    rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
`;
