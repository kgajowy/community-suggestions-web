import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Normalize} from 'styled-normalize'
import InitApp from './InitApp'
import {media} from './shared/styles/media'
import store from './store'
import SubmitSuggestion from './submit-form/SubmitSuggestion'
import CommunitySuggestions from './suggestions/CommunitySuggestions'
import {defaultTheme} from './theme/default-theme'
import {styled, ThemeProvider} from './theme/styled'

const CenterColumn = styled.div`
  margin: 0 auto;
  width: 75%;
  max-width: 1200px;
  min-width: 300px;
  ${media.desktop`
    width: 83%;
  `}
`

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <InitApp/>
                    <Normalize/>
                    <ThemeProvider theme={defaultTheme}>
                        <CenterColumn>
                            <h1>Hello WarsawJS Community!</h1>
                            <SubmitSuggestion/>
                            <h1>Community Suggestions:</h1>
                            <CommunitySuggestions/>
                        </CenterColumn>
                    </ThemeProvider>
                </>
            </Provider>
        )
    }
}

export default App
