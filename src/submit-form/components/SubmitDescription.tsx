import styled from '../../theme/styled'
import {inputStyles} from './input-styles'

const TextArea = styled.textarea`
  ${inputStyles};
  resize: none;
  height: 100%;
  margin-top: 10px;
`

export const SubmitDescription = styled(TextArea)``