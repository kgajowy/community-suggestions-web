import * as React from "react";
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

type Props = DispatchProps & StateProps & OwnProps;

export class Support extends React.Component<Props> {
  public render() {
    return <SupportButton onClick={this.support} />;
  }

  private support = () => {
    this.props.support(this.props.suggestion);
  };
}

// TODO add toast show fn
// TODO check if in given suggestion current User is a Supporter already
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
)(Support) as React.ComponentClass<OwnProps>;
