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
  align-items: center;
  justify-content: center;
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
