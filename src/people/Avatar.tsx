import * as React from 'react'
import {styled} from '../theme/styled'
import {StyledProps} from '../theme/styled-props'

const Image = styled.img`
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
    :hover {
      transform: rotate(360deg);
    }
    
    transition: all 0.66s;
`

export const Avatar: React.FunctionComponent<{url: string} & StyledProps> = ({url, className}) =>
    <Image className={className} src={url}/>
