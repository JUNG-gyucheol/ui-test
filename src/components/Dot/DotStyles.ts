import { styled } from 'styled-components'
import { Colors, colorMap } from './types'

type DotProps = {
  $color: Colors
}

const getColor = (props: DotProps) => {
  return colorMap[props.$color]
}

export const DotStyle = styled.div<
  DotProps & { $size?: number; $customColor?: string }
>`
  background-color: ${(props) =>
    props.$customColor ? props.$customColor : getColor(props)};
  width: ${(props) => props.$size || 0}px;
  height: ${(props) => props.$size || 0}px;
  border-radius: ${({ theme: { borderRadiusesMap } }) =>
    borderRadiusesMap.circle};
`
