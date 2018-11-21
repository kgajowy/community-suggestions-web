import React, {Component} from 'react'
// @ts-ignore
import {Provider} from 'react-redux'
import {Normalize} from 'styled-normalize'
import {Effects} from './Effects'
import InitApp from './InitApp'
import store from './store'
import SubmitSuggestion from './submit-form/SubmitSuggestion'
import {CommunitySuggestions} from './suggestions/CommunitySuggestions'
import {defaultTheme} from './theme/default-theme'
import {ThemeProvider} from './theme/styled'

class App extends Component {
    render() {
        return (<Provider store={store}>
                <InitApp/>
                <Effects/>
                <Normalize/>
                <ThemeProvider theme={defaultTheme}>
                    <>
                        <h1>Hello WarsawJS Community!</h1>
                        <SubmitSuggestion/>
                        <h1>Community Suggestions:</h1>
                        <CommunitySuggestions/>
                    </>
                </ThemeProvider>
            </Provider>
        )
    }
}

export default App
