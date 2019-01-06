import * as React from "react";
import { Button } from "../../shared/components/Button";
import { Spinner } from "../../shared/components/Spinner";
import { styled } from "../../theme/styled";

interface OwnProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => any;
  pending: boolean;
}

const B = styled(Button)`
  text-transform: none;
  min-width: 300px;
`;

export const Loader = styled(Spinner)`
  height: 1rem;
`;

const SupportButton: React.FunctionComponent<OwnProps> = ({
  onClick,
  children,
  pending,
}) => (
  <B onClick={onClick} disabled={pending}>
    {!pending && children}
    {pending && <Loader />}
  </B>
);

export default SupportButton;
