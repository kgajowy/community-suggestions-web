import * as React from 'react'
import {FunctionComponent, useState} from 'react'
import {Button} from '../../shared/components/Button'
import Suggestion from '../suggestion'
import {SubmitDescription} from './SubmitDescription'
import {SubmitName} from './SubmitName'

export interface SubmitForm {
    onSubmit: (suggestion: Suggestion) => void
}

// export function SubmitForm({onSubmit}: SubmitForm) {
export const SubmitForm: FunctionComponent<SubmitForm> = ({onSubmit}) => {
    const [title, setTitle] = useState<string>('')
    const onTitleChange = (event: React.FormEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)

    const [description, setDescription] = useState<string>('')
    const onDescChange = (event: React.FormEvent<HTMLTextAreaElement>) => setDescription(event.currentTarget.value)

    const onClick = () => onSubmit({title, description})

    return (
        <>
            <SubmitName onChange={onTitleChange} value={title}/>
            <SubmitDescription onChange={onDescChange} value={description}/>
            <Button onClick={onClick}>Submit suggestion</Button>
        </>
    )
}