import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { SuggestionActions, SuggestionsGet } from "./actions/suggestions";
import { RootState } from "./reducers";

interface InitAppProps {
  fetch: () => void;
}

class InitApp extends React.Component<InitAppProps> {
  public componentDidMount() {
    this.props.fetch();
  }

  public render() {
    return <React.Fragment />;
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, SuggestionActions>
): InitAppProps => ({
  fetch: () => dispatch(SuggestionsGet())
});

export default connect(
  null,
  mapDispatchToProps
)(InitApp);
