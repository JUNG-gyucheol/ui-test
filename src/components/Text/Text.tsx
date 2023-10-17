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
import { TextProps } from './types'

const Text = styled.span<TextProps>`
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

export default Text
