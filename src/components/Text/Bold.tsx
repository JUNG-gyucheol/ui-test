import styled from 'styled-components'
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system'
import { StyledSystemProps } from '../../utils'
import { TextProps } from './types'

const Bold = styled.b<TextProps>`
  color: ${(props) => props.theme[props.color]};
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
`

export default Bold
