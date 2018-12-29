import * as React from "react";
import { Toast as IToast } from "../../../shared/interfaces/toast";
import { inputStyles } from "../../../submit-form/components/input-styles";
import { styled } from "../../../theme/styled";

const Container = styled.div`
  ${inputStyles};
  padding: 15px;
  margin: 10px;
`;

export const Toast: React.FunctionComponent<{ toast: IToast }> = ({
  toast,
}) => <Container>{toast.message}</Container>;
