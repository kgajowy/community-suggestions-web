import React, { Component } from "react";
import { NamespacesConsumer } from "react-i18next";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import { NavBar } from "./components/navbar/NavBar";
import Toasts from "./components/toast/Toasts";
import InitApp from "./InitApp";
import { media } from "./shared/styles/media";
import store from "./store";
import SubmitSuggestion from "./submit-form/SubmitSuggestion";
import CommunitySuggestions from "./suggestions/CommunitySuggestions";
import { defaultTheme } from "./theme/default-theme";
import { createGlobalStyle, styled, ThemeProvider } from "./theme/styled";

const CenterColumn = styled.div`
  margin: 0 auto;
  width: 75%;
  max-width: 1200px;
  min-width: 300px;
  ${media.desktop`
    width: 83%;
  `}
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Titillium Web', sans-serif;
  }
`;

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <>
          <GlobalStyle />
          <InitApp />
          <Normalize />
          <ThemeProvider theme={defaultTheme}>
            <>
              <NavBar />
              <NamespacesConsumer>
                {t => (
                  <CenterColumn>
                    <h1>{t("pages.main.formHeading")}</h1>
                    <SubmitSuggestion />
                    <h1>{t("pages.main.resultsHeading")}</h1>
                    <CommunitySuggestions />
                  </CenterColumn>
                )}
              </NamespacesConsumer>

              <Toasts />
            </>
          </ThemeProvider>
        </>
      </Provider>
    );
  }
}

export default App;
