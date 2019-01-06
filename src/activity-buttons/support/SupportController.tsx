import * as React from "react";
import { WithNamespaces, withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AuthActions } from "../../actions/navigation";
import { SupportSuggestion } from "../../actions/support";
import { ToastActions } from "../../actions/toast";
import { User } from "../../auth/user";
import { RootState } from "../../reducers";
import { getSuggestionState } from "../../selectors/suggestion-state";
import Suggestion from "../../shared/interfaces/suggestion";
import {
  toastDispatch,
  ToastDispatchProps,
} from "../../shared/props/dispatch-props";
import SupportButton from "./SupportButton";

interface OwnProps {
  suggestion: Suggestion;
}

interface Dispatches {
  support: (s: Suggestion) => any;
}

type DispatchProps = Dispatches & ToastDispatchProps;

interface StateProps {
  loggedIn: boolean;
  currentUser: User | null;
  pending: boolean;
}

type Props = DispatchProps & StateProps & OwnProps & WithNamespaces;

export class SupportController extends React.Component<Props> {
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

    const action = alreadySupported ? this.unsupport : this.support;

    return (
      <SupportButton onClick={action} pending={pending}>
        {buttonText}
      </SupportButton>
    );
  }

  private support = () => {
    if (!this.props.loggedIn) {
      this.props.showToast(this.props.t("suggestion.unauthorized"));
    } else {
      this.props.support(this.props.suggestion);
    }
  };

  private unsupport = () => {
    this.props.showToast(`Not implemented yet.`);
  };
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, AuthActions & ToastActions>
): DispatchProps => ({
  support: (s: Suggestion) => dispatch(SupportSuggestion(s)),
  ...toastDispatch(dispatch),
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
)(withNamespaces()(SupportController));
