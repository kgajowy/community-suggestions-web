import { styled } from "../../theme/styled";

export const LinkElement = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    // filter: brightness(80%);
    text-decoration: underline;
    cursor: pointer;
  }
`;
