import * as React from "react";
import { WithNamespaces, withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AuthActions } from "../../actions/navigation";
import { SupportSuggestion } from "../../actions/support";
import { User } from "../../auth/user";
import { RootState } from "../../reducers";
import Suggestion from "../../shared/interfaces/suggestion";
import SupportButton from "./SupportButton";

interface OwnProps {
  suggestion: Suggestion;
}

interface DispatchProps {
  support: (s: Suggestion) => any;
}

interface StateProps {
  loggedIn: boolean;
  currentUser: User;
}

type Props = DispatchProps & StateProps & OwnProps & WithNamespaces;

export class Support extends React.Component<Props> {
  public render() {
    const { t, suggestion, currentUser } = this.props;
    const alreadySupported =
      currentUser &&
      currentUser.suggestions.filter(s => {
        return suggestion.id === s.id;
      }).length > 0;
    const buttonText = alreadySupported
      ? t("suggestion.supported")
      : t("suggestion.support");

    return <SupportButton onClick={this.support}>{buttonText}</SupportButton>;
  }

  private support = () => {
    this.props.support(this.props.suggestion);
  };
}

// TODO add toast show fn
// TODO add pending "submit" state
const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, AuthActions>
): DispatchProps => ({
  support: (s: Suggestion) => dispatch(SupportSuggestion(s)),
});

const mapStateToProps = ({ auth }: RootState): StateProps => ({
  loggedIn: auth.loggedIn,
  currentUser: auth.currentUser!,
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces()(Support)) as React.ComponentClass<OwnProps>;
