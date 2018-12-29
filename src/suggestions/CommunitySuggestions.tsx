import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { default as SuggestionEntity } from "../shared/interfaces/suggestion";
import { Suggestions } from "./components/Suggestions";

interface StateProps {
  pending: boolean;
  error: any;
  suggestions: SuggestionEntity[];
}

const CommunitySuggestions: React.FunctionComponent<StateProps> = ({
  pending,
  error,
  suggestions,
}) => {
  return (
    <>
      {pending && <>Loading...</>}
      {error && <>Error.</>}
      {!pending && !error && <Suggestions suggestions={suggestions} />}
    </>
  );
};

const mapStateToProps = ({ suggestions }: RootState): StateProps => ({
  pending: suggestions.pending,
  error: suggestions.error,
  suggestions: suggestions.suggestions,
});

export default connect<StateProps, {}, {}, RootState>(mapStateToProps)(
  CommunitySuggestions
) as React.ComponentClass<{}>;
