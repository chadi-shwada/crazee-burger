import { styled } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...otherProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={value} type="text" {...otherProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
    color: #93a2b1;
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
