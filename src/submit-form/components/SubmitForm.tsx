import * as React from "react";
import { FunctionComponent, useState } from "react";
import { WithNamespaces, withNamespaces } from "react-i18next";
import { Button } from "../../shared/components/Button";
import { Spinner } from "../../shared/components/Spinner";
import { NewSuggestionInput } from "../../shared/interfaces/suggestion";
import { styled } from "../../theme/styled";
import { SubmitDescription } from "./SubmitDescription";
import { SubmitName } from "./SubmitName";

export interface SubmitForm {
  onSubmit: (suggestion: NewSuggestionInput) => void;
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
  width: 200px;
  height: 100%;
`;

const SubmitForm: FunctionComponent<SubmitForm & WithNamespaces> = ({
  onSubmit,
  pending,
  t,
}) => {
  const [title, setTitle] = useState<string>("");
  const onTitleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setTitle(event.currentTarget.value);

  const [description, setDescription] = useState<string>("");
  const onDescChange = (event: React.FormEvent<HTMLTextAreaElement>) =>
    setDescription(event.currentTarget.value);
  const onClick = () => onSubmit({ title, description });

  const inputsFilled = Boolean(title && description);

  const inputTitlePlaceholder = t("submitForm.inputTitlePlaceholder");
  const inputDescPlaceholder = t("submitForm.inputDescPlaceholder");
  const submitText = t("submitForm.submitText");

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

export const Form = withNamespaces()(SubmitForm) as React.FunctionComponent<
  SubmitForm
>;
