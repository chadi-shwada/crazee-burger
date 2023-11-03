import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
  return <AdminPanelStyled></AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
`;
