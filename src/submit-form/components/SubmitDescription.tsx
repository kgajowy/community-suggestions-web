import styled from '../../theme/styled'
// TODO test - border and font color should adjust as theme definition
// TODO test - font & font-size should be the same as on theme

const TextArea = styled.textarea`
  border: ${p => `1px solid ${p.theme.primaryColor}`};
  border-radius: 5px;
  outline: 0 none;
  resize: none;
  padding: 0;
  height: 100%;
  margin-top: 10px;
`

export const SubmitDescription = styled(TextArea)``