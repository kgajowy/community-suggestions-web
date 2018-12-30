import * as React from "react";
import { withNamespaces, WithNamespaces } from "react-i18next";
import { Button } from "../../shared/components/Button";
import { styled } from "../../theme/styled";

interface OwnProps {
  onClick: () => any;
}

const B = styled(Button)`
  text-transform: none;
`;

export const SupportButton: React.FunctionComponent<
  OwnProps & WithNamespaces
> = ({ t, onClick }) => <B onClick={onClick}>{t("suggestion.support")}</B>;

export default withNamespaces()(SupportButton) as React.FunctionComponent<
  OwnProps
>;
