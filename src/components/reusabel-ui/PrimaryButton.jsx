import { styled } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
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
`;
