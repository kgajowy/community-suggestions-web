import * as React from 'react'
import {Avatar} from '../../people/Avatar'
import {default as SuggestionInterface} from '../../shared/interfaces/suggestion'
import {styled} from '../../theme/styled'

const Container = styled.div`
  padding: 30px;
  border: 1px solid black;
  background: #fff;
  border-radius: 7px;
  
  margin-bottom: 90px;
  
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const CondensedAvatar = styled(Avatar)`
  margin-right: -20px;
`

export const Suggestion: React.FunctionComponent<SuggestionInterface> = ({title, description, supporters, voters}) =>
    <Container>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>Supporters</h4>
        { supporters.map((s,i) => <Avatar url={s.picture.medium} key={i}/>) }
        <h4>Voters</h4>
        { voters.map((s,i) => <CondensedAvatar url={s.picture.medium} key={i}/>) }

    </Container>