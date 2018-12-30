import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AuthActions, LogIn, LogOut } from "../../actions/navigation";
import { User } from "../../auth/user";
import { RootState } from "../../reducers";
import { AuthState } from "../../reducers/auth";
import Suggestion from "../../shared/interfaces/suggestion";
import SupportButton from "./SupportButton";

interface OwnProps {
  suggestion: Suggestion;
}

interface DispatchProps {
  logIn: () => any;
  logOut: () => any;
}

interface StateProps {
  loggedIn: boolean;
  currentUser: User;
}

type Props = DispatchProps & StateProps & OwnProps;

export class Support extends React.Component<Props> {
  public render() {
    return <SupportButton onClick={console.log} />;
  }
}

// TODO add toast show fn
// TODO check if in given suggestion current User is a Supporter already
const mapDispatchToProps = (
  dispatch: ThunkDispatch<AuthState, undefined, AuthActions>
): DispatchProps => ({
  logIn: () =>
    dispatch(LogIn({ email: "Test@domain.com", password: "qwerty" })),
  logOut: () => dispatch(LogOut()),
});

const mapStateToProps = ({ auth }: RootState): StateProps => ({
  loggedIn: auth.loggedIn,
  currentUser: auth.currentUser!,
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Support) as React.ComponentClass<OwnProps>;
