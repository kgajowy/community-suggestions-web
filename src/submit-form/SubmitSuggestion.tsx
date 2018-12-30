import * as React from "react";
import { WithNamespaces, withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { SuggestionActions, SuggestionSubmit } from "../actions/suggestions";
import { notify, ToastActions } from "../actions/toast";
import { RootState } from "../reducers";
import Suggestion from "../shared/interfaces/suggestion";
import { Form } from "./components/SubmitForm";

interface DispatchProps {
  submit: (suggestion: Suggestion) => any;
  showToast: (message: string) => any;
}

interface StateProps {
  pending: boolean;
  loggedIn: boolean;
}

type Props = DispatchProps & StateProps & WithNamespaces;

class SubmitSuggestion extends React.Component<Props> {
  public render() {
    return <Form onSubmit={this.onSubmit} pending={this.props.pending} />;
  }

  private onSubmit = (suggestion: Suggestion) => {
    if (!this.props.loggedIn) {
      this.props.showToast(this.props.t("submitForm.unauthorized"));
    } else {
      this.props.submit(suggestion);
    }
  };
}

const mapStateToProps = (state: RootState): StateProps => ({
  pending: state.suggestions.submitPending,
  loggedIn: state.auth.loggedIn,
});
// TODO pick if wants to be a supporter or voter

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, undefined, SuggestionActions & ToastActions>
): DispatchProps => ({
  submit: (suggestion: Suggestion) => dispatch(SuggestionSubmit(suggestion)),
  showToast: (message: string) => dispatch(notify({ message })),
});

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces()(SubmitSuggestion)) as React.ComponentClass<{}>;
