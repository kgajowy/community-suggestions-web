import * as React from "react";
import { Toast as IToast } from "../../../shared/interfaces/toast";
import { styled } from "../../../theme/styled";
import { Toast } from "./Toast";

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
`;

export const ToastContainer: React.FunctionComponent<{ toasts: IToast[] }> = ({
  toasts,
}) => (
  <Container>
    {toasts.map((t, i) => (
      <Toast key={i} toast={t} />
    ))}
  </Container>
);
