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

const Flex = styled.div<StyledSystemProps>`
  display: flex;
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

export default Flex
