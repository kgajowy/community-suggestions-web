import * as React from "react";
import { WithNamespaces, withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AuthActions } from "../../actions/navigation";
import { SupportSuggestion } from "../../actions/support";
import { User } from "../../auth/user";
import { RootState } from "../../reducers";
import { getSuggestionState } from "../../selectors/suggestion-state";
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
  pending: boolean;
}

type Props = DispatchProps & StateProps & OwnProps & WithNamespaces;

export class Support extends React.Component<Props> {
  public render() {
    const { t, suggestion, currentUser, pending } = this.props;
    const alreadySupported =
      currentUser &&
      currentUser.suggestions.filter(s => {
        return suggestion.id === s.id;
      }).length > 0;
    const buttonText = alreadySupported
      ? t("suggestion.supported")
      : t("suggestion.support");

    return (
      <SupportButton onClick={this.support} pending={pending}>
        {buttonText}
      </SupportButton>
    );
  }

  private support = () => {
    this.props.support(this.props.suggestion);
  };
}

// TODO add toast show fn
const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, AuthActions>
): DispatchProps => ({
  support: (s: Suggestion) => dispatch(SupportSuggestion(s)),
});

const mapStateToProps = (
  { auth, suggestions }: RootState,
  { suggestion }: OwnProps
): StateProps => {
  const suggestionState = getSuggestionState(suggestions, {
    id: suggestion.id,
  });
  return {
    loggedIn: auth.loggedIn,
    currentUser: auth.currentUser!,
    pending: suggestionState ? suggestionState.changePending : false,
  };
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces()(Support)) as React.ComponentClass<OwnProps>;
