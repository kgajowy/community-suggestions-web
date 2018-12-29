import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AuthActions, LogIn, LogOut } from "../../actions/navigation";

import { User } from "../../auth/user";
import { RootState } from "../../reducers";
import { LoginLink } from "./components/LogInLink";
import { LogoutLink } from "./components/LogoutLink";

interface DispatchProps {
  logIn: () => any;
  logOut: () => any;
}

interface StateProps {
  pending: boolean;
  logOutPending: boolean;
  loggedIn: boolean;
  user?: User;
}

type Props = DispatchProps & StateProps;

const AuthLink: React.FunctionComponent<Props> = ({
  logIn,
  loggedIn,
  logOut,
  user,
}) => (
  <>
    {!loggedIn && <LoginLink logIn={logIn} />}
    {loggedIn && <LogoutLink logOut={logOut} user={user!} />}
  </>
);

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, AuthActions>
): DispatchProps => ({
  logIn: () =>
    dispatch(LogIn({ email: "Test@domain.com", password: "qwerty" })),
  logOut: () => dispatch(LogOut()),
});

const mapStateToProps = (state: RootState): StateProps => ({
  pending: state.auth.loginPending,
  logOutPending: state.auth.logoutPending,
  loggedIn: state.auth.loggedIn,
  user: state.auth.currentUser,
});

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(AuthLink) as React.ComponentClass<{}>;
