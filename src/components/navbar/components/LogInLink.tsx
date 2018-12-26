import * as React from "react";

import { default as ghMark } from "../../../assets/github.svg";
import Suggestion from "../../../shared/interfaces/suggestion";
import { LinkElement } from "../LinkElement";

interface DispatchProps {
  submit: (suggestion: Suggestion) => any;
}

interface StateProps {
  pending: boolean;
}

type Props = DispatchProps & StateProps;

export const LogInLink = () => (
  <LinkElement>
    Log In &nbsp; <img src={ghMark} height="24px" width="24px" />
  </LinkElement>
);

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

export default connect()();
