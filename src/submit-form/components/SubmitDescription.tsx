import styled from '../../theme/styled'
// TODO test - border and font color should adjust as theme definition
// TODO test - font & font-size should be the same as on theme

const TextArea = styled.textarea`
  border: ${p => `1px solid ${p.theme.primaryColor}`};
  border-radius: 5px;
  margin: 0;
  width: 100%;
`

export const SubmitDescription = styled(TextArea)``