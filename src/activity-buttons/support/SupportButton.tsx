import * as React from "react";
import { Button } from "../../shared/components/Button";
import { styled } from "../../theme/styled";

interface OwnProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => any;
}

const B = styled(Button)`
  text-transform: none;
`;

const SupportButton: React.FunctionComponent<OwnProps> = ({
  onClick,
  children,
}) => <B onClick={onClick}>{children}</B>;

export default SupportButton;
