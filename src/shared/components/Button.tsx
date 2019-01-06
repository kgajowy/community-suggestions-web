import styled from "../../theme/styled";

export const Button = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 2px;
  padding: 12px 36px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);

  background-color: ${p => p.theme.primaryColor};
  color: ${p => p.theme.primaryColorBackground};

  text-transform: uppercase;

  &:hover {
    filter: brightness(85%);
  }

  &:disabled {
    opacity: 0.5;
  }

  &:active {
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }

  transition: all 300ms ease-in;
`;
