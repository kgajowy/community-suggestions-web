import React, {Component} from 'react'
import {Normalize} from 'styled-normalize'
import SubmitSuggestion from './submit-form/SubmitSuggestion'
import {CommunitySuggestions} from './suggestions/CommunitySuggestions'
import {defaultTheme} from './theme/default-theme'
import {ThemeProvider} from './theme/styled'

class App extends Component {
    render() {
        return (<>
                <Normalize/>
                <ThemeProvider theme={defaultTheme}>
                    <>
                        <h1>Hello WarsawJS Community!</h1>
                        <SubmitSuggestion/>
                        <h1>Community Suggestions:</h1>
                        <CommunitySuggestions/>
                    </>
                </ThemeProvider>
            </>
        )
    }
}

export default App
