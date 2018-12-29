import * as React from "react";
import { FunctionComponent, useState } from "react";
import { Button } from "../../shared/components/Button";
import { Spinner } from "../../shared/components/Spinner";
import Suggestion from "../../shared/interfaces/suggestion";
import { styled } from "../../theme/styled";
import { SubmitDescription } from "./SubmitDescription";
import { SubmitName } from "./SubmitName";

export interface SubmitForm {
  onSubmit: (suggestion: Suggestion) => void;
  pending: boolean;
}

const Container = styled.div`
  display: flex;
  height: 200px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-right: 15px;
`;

const Submit = styled(Button)`
  align-self: flex-end;

  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 2px;
  padding: 12px 36px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);

  width: 200px;
  height: 100%;
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

export const SubmitForm: FunctionComponent<SubmitForm> = ({
  onSubmit,
  pending,
}) => {
  const [title, setTitle] = useState<string>("");
  const onTitleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setTitle(event.currentTarget.value);

  const [description, setDescription] = useState<string>("");
  const onDescChange = (event: React.FormEvent<HTMLTextAreaElement>) =>
    setDescription(event.currentTarget.value);
  const onClick = () =>
    onSubmit({ title, description, voters: [], supporters: [], id: "" });

  const inputsFilled = Boolean(title && description);

  const inputTitlePlaceholder = "Rough title/name of your idea.";
  const inputDescPlaceholder = "Describe your idea in details!";
  const submitText = "Submit";

  return (
    <Container>
      <InputContainer>
        <SubmitName
          onChange={onTitleChange}
          disabled={pending}
          value={title}
          placeholder={inputTitlePlaceholder}
        />
        <SubmitDescription
          onChange={onDescChange}
          disabled={pending}
          value={description}
          placeholder={inputDescPlaceholder}
        />
      </InputContainer>
      <Submit onClick={onClick} disabled={pending || !inputsFilled}>
        {!pending && submitText}
        {pending && <Spinner />}
      </Submit>
    </Container>
  );
};
