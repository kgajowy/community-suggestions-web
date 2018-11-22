import * as React from 'react'
import {FunctionComponent, useState} from 'react'
import {Button} from '../../shared/components/Button'
import Suggestion from '../../shared/interfaces/suggestion'
import {styled} from '../../theme/styled'
import {SubmitDescription} from './SubmitDescription'
import {SubmitName} from './SubmitName'

export interface SubmitForm {
    onSubmit: (suggestion: Suggestion) => void
}

const Container = styled.div`
  display: flex;
  height: 200px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-right: 15px;
`

const Submit = styled(Button)`
  align-self: flex-end;
  width: 200px;
  height: 100%;
  background-color: ${p => p.theme.primaryColorBackground};
  color: ${p => p.theme.primaryColor};
  &:hover {
    color: ${p => p.theme.secondaryColor};
    background-color: ${p => p.theme.secondaryColorBackground};
  }
  
  transition: all 0.5s;
`

// export function SubmitForm({onSubmit}: SubmitForm) {
export const SubmitForm: FunctionComponent<SubmitForm> = ({onSubmit}) => {
    const [title, setTitle] = useState<string>('')
    const onTitleChange = (event: React.FormEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)

    const [description, setDescription] = useState<string>('')
    const onDescChange = (event: React.FormEvent<HTMLTextAreaElement>) => setDescription(event.currentTarget.value)
    const onClick = () => onSubmit({title, description, voters: [], supporters: []})

    return (
        <Container>
            <InputContainer>
                <SubmitName onChange={onTitleChange} value={title}/>
                <SubmitDescription onChange={onDescChange} value={description}/>
            </InputContainer>
            <Submit onClick={onClick}>Submit suggestion</Submit>
        </Container>
    )
}