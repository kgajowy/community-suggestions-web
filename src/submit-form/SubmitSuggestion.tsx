import * as React from "react";
import { WithNamespaces, withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { SuggestionActions, SuggestionSubmit } from "../actions/suggestions";
import { notify, ToastActions } from "../actions/toast";
import { User } from "../auth/user";
import { RootState } from "../reducers";
import {
  NewSuggestion,
  NewSuggestionInput,
} from "../shared/interfaces/suggestion";
import { Form } from "./components/SubmitForm";

interface DispatchProps {
  submit: (suggestion: NewSuggestion) => any;
  showToast: (message: string) => any;
}

interface StateProps {
  pending: boolean;
  loggedIn: boolean;
  currentUser: User | undefined;
}

type Props = DispatchProps & StateProps & WithNamespaces;

class SubmitSuggestion extends React.Component<Props> {
  public render() {
    return <Form onSubmit={this.onSubmit} pending={this.props.pending} />;
  }

  private onSubmit = (suggestion: NewSuggestionInput) => {
    if (!this.props.loggedIn) {
      this.props.showToast(this.props.t("submitForm.unauthorized"));
    } else {
      this.props.submit({
        ...suggestion,
        authorId: this.props.currentUser!.id,
      });
    }
  };
}

const mapStateToProps = (state: RootState): StateProps => ({
  pending: state.suggestions.submitPending,
  loggedIn: state.auth.loggedIn,
  currentUser: state.auth.currentUser,
});
// TODO pick if wants to be a supporter or voter

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, undefined, SuggestionActions & ToastActions>
): DispatchProps => ({
  submit: (suggestion: NewSuggestion) => dispatch(SuggestionSubmit(suggestion)),
  showToast: (message: string) => dispatch(notify({ message })),
});

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces()(SubmitSuggestion)) as React.ComponentClass<{}>;
