import styled from '../../theme/styled'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${p => p.theme.primaryColor};
  color: ${p => p.theme.secondaryColor};
  margin: 0 1em;
  padding: 0.25em 1em;
`