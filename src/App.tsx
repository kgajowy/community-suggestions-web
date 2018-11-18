import React, {Component} from 'react'
import {Normalize} from 'styled-normalize'
import SubmitSuggestion from './submit-form/SubmitSuggestion'
import {defaultTheme} from './theme/default-theme'
import {ThemeProvider} from './theme/styled'


class App extends Component {
    render() {
        return (<>
                <Normalize/>
                <ThemeProvider theme={defaultTheme}>
                    <SubmitSuggestion/>
                </ThemeProvider>
            </>
        )
    }
}

export default App
