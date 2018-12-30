import * as React from "react";
import { WithNamespaces, withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { default as SuggestionEntity } from "../shared/interfaces/suggestion";
import { Suggestions } from "./components/Suggestions";

interface StateProps {
  pending: boolean;
  error: any;
  suggestions: SuggestionEntity[];
}

const CommunitySuggestions: React.FunctionComponent<
  StateProps & WithNamespaces
> = ({ pending, error, suggestions, t }) => {
  return (
    <>
      {pending && <>{t("generics.loading")}</>}
      {error && <>{t("generics.error")}</>}
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
  withNamespaces()(CommunitySuggestions)
) as React.ComponentClass<{}>;
