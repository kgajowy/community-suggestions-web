import React, {Component} from 'react'
import {Normalize} from 'styled-normalize'
import SubmitSuggestion from './submit-form/SubmitSuggestion'
import {CommunitySuggestions} from './suggestions/CommunitySuggestions'
import {CommunitySuggestionsTwo} from './suggestions/CommunitySuggestionsTwo'
import {defaultTheme} from './theme/default-theme'
import {ThemeProvider} from './theme/styled'

// @ts-ignore
import { Provider } from "react-redux";

import store from "./store";

class App extends Component {
    render() {
        return (<>
                <Normalize/>
                <ThemeProvider theme={defaultTheme}>
                    <Provider store={store}>
                        <h1>Hello WarsawJS Community!</h1>
                        <SubmitSuggestion/>
                        <h1>Community Suggestions Two:</h1>
                        <CommunitySuggestionsTwo/>
                        <h1>Community Suggestions:</h1>
                        <CommunitySuggestions/>
                    </Provider>
                </ThemeProvider>
            </>
        )
    }
}

export default App
