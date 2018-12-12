import * as React from 'react'
import {Avatar} from '../../people/Avatar'
import {default as SuggestionInterface} from '../../shared/interfaces/suggestion'
import {inputStyles} from '../../submit-form/components/input-styles'
import {styled} from '../../theme/styled'

const Container = styled.div`
  ${inputStyles};
  padding: 30px;
  background: #fff;
  border-radius: 7px;
  
  margin-bottom: 90px;
  
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  transition: all 300ms ease-in;
`

const CondensedAvatar = styled(Avatar)`
  margin-right: -20px;
`

const H3 = styled.h3`
  color: black;
`
const H4 = styled.h4`
  color: black;
`

export const Suggestion: React.FunctionComponent<SuggestionInterface> = ({title, description, supporters, voters}) =>
    <Container>
        <H3>{title}</H3>
        <p>{description}</p>
        <H4>Supporters</H4>
        {supporters.map((s, i) => <Avatar url={s.picture.medium} key={i}/>)}
        <H4>Voters</H4>
        {voters.map((s, i) => <CondensedAvatar url={s.picture.medium} key={i}/>)}

    </Container>